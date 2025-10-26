import jobsResponse from "../jobsResponse.json";
import JobCard from "./JobCard";

const JobsList = ({techFilter, locationFilter, contractFilter, experienceFilter}) => {
    return (
           <section className="resultados" id="resultados">
        <h2>Resultados de la búsqueda</h2>
        <div>
          {jobsResponse.ofertas
            .filter((job) => {
              return (
                (techFilter === "" || job.tecnologia.includes(techFilter)) &&
                (locationFilter === "" || job.ubicacion === locationFilter) &&
                (contractFilter === "" || job.contrato === contractFilter) &&
                (experienceFilter === "" || job.experiencia === experienceFilter)
              );
            })
            .map((job, index) => (
              <JobCard
                puesto={job.puesto}
                empresa={job.empresa}
                ubicacion={job.ubicacion}
                descripcion={job.descripcion}
                key={`job-${index}`}
              />
            ))}
        </div>
      </section>
    )
}
export default JobsList;