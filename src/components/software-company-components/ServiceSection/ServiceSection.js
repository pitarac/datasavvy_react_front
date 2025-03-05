import React, { useEffect, useState } from 'react';
import { fetchServices } from '../../../api/service';
import { Link } from "react-router-dom";
import Bg from '../../../images/shapes/shape_title_under_line.svg';

const ServiceSection = () => {
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
        <section className="service_section pt-175 pb-80 bg-light section_decoration xb-hidden">
            <div className="container">
                <div className="heading_block text-center">
                    <div className="heading_focus_text has_underline d-inline-flex" style={{ backgroundImage: `url(${Bg})` }}>
                        Nossos Serviços
                    </div>
                    <h2 className="heading_text mb-0">
                        Como Podemos <mark>Ajudar</mark> Você
                    </h2>
                </div>

                <div className="row">
                    {services.slice(5, 11).map((service, srv) => (
                        <div className="col-lg-4" key={srv}>
                            <div className="service_block_2">
                                <div className="service_icon">
                                    <img src={service.sImg} alt={`${service.title} - Ícone de Serviço`} />
                                </div>
                                <h3 className="service_title">
                                    <Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>
                                        {service.title}
                                    </Link>
                                </h3>
                                <ul className="icon_list unordered_list_block">
                                    {(service.features || []).map((feature, featureitem) => (
                                        <li key={featureitem}>
                                            <span className="icon_list_icon">
                                                <i className="fa-regular fa-circle-dot"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;
