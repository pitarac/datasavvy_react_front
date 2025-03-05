import axios from 'axios';

const API_URL = 'http://localhost:5001/api/blogs'; // URL do backend

// 🟢 Buscar todos os blogs
export const fetchBlogs = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar blogs:', error);
    return [];
  }
};

// 🟢 Buscar um blog específico pelo slug
export const fetchBlogBySlug = async (slug) => {
  try {
    const response = await axios.get(`${API_URL}/slug/${slug}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar blog com slug ${slug}:`, error);
    return null;
  }
};

// 🟢 Criar um novo blog
export const createBlog = async (blogData) => {
  try {
    const response = await axios.post(API_URL, blogData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar blog:', error);
    return null;
  }
};

// 🟢 Atualizar um blog existente
export const updateBlog = async (id, blogData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, blogData);
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar blog com ID ${id}:`, error);
    return null;
  }
};

// 🟢 Excluir um blog
export const deleteBlog = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return { success: true };
  } catch (error) {
    console.error(`Erro ao excluir blog com ID ${id}:`, error);
    return { success: false };
  }
};
