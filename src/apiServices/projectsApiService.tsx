import axios from "axios";

const API_URL = "https://portfolio-backend-kukl.onrender.com/api/v1/projects";

interface Project {
  id?: number;
  src: string;
  link: string;
  repo?: string;
}

const getProjects = async (): Promise<Project[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data.projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

const addProject = async (project: Project): Promise<Project | null> => {
  try {
    const response = await axios.post(API_URL, project);
    return response.data;
  } catch (error) {
    console.error("Error adding project:", error);
    throw error;
  }
};

const deleteProject = async (id: number): Promise<void> => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    if (response.status !== 200) throw new Error("Failed to delete project");
  } catch (error) {
    console.error("Error deleting project:", error);
    throw error;
  }
};

const updateProject = async (id: number, project: Project): Promise<void> => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, project);
    if (response.status !== 200) throw new Error("Failed to update project");
  } catch (error) {
    console.error("Error updating project:", error);
    throw error;
  }
};

export { getProjects, addProject, deleteProject, updateProject };
