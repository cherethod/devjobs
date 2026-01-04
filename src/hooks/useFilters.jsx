import { useState, useEffect } from "react";
import jobsResponse from "../jobsResponse.json";

export function useFilters() {
  const [filters, setFilters] = useState({
    techFilter: "",
    locationFilter: "",
    contractFilter: "",
    experienceFilter: "",
    searchFilter: "",
  });
  
  const [currentPage, setCurrentPage] = useState(1);
  
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

  function handleFilterChange(newFilters) {
    setFilters(newFilters);

    setCurrentPage(1);
  }

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setFilters({
      ...filters,
      searchFilter: urlParams.get("query") || "",
      techFilter: urlParams.get("tech") || "",
      locationFilter: urlParams.get("location") || "",
      contractFilter: urlParams.get("contract") || "",
      experienceFilter: urlParams.get("experience") || "",
    });
  }, []);

  return { filters, filteredJobs, jobsToShow, currentPage, totalPages, handleFilterChange, handlePageChange };
}
