// src/components/business-testimonial/BusinessTestimonial.js

import React from 'react';
import Slider from "react-slick";
import avatar1 from '../../../images/avatar/avatar_11.webp';
import avatar2 from '../../../images/avatar/avatar_10.webp';
import avatar3 from '../../../images/avatar/avatar_9.webp';
import avatar4 from '../../../images/avatar/avatar_8.webp';
import Bg from '../../../images/icons/icon_quote_2.svg';
import abImg1 from '../../../images/about/about_image_8.webp';
import abImg2 from '../../../images/icons/icon_wallet.svg';

import { Link } from "react-router-dom";

const testimonial = [
    {
        id: '01',
        Des: "Trabalhar com a Data Savvy foi um divisor de águas para o nosso negócio. Suas soluções personalizadas e suporte dedicado nos impulsionaram a novos patamares.",
        Title: 'Sarah Johnson',
        sub: 'Membro do Conselho, UNIQA',
        avatar: avatar1,
    },
    {
        id: '02',
        Des: "A parceria com a Data Savvy transformou nossa empresa. A dedicação da equipe e as soluções inovadoras nos ajudaram a alcançar nossos objetivos rapidamente.",
        Title: 'Adam Pedro',
        sub: 'Diretor Executivo, ABC Corp',
        avatar: avatar2,
    },
    {
        id: '03',
        Des: "Os serviços da Data Savvy superaram nossas expectativas. Sua abordagem estratégica e conhecimento especializado fizeram toda a diferença.",
        Title: 'Alkira Jemin',
        sub: 'Gerente de Projetos, XYZ Ltda',
        avatar: avatar3,
    },
    {
        id: '04',
        Des: "Recomendamos fortemente a Data Savvy. Sua equipe nos forneceu insights valiosos que impulsionaram nosso crescimento.",
        Title: 'Maria Oliveira',
        sub: 'CEO, Empresa Exemplo',
        avatar: avatar4,
    },
    {
        id: '05',
        Des: "A Data Savvy nos ajudou a otimizar nossos processos e melhorar a eficiência. Estamos extremamente satisfeitos com os resultados.",
        Title: 'Lucas Fernandes',
        sub: 'CFO, Global Tech',
        avatar: avatar2,
    },
];

const BusinessTestimonial = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const slider = React.useRef(null);

    return (
        <section className="review_and_about_section section_space bg-light">
            <div className="container">
                <div className="review_bg_box bg-success" style={{ backgroundImage: `url(${Bg})` }}>
                    <div className="heading_block text-center text-white">
                        <h2 className="heading_text mb-0">
                            Depoimentos de Nossos Clientes
                        </h2>
                    </div>
                    <div className="review_4col_carousel swiper">
                        <Slider ref={slider} {...settings}>
                            {testimonial.map((testimonial, tsm) => (
                                <div className="review_block_3" key={tsm}>
                                    <ul className="rating_block unordered_list">
                                        <li><i className="fa-solid fa-star fa-fw"></i></li>
                                        <li><i className="fa-solid fa-star fa-fw"></i></li>
                                        <li><i className="fa-solid fa-star fa-fw"></i></li>
                                        <li><i className="fa-solid fa-star fa-fw"></i></li>
                                        <li><i className="fa-solid fa-star fa-fw"></i></li>
                                    </ul>
                                    <p className="review_commtent">
                                        "{testimonial.Des}"
                                    </p>
                                    <div className="review_admin">
                                        <div className="review_admin_image">
                                            <img src={testimonial.avatar} alt={testimonial.Title} />
                                        </div>
                                        <div className="review_admin_info">
                                            <h4 className="review_admin_name">{testimonial.Title}</h4>
                                            <span className="review_admin_designation">{testimonial.sub}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="section_space pb-0">
                <div className="container">
                    <div className="row align-items-center justify-content-lg-around">
                        <div className="col-lg-6">
                            <div className="heading_block">
                                <h2 className="heading_text">
                                    Por que se Associar a Nós: Desbloqueando o Potencial do Seu Negócio
                                </h2>
                                <p className="heading_description text-dark pe-lg-5">
                                    Liberte Seu Potencial: Faça Parceria com Especialistas para o Sucesso. Experimente Soluções Personalizadas, Dedicação e Resultados Comprovados. Maximize Oportunidades de Crescimento Através de Colaboração Estratégica.
                                </p>
                                <p className="heading_description mb-0 text-dark pe-lg-5">
                                    Eleve Seu Negócio a Novos Patamares. Forje Parcerias Inabaláveis para um Sucesso Imbatível.
                                </p>
                            </div>
                            <Link onClick={ClickHandler} className="creative_btn" to="/contact">
                                <span className="btn_label bg-primary">Comece Agora</span>
                                <span className="btn_icon">
                                    <i className="bg-primary fa-solid fa-arrow-up-right"></i>
                                    <i className="bg-primary fa-solid fa-arrow-up-right"></i>
                                </span>
                            </Link>
                        </div>
                        <div className="col-lg-4">
                            <div className="about_image_3">
                                <img className="image_wrap" src={abImg1} alt="Consultoria de Negócios" />
                                <div className="funfact_block capsule_layout">
                                    <div className="funfact_icon">
                                        <img src={abImg2} alt="Data Savvy - Ícone de Valor" />
                                    </div>
                                    <div className="funfact_content">
                                        <h3 className="funfact_title mb-0">Valor da Empresa</h3>
                                        <div className="counter_value">
                                            <span>R$</span>
                                            <span className="odometer" data-count="500000">500000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BusinessTestimonial;
