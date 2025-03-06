import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ListBlogs.css'; // Importa o CSS

const ListBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/api/blogs')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => console.error('Erro ao buscar blogs:', error));
  }, []);

  const deleteBlog = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este blog?')) {
      try {
        await axios.delete(`http://localhost:5001/api/blogs/${id}`);
        setBlogs(blogs.filter(blog => blog._id !== id));
      } catch (error) {
        console.error('Erro ao excluir blog:', error);
      }
    }
  };

  return (
    <div className="blog-container">
      <h2 className="blog-title">Lista de Blogs</h2>
      <Link to="/admin/blogs/new" className="create-button">+ Criar Novo Blog</Link>
      <ul className="blog-list">
        {blogs.map(blog => (
          <li key={blog._id} className="blog-item">
            <div className="blog-info">
              <h3>{blog.title}</h3>
              <p><strong>Autor:</strong> {blog.author?.name || 'Desconhecido'}</p>
              <p><strong>Categoria:</strong> {blog.category?.name || 'Sem categoria'}</p>
            </div>
            <div className="blog-actions">
              <Link to={`/admin/blogs/edit/${blog._id}`} className="edit-button">✏️ Editar</Link>
              <button className="delete-button" onClick={() => deleteBlog(blog._id)}>❌ Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListBlogs;
