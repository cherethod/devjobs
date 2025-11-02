import {JobCard} from "./JobCard";

export const JobsList = ({ jobsToShow }) => {
  return (
    <section className="resultados" id="resultados">
      <h2>Resultados de la búsqueda</h2>
      <div>
        {jobsToShow.map((job, index) => (
            <JobCard
              puesto={job.titulo}
              empresa={job.empresa}
              ubicacion={job.ubicacion}
              descripcion={job.descripcion}
              key={job.id}
            />
          ))}
      </div>
    </section>
  );
};
