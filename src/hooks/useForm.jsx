export function useSearchForm({
  techFilterId,
  locationFilterId,
  contractFilterId,
  experienceFilterId,
  searchFilterId,
  onChange,
}) {
  const handleFormChange = (event) => {
    const jobsFormData = new FormData(event.currentTarget);

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
