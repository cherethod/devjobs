// Variables

const jobResultsContainer = document.querySelector('.resultados')
const jobTemplate = document.querySelector('#job-template').content
const jobPaginationContainer = document.querySelector('.pagination')
const jobTechnologySelect = document.querySelector('#tecnologia')
const jobLocationSelect = document.querySelector('#ubicacion')
const jobContractSelect = document.querySelector('#contrato')
const jobExperienceSelect = document.querySelector('#experiencia')

const jobFilters = {
    tecnologia: jobTechnologySelect.value,
    ubicacion: jobLocationSelect.value,
    contrato: jobContractSelect.value,
    experiencia: jobExperienceSelect.value
}

let jobsPerPage = 5;
let currentPage = 1;

// Event Listeners

jobResultsContainer.addEventListener('click', (e) => {
    const element = e.target
    handleApplyToJob(element)
})

jobTechnologySelect.addEventListener('change', (e) => {
    jobFilters.tecnologia = e.target.value;
    console.log(jobFilters);
    filterJobs()
})

jobLocationSelect.addEventListener('change', (e) => {
    jobFilters.ubicacion = e.target.value;
    console.log(jobFilters);
    filterJobs()
})

jobContractSelect.addEventListener('change', (e) => {
    jobFilters.contrato = e.target.value;
    console.log(jobFilters);
    filterJobs()
})

jobExperienceSelect.addEventListener('change', (e) => {
    jobFilters.experiencia = e.target.value;
    console.log(jobFilters);
    filterJobs()
})

// Fetch jobs data

let allJobs = [];

fetch('./js/jobsResponse.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        allJobs = data.ofertas;
        filterJobs();
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
        

// Functions

const renderJobs = (jobs) => {
    if (!jobs) {
        jobs = allJobs;
    } 
    const element = jobResultsContainer.children[1]
    
    element.innerHTML = '';
    const fragment = document.createDocumentFragment();
    jobs.forEach((job, index) => {

    if (index + 1 <= (currentPage * jobsPerPage) && index + 1 > ((currentPage - 1) * jobsPerPage)) {
    const { puesto, empresa, ubicacion, tecnologia, contrato, experiencia, descripcion } = job;
        const jobClone = jobTemplate.cloneNode(true);
        jobClone.querySelector('.job-title').textContent = puesto;
        jobClone.querySelector('.job-details').textContent = `${empresa} | ${ubicacion} | ${contrato} | ${experiencia} `;
        jobClone.querySelector('.job-description').textContent = descripcion;
        fragment.appendChild(jobClone);
        element.appendChild(fragment);
    }
});
    renderPagination(jobs.length);
    console.log('Ofertas mostradas: '+ jobs.length , jobs);
    
}

const renderPagination = (totalJobs) => {
    jobPaginationContainer.innerHTML = '';
    const paginationFragment = document.createDocumentFragment();
    const totalPages = Math.ceil(totalJobs / jobsPerPage);
    const leftArrow = document.createElement('a');
    leftArrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg>`;
    leftArrow.dataset.page = currentPage - 1;
    if (currentPage == 1) leftArrow.classList.add('is-disabled');
    paginationFragment.appendChild(leftArrow);

    for (let i = 1; i <= totalPages; i++) {  
        const pageElement = document.createElement('a');
        pageElement.textContent = i;
        pageElement.className = i === currentPage ? 'is-active' : '';
        pageElement.dataset.page = i;
        paginationFragment.appendChild(pageElement);
    }
    const rightArrow = document.createElement('a');
    rightArrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>`;
    rightArrow.dataset.page = currentPage + 1;
    if (currentPage == totalPages) rightArrow.classList.add('is-disabled');
    paginationFragment.appendChild(rightArrow);
    jobPaginationContainer.appendChild(paginationFragment);
}

const setPage = (page) => {
    console.log('Página seleccionada: ', page);
    currentPage = page;
    filterJobs();
    console.log('Página actual: ', currentPage);
}

const filterJobs = () => {
    const newJobs = allJobs.filter((job) => {
        console.log(job);
        
        if (
            (job.tecnologia.includes(jobFilters.tecnologia) || jobFilters.tecnologia === '') &&
            (job.ubicacion === jobFilters.ubicacion || jobFilters.ubicacion === '') &&
            (job.contrato === jobFilters.contrato || jobFilters.contrato === '') &&
            (job.experiencia === jobFilters.experiencia || jobFilters.experiencia === '')
        ) return job
    })
    renderJobs(newJobs);    
    console.log('Los filtros: ', jobFilters, "\nhan filtrado las ofertas: ", newJobs);
}

const handleApplyToJob = (element) => {
    if (element.nodeName !== "BUTTON") return
    element.classList.add('is-applied');
    element.textContent = 'Aplicado';
    console.log(element);
}