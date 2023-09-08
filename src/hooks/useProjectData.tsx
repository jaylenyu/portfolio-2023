import { useEffect, useState } from 'react';
import { getProjectData } from '../api';
import { ProjectDataProps } from '../types/components';

export function useProjectData() {
  const [projectData, setProjectData] = useState<ProjectDataProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProjectData();
        setProjectData(data);
        setIsLoading(false);
      } catch (error: any) {
        setError(error);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return { projectData, isLoading, error };
}
