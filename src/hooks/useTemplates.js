import { useEffect } from "react";
import useTemplateStore from "../store/templateStore";
import templateService from "../services/templateService";
import filterTemplates from "../utils/filterTemplates";

const useTemplates = () => {
  const {
    templates,
    setTemplates,
    loading,
    setLoading,
    filters,
    setFilters,
    search,
    setSearch,
  } = useTemplateStore();

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        setLoading(true);

        const data = await templateService.getTemplates();

        setTemplates(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTemplates();
  }, []);

  const filteredTemplates = filterTemplates(templates, filters, search);

  return {
    templates: filteredTemplates,
    loading,
    filters,
    setFilters,
    search,
    setSearch,
  };
};

export default useTemplates;
