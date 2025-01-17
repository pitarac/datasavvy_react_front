import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import icon1 from '../../images/icons/icon_wifi.svg';
import icon2 from '../../images/icons/icon_dollar_2.svg';
import icon3 from '../../images/icons/icon_chart.svg';
import icon4 from '../../images/icons/icon_tag_2.svg';
import icon5 from '../../images/icons/icon_user_2.svg';
import icon6 from '../../images/icons/icon_users.svg';
import icon7 from '../../images/icons/icon_pen.svg';

import icon10 from '../../images/avatar/avatar_7.webp';
import icon11 from '../../images/icons/icon_quote.svg';
import logo from '../../images/site_logo/site_logo_3.svg';
import cases from '../../images/case/case_image_4.webp';
import MobileMenu from '../MobileMenu/MobileMenu';

const Header = (props) => {
    const [mobailActive, setMobailState] = useState(false);
    const [isSticky, setSticky] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [currentMonth, setCurrentMonth] = useState('');
    const [lastDayFormatted, setLastDayFormatted] = useState('');

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Função para obter o mês atual em português
        const getCurrentMonth = () => {
            const month = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(new Date());
            setCurrentMonth(month.charAt(0).toUpperCase() + month.slice(1)); // Capitaliza a primeira letra
        };

        // Função para obter o último dia do mês atual formatado
        const getLastDayFormatted = () => {
            const now = new Date();
            const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0); // 0 retorna o último dia do mês anterior, que é o atual
            const formattedDate = new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'long' }).format(lastDay);
            setLastDayFormatted(formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)); // Capitaliza a primeira letra
        };

        // Chama as funções ao montar o componente
        getCurrentMonth();
        getLastDayFormatted();

        // Clean up
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="site_header site_header_1">
            <div className="header_top text-center">
                <div className="container">
                    <p className="m-0">
                        Solicite um orçamento até <strong>{lastDayFormatted}</strong> e ganhe <strong>bônus de 20%</strong> de desconto ao finalizar a compra.{' '}
                        <Link onClick={ClickHandler} to="/pricing">
                            <u>Saiba mais</u> <i className="fa-solid fa-angle-right"></i>
                        </Link>
                    </p>
                </div>
            </div>
            <div className={`header_bottom stricky  ${isSticky ? 'stricked-menu stricky-fixed' : ''}`}>
                <div className="container">
                    <div className="row align-items-center">
                        {/* Logo Section */}
                        <div className="col-xl-3 col-lg-2 col-5">
                            <div className="site_logo">
                                <Link onClick={ClickHandler} className="site_link" to="/">
                                    <img src={logo} alt="Logo do Site - DataSavvy" />
                                </Link>
                                <div className="badge bg-danger-subtle text-danger">Estamos contratando!</div>
                            </div>
                        </div>

                        {/* Main Menu */}
                        <div className="col-xl-6 col-lg-7 col-2">
                            <nav className="main_menu navbar navbar-expand-lg">
                                <div className="main_menu_inner collapse navbar-collapse justify-content-lg-center" id="main_menu_dropdown">
                                    <ul className="main_menu_list unordered_list justify-content-center">
                                        {/* Início Dropdown */}
                                        <li className="dropdown">
                                            <Link
                                                onClick={ClickHandler}
                                                className="nav-link"
                                                to="/"
                                                id="home_submenu"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Início
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="home_submenu">
                                                <li><Link onClick={ClickHandler} to="/">Soluções em TI</Link></li>
                                                <li><Link onClick={ClickHandler} to="/home_software_company">Empresa de Software</Link></li>
                                                <li><Link onClick={ClickHandler} to="/home_business_consulting">Consultoria Empresarial</Link></li>
                                            </ul>
                                        </li>

                                        {/* Empresa Dropdown */}
                                        <li className="dropdown">
                                            <Link
                                                onClick={ClickHandler}
                                                className="nav-link"
                                                to="/"
                                                id="company_submenu"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Empresa
                                            </Link>
                                            <div className="dropdown-menu mega_menu_wrapper" aria-labelledby="company_submenu">
                                                <div className="container">
                                                    <div className="row">
                                                        {/* Links Internos */}
                                                        <div className="col-lg-9">
                                                            <div className="megamenu_pages_wrapper mb-5">
                                                                <div className="row">
                                                                    {/* Sobre Nós */}
                                                                    <div className="col-lg-3 col-md-6">
                                                                        <Link onClick={ClickHandler} className="iconbox_block_2" to="/about">
                                                                            <span className="icon_title_wrap">
                                                                                <small className="iconbox_icon">
                                                                                    <img src={icon1} alt="Ícone WiFi" />
                                                                                </small>
                                                                                <small className="iconbox_title">Sobre Nós</small>
                                                                            </span>
                                                                            <span className="description mb-0">
                                                                                Saiba mais sobre a DataSavvy
                                                                            </span>
                                                                        </Link>
                                                                    </div>
                                                                    {/* Nossos Preços */}
                                                                    <div className="col-lg-3 col-md-6">
                                                                        <Link onClick={ClickHandler} className="iconbox_block_2" to="/pricing">
                                                                            <span className="icon_title_wrap">
                                                                                <small className="iconbox_icon">
                                                                                    <img src={icon2} alt="Ícone Preço" />
                                                                                </small>
                                                                                <small className="iconbox_title">Nossos Preços</small>
                                                                            </span>
                                                                            <span className="description mb-0">
                                                                                Preços otimizados
                                                                            </span>
                                                                        </Link>
                                                                    </div>
                                                                    {/* Portfólio */}
                                                                    <div className="col-lg-3 col-md-6">
                                                                        <Link onClick={ClickHandler} className="iconbox_block_2" to="/portfolio">
                                                                            <span className="icon_title_wrap">
                                                                                <small className="iconbox_icon">
                                                                                    <img src={icon3} alt="Ícone Portfólio" />
                                                                                </small>
                                                                                <small className="iconbox_title">Portfólio</small>
                                                                            </span>
                                                                            <span className="description mb-0">
                                                                                Explore nossos projetos
                                                                            </span>
                                                                        </Link>
                                                                    </div>
                                                                    {/* Detalhes do Portfólio */}
                                                                    <div className="col-lg-3 col-md-6">
                                                                        <Link onClick={ClickHandler} className="iconbox_block_2" to="/portfolio_details/Explore-Our-IT-Solutions">
                                                                            <span className="icon_title_wrap">
                                                                                <small className="iconbox_icon">
                                                                                    <img src={icon4} alt="Ícone Tag de Evento" />
                                                                                </small>
                                                                                <small className="iconbox_title">Detalhes do Portfólio</small>
                                                                            </span>
                                                                            <span className="description mb-0">
                                                                                Explore os detalhes do nosso trabalho
                                                                            </span>
                                                                        </Link>
                                                                    </div>
                                                                    {/* Equipe */}
                                                                    <div className="col-lg-3 col-md-6">
                                                                        <Link onClick={ClickHandler} className="iconbox_block_2" to="/team">
                                                                            <span className="icon_title_wrap">
                                                                                <small className="iconbox_icon">
                                                                                    <img src={icon5} alt="Ícone Usuário" />
                                                                                </small>
                                                                                <small className="iconbox_title">Equipe</small>
                                                                            </span>
                                                                            <span className="description mb-0">
                                                                                Conheça nosso time
                                                                            </span>
                                                                        </Link>
                                                                    </div>
                                                                    {/* Detalhes da Equipe */}
                                                                    <div className="col-lg-3 col-md-6">
                                                                        <Link onClick={ClickHandler} className="iconbox_block_2" to="/team-single/Atticus-Sterling">
                                                                            <span className="icon_title_wrap">
                                                                                <small className="iconbox_icon">
                                                                                    <img src={icon6} alt="Ícone de Usuários" />
                                                                                </small>
                                                                                <small className="iconbox_title">Detalhes da Equipe</small>
                                                                            </span>
                                                                            <span className="description mb-0">
                                                                                Saiba mais sobre os membros do nosso time
                                                                            </span>
                                                                        </Link>
                                                                    </div>
                                                                    {/* Serviços */}
                                                                    <div className="col-lg-3 col-md-6">
                                                                        <Link onClick={ClickHandler} className="iconbox_block_2" to="/service">
                                                                            <span className="icon_title_wrap">
                                                                                <small className="iconbox_icon">
                                                                                    <img src={icon7} alt="Ícone Serviço" />
                                                                                </small>
                                                                                <small className="iconbox_title">Serviços</small>
                                                                            </span>
                                                                            <small className="description mb-0">
                                                                                Prontos para te ajudar!
                                                                            </small>
                                                                        </Link>
                                                                    </div>
                                                                    {/* Detalhes do Serviço */}
                                                                    <div className="col-lg-3 col-md-6">
                                                                        <Link onClick={ClickHandler} className="iconbox_block_2" to="/service-single/IT-Management-Services">
                                                                            <span className="icon_title_wrap">
                                                                                <small className="iconbox_icon">
                                                                                    <img src={icon7} alt="Ícone Serviço" />
                                                                                </small>
                                                                                <small className="iconbox_title">Detalhes do Serviço</small>
                                                                            </span>
                                                                            <small className="description mb-0">
                                                                                Veja os detalhes dos nossos serviços
                                                                            </small>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* Botões de Ação */}
                                                            <ul className="btns_group p-0 unordered_list justify-content-start">
                                                                <li>
                                                                    <Link onClick={ClickHandler} className="btn btn-primary" to="/contact">
                                                                        <span className="btn_label" data-text="Consultoria Gratuita">Consultoria Gratuita</span>
                                                                        <span className="btn_icon">
                                                                            <i className="fa-solid fa-arrow-up-right"></i>
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        {/* Seção do Autor */}
                                                        <div className="col-lg-3">
                                                            <div className="site_author bg-primary">
                                                                <div className="author_box">
                                                                    <div className="author_image bg-light">
                                                                        <img src={icon10} alt="Imagem do Autor" />
                                                                    </div>
                                                                    <div className="author_box_content">
                                                                        <h3 className="author_name text-white">Paulo Leocádia</h3>
                                                                        <span className="author_designation text-white">CEO na DataSavvy</span>
                                                                    </div>
                                                                    <div className="quote_icon">
                                                                        <img src={icon11} alt="Ícone de Citação" />
                                                                    </div>
                                                                </div>
                                                                <p className="mb-0 text-white">
                                                                    Como CEO da DataSavvy, tenho me dedicado a transformar os desafios dos nossos clientes em soluções práticas e inovadoras, sempre buscando otimizar cada minuto de trabalho e entregar resultados reais.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        {/* Portfólio Dropdown */}
                                        <li className="dropdown">
                                            <Link
                                                onClick={ClickHandler}
                                                className="nav-link"
                                                to="/"
                                                id="portfolio_submenu"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Portfólio
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="portfolio_submenu">
                                                <li><Link onClick={ClickHandler} to="/portfolio">Portfólio</Link></li>
                                                <li><Link onClick={ClickHandler} to="/portfolio_details/Explore-Our-IT-Solutions">Detalhes do Portfólio</Link></li>
                                            </ul>
                                        </li>

                                        {/* Serviços Dropdown */}
                                        <li className="dropdown">
                                            <Link
                                                onClick={ClickHandler}
                                                className="nav-link"
                                                to="/"
                                                id="services_submenu"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Serviços
                                            </Link>
                                            <div className="dropdown-menu mega_menu_wrapper p-0" aria-labelledby="services_submenu">
                                                <div className="container">
                                                    <div className="row justify-content-lg-between">
                                                        {/* Serviços e Setores */}
                                                        <div className="col-lg-8">
                                                            <div className="row">
                                                                {/* Serviços */}
                                                                <div className="col-lg-4">
                                                                    <div className="megamenu_widget">
                                                                        <h3 className="megamenu_info_title">Serviços</h3>
                                                                        <ul className="icon_list unordered_list_block">
                                                                            <li>
                                                                                <Link onClick={ClickHandler} to="/service-single/IT-Management-Services">
                                                                                    <span className="icon_list_text">
                                                                                        Serviços de Gestão de TI
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} to="/service-single/Data-Tracking-and-Security">
                                                                                    <span className="icon_list_text">
                                                                                        Segurança e Rastreamento de Dados
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} to="/service-single/IT-Management-Services">
                                                                                    <span className="icon_list_text">
                                                                                        Desenvolvimento de Websites
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} to="/service-single/IT-Management-Services">
                                                                                    <span className="icon_list_text">
                                                                                        Soluções e Design de CRM
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} to="/service-single/IT-Management-Services">
                                                                                    <span className="icon_list_text">
                                                                                        Serviços de Design UI/UX
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} to="/service-single/IT-Management-Services">
                                                                                    <span className="icon_list_text">
                                                                                        Solução Tecnológica
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} to="/service-single/IT-Management-Services">
                                                                                    <span className="icon_list_text">
                                                                                        Desenvolvimento de Software
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>

                                                                {/* Nossos Setores */}
                                                                <div className="col-lg-4">
                                                                    <div className="megamenu_widget">
                                                                        <h3 className="megamenu_info_title">Nossos Setores</h3>
                                                                        <ul className="icon_list unordered_list_block">
                                                                            <li>
                                                                                <Link onClick={ClickHandler} to="/service">
                                                                                    <span className="icon_list_text">
                                                                                        Saúde
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} to="/service">
                                                                                    <span className="icon_list_text">
                                                                                        Bancos
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} to="/service">
                                                                                    <span className="icon_list_text">
                                                                                        Logística
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} to="/service">
                                                                                    <span className="icon_list_text">
                                                                                        Supermercados
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} to="/service">
                                                                                    <span className="icon_list_text">
                                                                                        Indústrias
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} to="/service">
                                                                                    <span className="icon_list_text">
                                                                                        Hotéis
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} to="/service">
                                                                                    <span className="icon_list_text">
                                                                                        Fintech
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>

                                                                {/* Produtos */}
                                                                <div className="col-lg-4">
                                                                    <div className="megamenu_widget">
                                                                        <h3 className="megamenu_info_title">Produtos</h3>
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
                                                                                <Link onClick={ClickHandler} to="/">
                                                                                    <span className="icon_list_text">
                                                                                        Novos Lançamentos
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} to="/service">
                                                                                    <span className="icon_list_text">
                                                                                        Soluções
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {/* Área Social */}
                                                            <div className="social_area">
                                                                <ul className="social_icons_block unordered_list" data-text="Siga-nos:">
                                                                    <li>
                                                                        <Link onClick={ClickHandler} to="/">
                                                                            <i className="fa-brands fa-facebook-f"></i>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={ClickHandler} to="/">
                                                                            <i className="fa-brands fa-twitter"></i>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={ClickHandler} to="/">
                                                                            <i className="fa-brands fa-linkedin-in"></i>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={ClickHandler} to="/">
                                                                            <i className="fa-brands fa-dribbble"></i>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                                <p className="career_link m-0">
                                                                    Procurando uma nova carreira? <Link onClick={ClickHandler} to="/">Estamos contratando</Link>
                                                                </p>
                                                            </div>
                                                        </div>

                                                        {/* Seção do Caso */}
                                                        <div className="col-lg-3">
                                                            <div className="megamenu_case bg-primary">
                                                                <h3>Software de Computador</h3>
                                                                <h4>Astarte Medical</h4>
                                                                <img src={cases} alt="Caso" />
                                                                <Link onClick={ClickHandler} className="btn" to="/portfolio">
                                                                    <span className="btn_label" data-text="Leia o Caso">Leia o Caso</span>
                                                                    <span className="btn_icon">
                                                                        <i className="fa-solid fa-arrow-up-right"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        {/* Páginas Dropdown */}
                                        <li className="dropdown">
                                            <Link
                                                onClick={ClickHandler}
                                                className="nav-link"
                                                to="/"
                                                id="pages_submenu"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Páginas
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="pages_submenu">
                                                <li><Link onClick={ClickHandler} to="/about">Sobre Nós</Link></li>
                                                <li className="dropdown">
                                                    <Link
                                                        onClick={ClickHandler}
                                                        className="nav-link"
                                                        to="/"
                                                        id="blog_submenu"
                                                        role="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        Blogs
                                                    </Link>
                                                    <ul className="dropdown-menu" aria-labelledby="blog_submenu">
                                                        <li><Link onClick={ClickHandler} to="/blog">Nossos Blogs</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/blog-single/How-Our-Software-Solutions-Drive-Insights.">Detalhes do Blog</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link onClick={ClickHandler} to="/contact">Central de Ajuda</Link></li>
                                                <li>
                                                    <Link onClick={ClickHandler} to="/">
                                                        Carreiras <small className="badge bg-danger-subtle text-danger">Estamos contratando!</small>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        {/* Contato */}
                                        <li><Link onClick={ClickHandler} to="/contact">Contato</Link></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>

                        {/* Botões do Header */}
                        <div className="col-xl-3 col-lg-3 col-5">
                            <ul className="header_btns_group unordered_list justify-content-end">
                                <li>
                                    <button
                                        className="mobile_menu_btn"
                                        onClick={() => setMobailState(!mobailActive)}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#main_menu_dropdown"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation"
                                    >
                                        <i className="far fa-bars"></i>
                                    </button>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} className="btn btn-outline-light" to="/pricing">
                                        <span className="btn_label" data-text="Começar">Conheça</span>
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className="mobail-wrap">
                    <div className={`mobail-menu ${mobailActive ? "active" : ""}`}>
                        <div className="xb-header-menu-scroll">
                            <div
                                className="xb-menu-close xb-hide-xl xb-close"
                                onClick={() => setMobailState(!mobailActive)}
                            ></div>
                            <nav className="xb-header-nav">
                                <MobileMenu />
                            </nav>
                        </div>
                    </div>
                    <div className="xb-header-menu-backdrop" onClick={() => setMobailState(false)}></div>
                </div>
            </div>
        </header>
    );
};

export default Header;
