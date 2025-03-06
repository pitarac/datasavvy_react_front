import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './BlogForm.css'; // Importar o CSS para estilização

const BlogForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    longDescription: '',
    author: '',
    category: '',
    create_at: '',
    comment: '',
    thumb: '',
    blClass: '',
  });

  const [image, setImage] = useState(null);
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Carregar autores e categorias do backend
  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:5001/api/categories'),
      axios.get('http://localhost:5001/api/authors')
    ])
    .then(([categoriesResponse, authorsResponse]) => {
      setCategories(categoriesResponse.data);
      setAuthors(authorsResponse.data);
      setLoading(false);
    })
    .catch(error => {
      console.error('Erro ao carregar dados:', error);
      setError('Erro ao carregar categorias e autores.');
      setLoading(false);
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('slug', formData.slug);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('longDescription', formData.longDescription);
    formDataToSend.append('author', formData.author);  // Agora envia o _id do autor
    formDataToSend.append('category', formData.category);  // Agora envia o _id da categoria
    formDataToSend.append('create_at', formData.create_at);
    formDataToSend.append('comment', formData.comment);
    formDataToSend.append('thumb', formData.thumb);
    formDataToSend.append('blClass', formData.blClass);

    if (image) {
      formDataToSend.append('image', image);
    }

    try {
      await axios.post('http://localhost:5001/api/blogs/new', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Blog criado com sucesso!');
      navigate('/admin/blogs');
    } catch (error) {
      console.error('Erro ao criar blog:', error);
      alert('Erro ao criar blog. Por favor, tente novamente.');
    }
  };

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="blog-form-container">
      <h1 className="form-title">Criar Novo Blog</h1>
      <form onSubmit={handleSubmit} className="blog-form">
        {/* Título */}
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={formData.title}
          onChange={handleChange}
          required
          className="form-input"
        />

        {/* Slug */}
        <input
          type="text"
          name="slug"
          placeholder="Slug"
          value={formData.slug}
          onChange={handleChange}
          required
          className="form-input"
        />

        {/* Imagem (Upload) */}
        <input
          type="file"
          name="image"
          onChange={handleImageChange}
          accept="image/*"
          className="form-input file-input"
        />

        {/* Descrição Curta */}
        <textarea
          name="description"
          placeholder="Descrição Curta"
          value={formData.description}
          onChange={handleChange}
          required
          className="form-textarea"
        />

        {/* Descrição Longa */}
        <textarea
          name="longDescription"
          placeholder="Descrição Longa"
          value={formData.longDescription}
          onChange={handleChange}
          required
          className="form-textarea"
        />

        {/* Autor */}
        <label>Autor</label>
        <select
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
          className="form-input"
        >
          <option value="">Selecione um Autor</option>
          {authors.map((a) => (
            <option key={a._id} value={a._id}>{a.name}</option>
          ))}
        </select>

        {/* Categoria */}
        <label>Categoria</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="form-input"
        >
          <option value="">Selecione uma Categoria</option>
          {categories.map((c) => (
            <option key={c._id} value={c._id}>{c.name}</option>
          ))}
        </select>

        {/* Data de Criação */}
        <input
          type="date"
          name="create_at"
          placeholder="Data de Criação"
          value={formData.create_at}
          onChange={handleChange}
          className="form-input"
        />

        {/* Comentários */}
        <input
          type="number"
          name="comment"
          placeholder="Número de Comentários"
          value={formData.comment}
          onChange={handleChange}
          className="form-input"
        />

        {/* Classe do Blog */}
        <label>Formato do Blog</label>
        <select
          name="blClass"
          value={formData.blClass}
          onChange={handleChange}
          className="form-input"
          required
        >
          <option value="">Selecione o Tipo de Blog</option>
          <option value="format-standard-image">Imagem Padrão</option>
          <option value="format-video">Vídeo</option>
          <option value="format-gallery">Galeria de Imagens</option>
          <option value="format-quote">Citação</option>
        </select>

        {/* Botão para Submeter o Formulário */}
        <button type="submit" className="form-button">Criar Blog</button>
      </form>
    </div>
  );
};

export default BlogForm;
