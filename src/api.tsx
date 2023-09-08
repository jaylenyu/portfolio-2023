// api.tsx
import axios from 'axios';

export async function getProjectData() {
  try {
    const res = await axios.get('/data/ProjectList.json');
    return res.data.data;
  } catch (error) {
    return [];
  }
}

export async function getExperienceData() {
  try {
    const res = await axios.get('/data/ExperienceList.json');
    return res.data.data;
  } catch (error) {
    return [];
  }
}
