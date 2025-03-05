import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ListBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/api/blogs')
      .then(response => setBlogs(response.data))
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
    <div>
      <h2>Lista de Blogs</h2>
      <Link to="/admin/blogs/new">+ Criar Novo Blog</Link>
      <ul>
        {blogs.map(blog => (
          <li key={blog._id}>
            {blog.title} - {blog.author}  
            <Link to={`/admin/blogs/edit/${blog._id}`}>✏️ Editar</Link>
            <button onClick={() => deleteBlog(blog._id)}>❌ Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListBlogs;
