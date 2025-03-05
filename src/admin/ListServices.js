import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const response = await axios.get('http://localhost:5001/api/services');
            setServices(response.data);
        } catch (error) {
            console.error('Erro ao buscar serviços:', error);
        }
    };

    const deleteService = async (id) => {
        if (window.confirm('Tem certeza que deseja excluir este serviço?')) {
            try {
                await axios.delete(`http://localhost:5001/api/services/${id}`);
                setServices(services.filter(service => service._id !== id));
            } catch (error) {
                console.error('Erro ao excluir serviço:', error);
            }
        }
    };

    return (
        <div className="admin-container">
            <h2>Gerenciar Serviços</h2>
            <Link to="/admin/services/new" className="btn btn-primary">Criar Novo Serviço</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Imagem</th>
                        <th>Título</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map(service => (
                        <tr key={service._id}>
                            <td><img src={service.sImg} alt={service.title} width="50" /></td>
                            <td>{service.title}</td>
                            <td>
                                <Link to={`/admin/services/edit/${service._id}`} className="btn btn-warning">Editar</Link>
                                <button onClick={() => deleteService(service._id)} className="btn btn-danger">Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListServices;
