import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditBlog = () => {
  const { id } = useParams(); // Pega o ID do blog da URL
  const navigate = useNavigate(); // Para redirecionar o usuário após a edição
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    author: '',
    authorTitle: '',
    screens: '',
    bSingle: '',
  });

  useEffect(() => {
    // Buscar os dados do blog pelo ID quando o componente montar
    axios.get(`http://localhost:5001/api/blogs/${id}`)
      .then(response => {
        setFormData(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar o blog:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Atualizar o blog pelo ID
    axios.put(`http://localhost:5001/api/blogs/${id}`, formData)
      .then(() => {
        alert('Blog atualizado com sucesso!');
        navigate('/admin/dashboard'); // Redireciona de volta ao dashboard após a atualização
      })
      .catch(error => {
        console.error('Erro ao atualizar o blog:', error);
      });
  };

  return (
    <div>
      <h1>Editar Blog</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Título"
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
          name="author"
          placeholder="Autor"
          value={formData.author}
          onChange={handleChange}
        />
        <input
          type="text"
          name="authorTitle"
          placeholder="Título do Autor"
          value={formData.authorTitle}
          onChange={handleChange}
        />
        <button type="submit">Atualizar Blog</button>
      </form>
    </div>
  );
}

export default EditBlog;
