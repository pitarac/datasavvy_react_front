import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../admin/EditService.css';

const EditService = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [service, setService] = useState({
        title: '',
        slug: '',
        description: '',
        longDescription: '',
        additionalInfo: '',
        serviceOutcome: [],
        galleryImages: [],
        videoId: '',
        existingImage: '',
    });
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedGallery, setSelectedGallery] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5001/api/services/id/${id}`)
            .then(response => {
                setService(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar serviço:', error);
            });
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setService({ ...service, [name]: value });
    };

    const handleFileChange = (e) => {
        setSelectedImage(e.target.files[0]);
    };

    const handleGalleryChange = (e) => {
        setSelectedGallery([...e.target.files]);
    };

    const handleServiceOutcomeChange = (index, value) => {
        const updatedOutcomes = [...service.serviceOutcome];
        updatedOutcomes[index] = value;
        setService({ ...service, serviceOutcome: updatedOutcomes });
    };

    const addNewOutcome = () => {
        setService({ ...service, serviceOutcome: [...service.serviceOutcome, ''] });
    };

    const removeOutcome = (index) => {
        const updatedOutcomes = service.serviceOutcome.filter((_, i) => i !== index);
        setService({ ...service, serviceOutcome: updatedOutcomes });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        Object.keys(service).forEach(key => {
            if (key !== 'galleryImages' && key !== 'serviceOutcome') {
                formData.append(key, service[key]);
            }
        });

        if (selectedImage) {
            formData.append('sImg', selectedImage);
        }

        selectedGallery.forEach((file, index) => {
            formData.append(`galleryImages`, file);
        });

        formData.append('serviceOutcome', JSON.stringify(service.serviceOutcome));

        try {
            await axios.put(`http://localhost:5001/api/services/id/${id}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            navigate('/admin/services');
        } catch (error) {
            console.error('Erro ao atualizar serviço:', error);
        }
    };

    return (
        <div className="admin-container">
            <h2>Editar Serviço</h2>
            <form onSubmit={handleSubmit} className="service-form">
                <label>Título:</label>
                <input type="text" name="title" value={service.title} onChange={handleInputChange} required />

                <label>Slug:</label>
                <input type="text" name="slug" value={service.slug} onChange={handleInputChange} required />

                <label>Descrição Curta:</label>
                <textarea name="description" value={service.description} onChange={handleInputChange}></textarea>

                <label>Descrição Completa:</label>
                <textarea name="longDescription" value={service.longDescription} onChange={handleInputChange}></textarea>

                <label>Informações Adicionais:</label>
                <textarea name="additionalInfo" value={service.additionalInfo} onChange={handleInputChange}></textarea>

                <label>Lista de Benefícios:</label>
                {service.serviceOutcome.map((outcome, index) => (
                    <div key={index} className="outcome-item">
                        <input type="text" value={outcome} onChange={(e) => handleServiceOutcomeChange(index, e.target.value)} />
                        <button type="button" onClick={() => removeOutcome(index)}>Remover</button>
                    </div>
                ))}
                <button type="button" onClick={addNewOutcome}>Adicionar Benefício</button>

                <label>Imagem Atual:</label>
                {service.existingImage && <img src={`http://localhost:5001${service.existingImage}`} alt="Imagem Atual" width="150" />}

                <label>Alterar Imagem Principal:</label>
                <input type="file" onChange={handleFileChange} />

                <label>Galeria de Imagens Atual:</label>
                <div className="gallery-preview">
                    {service.galleryImages.map((img, index) => (
                        <img key={index} src={`http://localhost:5001${img}`} alt={`Galeria ${index}`} width="100" />
                    ))}
                </div>

                <label>Alterar Galeria de Imagens:</label>
                <input type="file" multiple onChange={handleGalleryChange} />

                <label>ID do Vídeo:</label>
                <input type="text" name="videoId" value={service.videoId} onChange={handleInputChange} />

                <button type="submit">Salvar Alterações</button>
            </form>
        </div>
    );
};

export default EditService;