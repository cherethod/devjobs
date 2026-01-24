import { useState, useEffect } from "react";
import { useRouter } from "./useRouter";
let timeoutId = null;
export function useFilters() {
  const [filters, setFilters] = useState(() => {
    const urlParams = new URLSearchParams(window.location.search);
    return {
      techFilter: urlParams.get("technology") || "",
      locationFilter: urlParams.get("type") || "",
      contractFilter: urlParams.get("contract") || "",
      experienceFilter: urlParams.get("level") || "",
      searchFilter: urlParams.get("text") || "",
    };
    
  });
  const [hasActiveFilters, setHasActiveFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const page = Number(urlParams.get("page"));
    return isNaN(page) || page < 1 ? 1 : page;
  });
  const [jobs, setJobs] = useState([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { navigateTo } = useRouter();

  const RESOULTS_PER_PAGE = 4;

  const totalPages = Math.ceil(total / RESOULTS_PER_PAGE);

  const handleClearActiveFilters = () => {
    setFilters({
      techFilter: "",
      locationFilter: "",
      contractFilter: "",
      experienceFilter: "",
      searchFilter: "",
    });
    setHasActiveFilters(false);
    setCurrentPage(1);
  };

  useEffect(() => {
    async function fetchJobs() {
      try {
        setIsLoading(true);

        const params = new URLSearchParams();
        if (filters.searchFilter) params.append("text", filters.searchFilter);
        if (filters.techFilter) params.append("technology", filters.techFilter);
        if (filters.locationFilter) params.append("type", filters.locationFilter);
        if (filters.experienceFilter) params.append("level", filters.experienceFilter);

        const offset = (currentPage - 1) * RESOULTS_PER_PAGE;
        params.append("limit", RESOULTS_PER_PAGE);
        params.append("offset", offset);

        const queryParam = params.toString();

        const response = await fetch(
          `https://jscamp-api.vercel.app/api/jobs?${queryParam}`
        );
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
    const checkActiveFilters = () => {
      if (
        newFilters.techFilter ||
        newFilters.locationFilter ||
        newFilters.contractFilter ||
        newFilters.experienceFilter
      ) {
        return true;
      } else {
        return false;
      }
    };
    // DEBOUNCE IF HAVE AN ACTIVE SEARCH FILTER OR IT WAS CHANGED
    if (
      newFilters.searchFilter !== filters.searchFilter
    ) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setFilters(newFilters);
        setCurrentPage(1);
        setHasActiveFilters(checkActiveFilters());
      }, 500);
    } else {
      setFilters(newFilters);
      setCurrentPage(1);
      setHasActiveFilters(checkActiveFilters());
    }
  }
  const handlePageChange = (newPage) => {
    console.log(`Changing to page ${newPage} (was ${currentPage})`);
    setCurrentPage(newPage);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setFilters({
      ...filters,
      searchFilter: urlParams.get("text") || "",
      techFilter: urlParams.get("technology") || "",
      locationFilter: urlParams.get("type") || "",
      contractFilter: urlParams.get("contract") || "",
      experienceFilter: urlParams.get("level") || "",
    });
    setCurrentPage(Number(urlParams.get("page")) || 1);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.searchFilter) params.append("text", filters.searchFilter);
    if (filters.techFilter) params.append("technology", filters.techFilter);
    if (filters.locationFilter) params.append("type", filters.locationFilter);
    if (filters.experienceFilter) params.append("level", filters.experienceFilter);
    if (currentPage > 1) params.append("page", currentPage);

    const newUlr = params.toString() 
      ? `${window.location.pathname}?${params.toString()}`
      : window.location.pathname;
    navigateTo(newUlr);
  }, [filters, currentPage]);

  return {
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
  };
}
