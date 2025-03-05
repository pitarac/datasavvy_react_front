import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditBlog = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5001/api/blogs/${id}`)
      .then(response => {
        setTitle(response.data.title);
        setSlug(response.data.slug);
        setDescription(response.data.description);
        setAuthor(response.data.author);
      })
      .catch(error => console.error('Erro ao buscar blog:', error));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('slug', slug);
    formData.append('description', description);
    formData.append('author', author);
    if (image) formData.append('image', image);

    try {
      await axios.put(`http://localhost:5001/api/blogs/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      navigate('/admin/blogs');
    } catch (error) {
      console.error('Erro ao editar blog:', error);
    }
  };

  return (
    <div>
      <h2>Editar Blog</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Slug" value={slug} onChange={(e) => setSlug(e.target.value)} required />
        <textarea placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <input type="text" placeholder="Autor" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
};

export default EditBlog;
