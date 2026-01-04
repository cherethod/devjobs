import { useState, useEffect } from "react";
import { JobsList } from "../components/jobs_search/JobsList";
import { Pagination } from "../components/jobs_search/Pagination";
import { FiltersForm } from "../components/jobs_search/FiltersForm";

import { useFilters } from "../hooks/useFilters";

export function SearchPage() {

  const { filters, jobs, total, currentPage, totalPages, isLoading, handleFilterChange, handlePageChange } = useFilters();

  useEffect(() => {
    document.title = `DevJobs - Búsqueda de empleos | Resultados: ${total} - Página ${currentPage}`;
  }, [jobs, currentPage]);


  return (
    <main>
      <section>
        <h1>Encuentra tu próximo trabajo</h1>
        <p>Explora miles de oportunidades en el sector tecnológico.</p>
        <FiltersForm onChange={handleFilterChange} filters={filters} />
      </section>
      {
        isLoading ? <p>Cargando empleos...</p> : <JobsList jobs={jobs} />
      }
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </main>
  );
}
