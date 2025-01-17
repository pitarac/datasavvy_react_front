import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AdminHeader.css'; // Arquivo CSS para estilizar o header

const AdminHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Aqui você pode adicionar a lógica de logout do Firebase ou remover o token
    alert('Logout realizado com sucesso!');
    navigate('/admin/login');
  };

  return (
    <header className="admin-header">
      <div className="admin-header-container">
        <h1 className="admin-header-logo">Painel Administrativo</h1>
        <nav className="admin-header-nav">
          <Link to="/admin/dashboard" className="admin-header-link">Dashboard</Link>
          <Link to="/admin/blogs" className="admin-header-link">Blogs</Link>
          <Link to="/admin/projects" className="admin-header-link">Projects</Link>
          <Link to="/admin/services" className="admin-header-link">Services</Link>
          <Link to="/admin/teams" className="admin-header-link">Teams</Link>
        </nav>
        <button onClick={handleLogout} className="admin-header-logout">Logout</button>
      </div>
    </header>
  );
};

export default AdminHeader;
