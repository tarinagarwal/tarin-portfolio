import axios from "axios";

const API_URL = "https://portfolio-backend-kukl.onrender.com/api/v1/skills";

const getSkills = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.skills;
  } catch (error) {
    console.error("Error fetching skills:", error);
    throw error;
  }
};

const addSkill = async (skill: {
  name: string;
  iconId: string;
  redirectUrl: string;
}) => {
  try {
    const response = await axios.post(API_URL, skill);
    return response.data;
  } catch (error) {
    console.error("Error adding skill:", error);
    throw error;
  }
};

export { getSkills, addSkill };
