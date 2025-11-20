import { useState, useEffect } from "react";

export function useFilters({ setCurrentPage }) {
  const [filters, setFilters] = useState({
    techFilter: "",
    locationFilter: "",
    contractFilter: "",
    experienceFilter: "",
    searchFilter: "",
  });

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

  return { filters, handleFilterChange, handlePageChange };
}
