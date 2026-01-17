import { useEffect } from "react";
import { JobsList } from "../components/jobs_search/JobsList";
import { Pagination } from "../components/jobs_search/Pagination";
import { FiltersForm } from "../components/jobs_search/FiltersForm";

import { useFilters } from "../hooks/useFilters";

export function SearchPage() {
  const {
    filters,
    jobs,
    total,
    currentPage,
    totalPages,
    isLoading,
    hasActiveFilters,
    handleClearActiveFilters,
    handleFilterChange,
    handlePageChange,
  } = useFilters();

  useEffect(() => {
    document.title = `DevJobs - Búsqueda de empleos | Resultados: ${total} - Página ${currentPage}`;
  }, [jobs, currentPage]);
  const title =
    total > 0
      ? `DevJobs - Búsqueda de empleos | Resultados: ${total} - Página ${currentPage}`
      : "DevJobs - Búsqueda de empleos | No se encontraron empleos que coincidan con tus criterios de búsqueda.";

  return (
    <main>
      <title>{title}</title>
      <meta
        name="description"
        content="Explora miles de oportunidades laborales para desarrolladores web en DevJobs. Filtra por tecnología, ubicación, tipo de contrato y experiencia para encontrar el trabajo perfecto."
      />
      <section>
        <h1>Encuentra tu próximo trabajo</h1>
        <p>Explora miles de oportunidades en el sector tecnológico.</p>
        <FiltersForm
          onChange={handleFilterChange}
          filters={filters}
          hasActiveFilters={hasActiveFilters}
          handleClearActiveFilters={handleClearActiveFilters}
        />
      </section>
      {isLoading ? <p>Cargando empleos...</p> : <JobsList jobs={jobs} />}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </main>
  );
}
