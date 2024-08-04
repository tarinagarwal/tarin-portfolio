import axios from "axios";

const API_URL = "https://portfolio-backend-kukl.onrender.com/api/v1/skills";

interface Skill {
  id?: number;
  name: string;
  iconid: string;
  redirecturl: string;
}

const getSkills = async (): Promise<Skill[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data.skills;
  } catch (error) {
    console.error("Error fetching skills:", error);
    throw error;
  }
};

const addSkill = async (skill: Omit<Skill, 'id'>): Promise<Skill> => {
  try {
    const response = await axios.post(API_URL, skill);
    return response.data;
  } catch (error) {
    console.error("Error adding skill:", error);
    throw error;
  }
};

const deleteSkill = async (id: number): Promise<void> => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    if (response.status !== 200) throw new Error("Failed to delete skill");
  } catch (error) {
    console.error("Error deleting skill:", error);
    throw error;
  }
};

const updateSkill = async (id: number, skill: Omit<Skill, 'id'>): Promise<void> => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, skill);
    if (response.status !== 200) throw new Error("Failed to update skill");
  } catch (error) {
    console.error("Error updating skill:", error);
    throw error;
  }
};

export { getSkills, addSkill, deleteSkill, updateSkill };
