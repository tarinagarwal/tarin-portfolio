import axios from 'axios';

const API_URL = 'https://portfolio-backend-kukl.onrender.com/api/v1/blogs';

interface Blog {
  id: number;
  title: string;
  author: string;
  date: string;
  img: string;
  body: string;
  description: string;
}

const getBlogs = async (): Promise<Blog[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data.blogs;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
};

const addBlog = async (blog: Omit<Blog, 'id'>) => {
  try {
    const response = await axios.post(API_URL, blog);
    return response.data;
  } catch (error) {
    console.error('Error adding blog:', error);
    throw error;
  }
};

export { getBlogs, addBlog };
