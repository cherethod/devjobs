const jobResultsContainer = document.querySelector('.resultados')

jobResultsContainer.addEventListener('click', (e) => {
    const element = e.target
    handleApplyToJob(element)
})

const handleApplyToJob = (element) => {
    if (element.nodeName !== "BUTTON") return
    element.classList.add('is-applied');
    console.log(element);
    
}