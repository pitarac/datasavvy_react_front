import axios from 'axios';

const API_URL = 'http://localhost:5001/api/services';

// Buscar todos os serviços
export const fetchServices = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar serviços:', error);
    return [];
  }
};

// Buscar serviço pelo slug
export const fetchServiceBySlug = async (slug) => {
  try {
    const response = await axios.get(`${API_URL}/${slug}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar serviço:', error);
    return null;
  }
};

// Criar novo serviço
export const createService = async (serviceData) => {
  try {
    const response = await axios.post(API_URL, serviceData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar serviço:', error);
    return null;
  }
};

// Atualizar serviço existente
export const updateService = async (id, serviceData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, serviceData);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar serviço:', error);
    return null;
  }
};

// Deletar serviço
export const deleteService = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao deletar serviço:', error);
    return null;
  }
};
