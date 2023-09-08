import axios from 'axios';

async function fetchData(url: string) {
  try {
    const res = await axios.get(url);
    return res.data.data;
  } catch (error) {
    return [];
  }
}

export async function getProjectData() {
  return fetchData('/data/ProjectList.json');
}

export async function getExperienceData() {
  return fetchData('/data/ExperienceList.json');
}
