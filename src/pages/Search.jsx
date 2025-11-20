import { useState, useEffect } from "react";
import { JobsList } from "../components/jobs_search/JobsList";
import { Pagination } from "../components/jobs_search/Pagination";
import { FiltersForm } from "../components/jobs_search/FiltersForm";

import jobsResponse from "../jobsResponse.json";
import { useFilters } from "../hooks/useFilters";

export function SearchPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const { filters, handleFilterChange, handlePageChange } = useFilters({
    setCurrentPage
  });

  const RESOULTS_PER_PAGE = 5;

  const filteredJobs = jobsResponse.filter(
    (job) =>
      (job.titulo.toLowerCase().includes(filters.searchFilter.toLowerCase()) ||
        filters.searchFilter == "") &&
      (job.data.technology.includes(filters.techFilter.toLowerCase()) ||
        filters.techFilter == "") &&
      (job.data.modalidad.includes(filters.locationFilter) ||
        filters.locationFilter == "") &&
      (job.data.contract.includes(filters.contractFilter) ||
        filters.contractFilter == "") &&
      (job.data.exp_level.includes(filters.experienceFilter) ||
        filters.experienceFilter == "")
  );

  const jobsToShow = filteredJobs.slice(
    (currentPage - 1) * RESOULTS_PER_PAGE,
    currentPage * RESOULTS_PER_PAGE
  );

  const totalPages = Math.ceil(filteredJobs.length / RESOULTS_PER_PAGE);

  useEffect(() => {
    document.title = `DevJobs - Búsqueda de empleos | Resultados: ${filteredJobs.length} - Página ${currentPage}`;
  }, [filteredJobs, currentPage]);

  return (
    <main>
      <section>
        <h1>Encuentra tu próximo trabajo</h1>
        <p>Explora miles de oportunidades en el sector tecnológico.</p>
        <FiltersForm onChange={handleFilterChange} filters={filters} />
      </section>
      <JobsList jobsToShow={jobsToShow} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </main>
  );
}
