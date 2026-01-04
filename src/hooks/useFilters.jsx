import { useState, useEffect } from "react";

export function useFilters() {
  const [filters, setFilters] = useState({
    techFilter: "",
    locationFilter: "",
    contractFilter: "",
    experienceFilter: "",
    searchFilter: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [jobs, setJobs] = useState([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const RESOULTS_PER_PAGE = 4;

  const totalPages = Math.ceil(total / RESOULTS_PER_PAGE);

  useEffect(() => {
    async function fetchJobs() {
      try {
        setIsLoading(true);

        const params = new URLSearchParams();
        if (filters.searchFilter) params.append("query", filters.searchFilter);
        if (filters.techFilter) params.append("technology", filters.techFilter);
        if (filters.locationFilter) params.append("type", filters.locationFilter);
        if (filters.experienceFilter) params.append("level", filters.experienceFilter);
        
        const offset = (currentPage - 1) * RESOULTS_PER_PAGE;
        params.append('limit', RESOULTS_PER_PAGE);
        params.append('offset', offset);

        
        const queryParam = params.toString();

        const response = await fetch(`https://jscamp-api.vercel.app/api/jobs${'?' + queryParam}`);
        const json = await response.json();
        setJobs(json.data);
        setTotal(json.total);
      } catch (error) {
        throw new Error("Error fetching jobs: ", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchJobs();
  }, [filters, currentPage]);

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

  return {
    filters,
    jobs,
    total,
    currentPage,
    totalPages,
    isLoading,    
    handleFilterChange,
    handlePageChange,
  };
}
