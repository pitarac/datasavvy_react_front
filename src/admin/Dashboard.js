import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import axios from 'axios';
import AdminHeader from './AdminHeader';


const Dashboard = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    if (user) {
      // Buscar os blogs do backend
      axios.get('http://localhost:5001/api/blogs')
        .then(response => {
          setBlogs(response.data);
        })
        .catch(err => {
          console.error('Erro ao buscar blogs:', err);
        });
    }
  }, [user]);

  // Lidar com logout
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate('/admin/login');
      })
      .catch((error) => {
        console.error('Erro ao fazer logout:', error);
      });
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro ao carregar usuário: {error.message}</div>;
  }

  if (!user) {
    navigate('/admin/login');
    return null;
  }

  return (
    <div>

<AdminHeader />

      <h1>Painel Administrativo</h1>
      <button onClick={handleLogout}>Logout</button>

      <div>
        <h2>Bem-vindo, {user.email}</h2>

        {/* Links para criar novos elementos */}
        <div style={{ marginTop: '20px' }}>
          <h3>Gerenciar Conteúdo</h3>
          <ul>
            <li>
              <Link to="/admin/blogs/new">Criar Novo Blog</Link>
            </li>
            <li>
              <Link to="/admin/services/new">Criar Novo Serviço</Link>
            </li>
            <li>
              <Link to="/admin/projects/new">Criar Novo Projeto</Link>
            </li>
            <li>
              <Link to="/admin/teams/new">Criar Nova Equipe</Link>
            </li>
          </ul>
        </div>

        {/* Exemplo de lista de blogs */}
        <div style={{ marginTop: '20px' }}>
          <h3>Lista de Blogs</h3>
          <ul>
            {blogs.length > 0 ? (
              blogs.map(blog => (
                <li key={blog._id}>
                  {blog.title} - {blog.author}
                </li>
              ))
            ) : (
              <p>Nenhum blog disponível</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
