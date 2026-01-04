import { JobCard } from "./JobCard";

export const JobsList = ({ jobs }) => {
  return (
    <section className="resultados" id="resultados">
      <h2>Resultados de la búsqueda</h2>
      <div>
        {jobs.length === 0 && (
          <article>
            <p>
              No se han encontrado empleos que coincidan con los filtros
              aplicados.
            </p>
          </article>
        )}
        {jobs.map((job, index) => (
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
