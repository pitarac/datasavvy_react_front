import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { fetchServices } from '../../api/service';

const ServiceSection = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadServices = async () => {
            try {
                const data = await fetchServices();
                setServices(data);
            } catch (error) {
                console.error('Erro ao buscar serviços:', error);
            } finally {
                setLoading(false);
            }
        };
        loadServices();
    }, []);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    if (loading) {
        return <div className="loading">Carregando serviços...</div>;
    }

    return (
        <section className="service_section section_space xb-hidden pb-0">
            <div className="container">
                <div className="heading_block text-center">
                    <div className="heading_focus_text">
                        Nossos
                        <span className="badge bg-secondary text-white">Especialidades</span>
                    </div>
                    <h2 className="heading_text mb-0">Serviços Destacados</h2>
                </div>

                <div className="row">
                    {services.length > 0 ? (
                        services.slice(0, 5).map((service, index) => (
                            <div className={`${service.col} mt-30`} key={index}>
                                {service.title && (
                                    <div className="service_block">
                                        <div className="service_image">
                                            <img src={`http://localhost:5001${service.sImg}`} alt={service.title} />
                                        </div>
                                        <div className="service_content">
                                            <h3 className="service_title">
                                                <Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>
                                                    {service.title}
                                                </Link>
                                            </h3>
                                            <div className="links_wrapper">
                                                <ul className="category_btns_group unordered_list">
                                                    <li><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.thumb1}</Link></li>
                                                    <li><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.thumb2}</Link></li>
                                                </ul>
                                                <Link onClick={ClickHandler} to={`/service-single/${service.slug}`} className="icon_block">
                                                    <i className="fa-regular fa-arrow-up-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <p className="text-center">Nenhum serviço disponível.</p>
                    )}
                </div>

                <div className="btns_group pb-0">
                    <Link onClick={ClickHandler} className="btn btn-outline-light" to="/service">
                        <span className="btn_label" data-text="Mais Serviços">Mais Serviços</span>
                        <span className="btn_icon">
                            <i className="fa-solid fa-arrow-up-right"></i>
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
