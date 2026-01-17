export function useSearchForm({
  techFilterId,
  locationFilterId,
  contractFilterId,
  experienceFilterId,
  searchFilterId,
  onChange,
}) {
  const handleFormChange = (event) => {
    event.preventDefault();
    const jobsFormData = new FormData(event.currentTarget);
    if (event.target.name === searchFilterId) {
      
    }
    const filters = {
      techFilter: jobsFormData.get(techFilterId) || "",
      locationFilter: jobsFormData.get(locationFilterId) || "",
      contractFilter: jobsFormData.get(contractFilterId) || "",
      experienceFilter: jobsFormData.get(experienceFilterId) || "",
      searchFilter: jobsFormData.get(searchFilterId) || "",
    };

    onChange(filters);
  };

  return { handleFormChange };
}
