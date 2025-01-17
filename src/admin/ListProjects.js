import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Buscar todos os projetos do backend
    axios.get('http://localhost:5001/api/projects')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar projetos:', error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Projetos</h1>
      <Link to="/admin/projects/new">Criar Novo Projeto</Link>
      <ul>
        {projects.length > 0 ? (
          projects.map(project => (
            <li key={project._id}>
              {project.title} - <Link to={`/admin/projects/edit/${project._id}`}>Editar</Link>
            </li>
          ))
        ) : (
          <p>Nenhum projeto disponível</p>
        )}
      </ul>
    </div>
  );
};

export default ListProjects;
