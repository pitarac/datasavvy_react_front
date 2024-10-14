// src/components/footer/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import Bg from '../../images/shapes/bg_pattern_3.svg';
import icon1 from '../../images/icons/icon_mail.svg';
import icon2 from '../../images/icons/icon_calling.svg';
import icon3 from '../../images/icons/icon_map_mark.svg';
import icon4 from '../../images/icons/icon_mail_2.svg';
import Services from '../../api/service';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const SubmitHandler = (e) => {
    e.preventDefault();
}

const Footer = (props) => {
    return (
        <footer className="site_footer footer_layout_1">
            <div className="content_box" style={{ backgroundImage: `url(${Bg})` }}>
                <div className="container">
                    <div className="diract_contact_links text-white">
                        <div className="iconbox_block layout_icon_left">
                            <div className="iconbox_icon">
                                <img src={icon1} alt="Mail SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">E-mail</h3>
                                <p className="mb-0">
                                    contato@datasavvy.com.br
                                </p>
                            </div>
                        </div>
                        <div className="iconbox_block layout_icon_left">
                            <div className="iconbox_icon">
                                <img src={icon2} alt="Calling SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Telefone</h3>
                                <p className="mb-0">
                                    +55 61 98138-8239
                                </p>
                            </div>
                        </div>
                        <div className="iconbox_block layout_icon_left">
                            <div className="iconbox_icon">
                                <img src={icon3} alt="Map Mark SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Brasília</h3>
                                <p className="mb-0">
                                Ed. Assis Chateaubriand, <br></br>SRTVS QD 701 CJ L BL I SL 132,<br></br>Asa Sul.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="footer_main_content">
                        <div className="row justify-content-lg-between">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footer_widget pe-md-3">
                                    <h2 className="footer_info_title">Newsletter</h2>
                                    <p>
                                        Inscreva-se em nossa newsletter para receber as últimas atualizações.
                                    </p>
                                    <form className="footer_newslatter" onSubmit={SubmitHandler}>
                                        <label htmlFor="footer_mail_input">
                                            <img src={icon4} alt="Mail SVG Icon" />
                                        </label>
                                        <input id="footer_mail_input" type="email" name="email" placeholder="Digite seu e-mail" />
                                        <button type="submit"><i className="fa-solid fa-paper-plane"></i></button>
                                    </form>
                                    <ul className="social_links_block unordered_list">
                                        <li><a href="https://www.instagram.com/datasavvy.com.br/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                                        <li><a href="https://www.linkedin.com/company/datasavvybr/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footer_widget">
                                    <h3 className="footer_info_title">Serviços</h3>
                                    <ul className="icon_list unordered_list_block">
                                        {Services.slice(0, 6).map((service, srv) => (
                                            <li key={srv}>
                                                {service.title ?
                                                    <Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>
                                                        <span className="icon_list_text">
                                                            {service.title}
                                                        </span>
                                                    </Link>
                                                    : ''}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="footer_widget">
                                    <h3 className="footer_info_title">Informações</h3>
                                    <ul className="icon_list unordered_list_block">
                                        <li>
                                            <Link onClick={ClickHandler} to="/about">
                                                <span className="icon_list_text">
                                                    Sobre Nós
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} to="/service">
                                                <span className="icon_list_text">
                                                    Serviços
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} to="/contact">
                                                <span className="icon_list_text">
                                                    Contato
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} to="/portfolio">
                                                <span className="icon_list_text">
                                                    Portfólio
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} to="/blog">
                                                <span className="icon_list_text">
                                                    Blog
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} to="/pricing">
                                                <span className="icon_list_text">
                                                    Planos
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="footer_widget">
                                    <h3 className="footer_info_title">Produtos</h3>
                                    <ul className="icon_list unordered_list_block">
                                        <li>
                                            <Link onClick={ClickHandler} to="/portfolio">
                                                <span className="icon_list_text">
                                                    Estudos de Caso
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} to="/pricing">
                                                <span className="icon_list_text">
                                                    Nossos Preços
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} to="/service">
                                                <span className="icon_list_text">
                                                    Recursos
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} to="/about">
                                                <span className="icon_list_text">
                                                    Visão Geral
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} to="/blog">
                                                <span className="icon_list_text">
                                                    Novidades
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} to="/pricing">
                                                <span className="icon_list_text">
                                                    Soluções
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> {/* Fechamento do .row */}
                    </div> {/* Fechamento do .footer_main_content */}
                </div> {/* Fechamento do .container dentro do .content_box */}
            </div> {/* Fechamento do .content_box */}
            <div className="footer_bottom">
                <div className="container d-md-flex align-items-md-center justify-content-md-between">
                    <p className="copyright_text m-0">
                        Copyright © {new Date().getFullYear()} Data Savvy Consultoria e Tecnologia. CNPJ: 50.287.723/0001-91 Todos os direitos reservados.
                    </p>
                    <p className="copyright_text m-0">
                        Desenvolvido por <Link onClick={ClickHandler} to="/">Data Savvy</Link>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
