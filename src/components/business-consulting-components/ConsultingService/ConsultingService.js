import React, { useEffect, useState } from 'react';
import { fetchServices } from '../../../api/service';
import { Link } from "react-router-dom";
import Bg from '../../../images/backgrounds/bg_image_3.webp';

const ConsultingService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const getServices = async () => {
            const data = await fetchServices();
            setServices(data);
        };
        getServices();
    }, []);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <section className="business_consulting_service_section section_space" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="heading_block text-center">
                            <h2 className="heading_text">
                                Soluções Transformadoras Personalizadas para Você
                            </h2>
                            <p className="heading_description mb-0 text-dark">
                                Impulsionando o Crescimento e a Inovação Através de Estratégias Personalizadas
                            </p>
                        </div>
                    </div>
                </div>

                <div className="business_consulting_services row">
                    {services.map((service, srv) => (
                        <div className="col-lg-4 col-md-6" key={srv}>
                            <div className="iconbox_block">
                                <div className="iconbox_icon">
                                    <img src={service.sImg} alt={`Data Savvy - ${service.title}`} />
                                </div>
                                <div className="iconbox_content">
                                    <h3 className="iconbox_title">
                                        <Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>
                                            {service.title}
                                        </Link>
                                    </h3>
                                    <p className="mb-0">
                                        {service.description ? service.description : 'Nossos serviços de consultoria são personalizados para atender às necessidades e objetivos únicos de cada cliente.'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="btns_group pb-0">
                    <Link onClick={ClickHandler} className="creative_btn" to="/contact">
                        <span className="btn_label bg-primary">Comece Agora</span>
                        <span className="btn_icon">
                            <i className="bg-primary fa-solid fa-arrow-up-right"></i>
                            <i className="bg-primary fa-solid fa-arrow-up-right"></i>
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default ConsultingService;
