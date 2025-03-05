import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ServiceForm = () => {
    const [service, setService] = useState({
        sImg: '',
        title: '',
        slug: '',
        description: '',
        longDescription: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setService({ ...service, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5001/api/services', service);
            alert('Serviço criado com sucesso!');
            navigate('/admin/services');
        } catch (error) {
            console.error('Erro ao criar serviço:', error);
        }
    };

    return (
        <div className="admin-container">
            <h2>Adicionar Serviço</h2>
            <form onSubmit={handleSubmit}>
                <label>Imagem URL</label>
                <input type="text" name="sImg" value={service.sImg} onChange={handleChange} required />

                <label>Título</label>
                <input type="text" name="title" value={service.title} onChange={handleChange} required />

                <label>Slug</label>
                <input type="text" name="slug" value={service.slug} onChange={handleChange} required />

                <label>Descrição</label>
                <textarea name="description" value={service.description} onChange={handleChange} required />

                <label>Descrição Longa</label>
                <textarea name="longDescription" value={service.longDescription} onChange={handleChange} required />

                <button type="submit" className="btn btn-success">Salvar</button>
            </form>
        </div>
    );
};

export default ServiceForm;
