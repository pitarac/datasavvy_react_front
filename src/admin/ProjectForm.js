import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    slug: '',
    sub: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Fazer a requisição POST para criar um novo projeto
      await axios.post('http://localhost:5001/api/projects', formData);
      alert('Projeto criado com sucesso!');
      navigate('/admin/projects'); // Redirecionar para a lista de projetos após a criação
    } catch (error) {
      console.error('Erro ao criar projeto:', error);
      alert('Erro ao criar projeto. Por favor, tente novamente.');
    }
  };

  return (
    <div>
      <h1>Criar Novo Projeto</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Título do Projeto"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="slug"
          placeholder="Slug"
          value={formData.slug}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Descrição"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="sub"
          placeholder="Subcategoria"
          value={formData.sub}
          onChange={handleChange}
        />
        <button type="submit">Criar Projeto</button>
      </form>
    </div>
  );
};

export default ProjectForm;
