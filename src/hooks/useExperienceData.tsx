import { useEffect, useState } from 'react';
import { getExperienceData } from '../api';
import { ExperienceDataProps } from '../types/components';

export function useExperienceData() {
  const [experienceData, setExperienceData] = useState<ExperienceDataProps[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getExperienceData();
        setExperienceData(data);
        setIsLoading(false);
      } catch (error: any) {
        setError(error);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return { experienceData, isLoading, error };
}
