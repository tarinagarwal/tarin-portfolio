import axios from "axios";

const API_URL = "https://portfolio-backend-kukl.onrender.com/api/v1/projects";

const getProjects = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

const addProject = async (project: {
  src: string;
  link: string;
  repo: string;
}) => {
  try {
    const response = await axios.post(API_URL, project);
    return response.data;
  } catch (error) {
    console.error("Error adding project:", error);
    throw error;
  }
};

export { getProjects, addProject };
