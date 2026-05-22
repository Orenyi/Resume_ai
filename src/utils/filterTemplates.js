const filterTemplates = (templates, filters, search) => {
  return templates.filter((template) => {
    const matchesSearch = template.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      filters.category === "All" || template.category === filters.category;
    const matchesCareer =
      filters.career === "All" || template.career === filters.career;
    const matchesColor =
      filters.color === "All" || template.color === filters.color;
    return matchesSearch && matchesCategory && matchesCareer && matchesColor;
  });
};
export default filterTemplates;
