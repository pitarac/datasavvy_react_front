import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './EditBlog.css'; // Importa o CSS

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Estados do blog
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [existingImage, setExistingImage] = useState('');

  // Listas de autores e categorias
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 📌 Buscar os detalhes do blog
  useEffect(() => {
    axios.get(`http://localhost:5001/api/blogs/${id}`)
      .then(response => {
        const blog = response.data;
        setTitle(blog.title);
        setSlug(blog.slug);
        setDescription(blog.description);
        setLongDescription(blog.longDescription || '');
        setAuthor(blog.author ? blog.author._id : '');
        setCategory(blog.category ? blog.category._id : '');
        setExistingImage(blog.screens || '');
      })
      .catch(error => {
        console.error('Erro ao buscar blog:', error);
        setError('Erro ao carregar o blog.');
      });
  }, [id]);

  // 📌 Buscar categorias e autores disponíveis
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
      console.error('Erro ao buscar categorias/autores:', error);
      setError('Erro ao carregar dados.');
      setLoading(false);
    });
  }, []);

  // 📌 Enviar formulário de edição
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('title', title);
    formData.append('slug', slug);
    formData.append('description', description);
    formData.append('longDescription', longDescription);
    formData.append('author', author);
    formData.append('category', category);
    
    if (image) {
      formData.append('image', image);
    } else {
      formData.append('existingImage', existingImage);
    }

    try {
      await axios.put(`http://localhost:5001/api/blogs/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      navigate('/admin/blogs');
    } catch (error) {
      console.error('Erro ao editar blog:', error);
      setError('Erro ao salvar as alterações.');
    }
  };

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="edit-blog-container">
      <h2 className="edit-title">Editar Blog</h2>
      <form className="edit-form" onSubmit={handleSubmit}>
        <label>Título</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

        <label>Slug</label>
        <input type="text" value={slug} onChange={(e) => setSlug(e.target.value)} required />

        <label>Descrição</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

        <label>Descrição Longa</label>
        <textarea value={longDescription} onChange={(e) => setLongDescription(e.target.value)} required />

        <label>Autor</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)} required>
          <option value="">Selecione um Autor</option>
          {authors.map((a) => (
            <option key={a._id} value={a._id}>{a.name}</option>
          ))}
        </select>

        <label>Categoria</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="">Selecione uma Categoria</option>
          {categories.map((c) => (
            <option key={c._id} value={c._id}>{c.name}</option>
          ))}
        </select>

        <label>Imagem</label>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />

        {existingImage && <img src={`http://localhost:5001${existingImage}`} alt="Imagem Atual" width="100" />}

        <button type="submit" className="save-button">Salvar Alterações</button>
      </form>
    </div>
  );
};

export default EditBlog;
