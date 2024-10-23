import React from 'react';
import Services from '../../../api/service'
import { Link } from "react-router-dom";
import Bg from '../../../images/shapes/shape_title_under_line.svg'
import shape1 from '../../../images/shapes/shape_line_5.svg'
import shape2 from '../../../images/shapes/shape_line_6.svg'
import shape3 from '../../../images/shapes/shape_space_1.svg'
import shape4 from '../../../images/shapes/shape_angle_1.webp'
import shape5 from '../../../images/shapes/shape_angle_2.webp'

const ServiceSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

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
                    {Array.isArray(Services) && Services.slice(5, 11).map((service, srv) => (
                        <div className="col-lg-4" key={srv}>
                            <div className="service_block_2">
                                <div className="service_icon">
                                    {service.sImg ? (
                                        <img src={service.sImg} alt={`${service.title} - Ícone de Serviço`} />
                                    ) : (
                                        <img src={shape1} alt="Placeholder - Ícone de Serviço" />
                                    )}
                                </div>
                                <h3 className="service_title">
                                    <Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>
                                        {service.title || "Título do Serviço"}
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

            <div className="decoration_item shape_image_1">
                <img src={shape1} alt="Forma Decorativa"/>
            </div>
            <div className="decoration_item shape_image_2">
                <img src={shape2} alt="Forma Decorativa"/>
            </div>
            <div className="decoration_item shape_image_3">
                <img src={shape3} alt="Forma Decorativa"/>
            </div>
            <div className="decoration_item shape_image_4">
                <img src={shape4} alt="Forma Decorativa Ângulo"/>
            </div>
            <div className="decoration_item shape_image_5">
                <img src={shape5} alt="Forma Decorativa Ângulo"/>
            </div>
        </section>
    );
}

export default ServiceSection;
