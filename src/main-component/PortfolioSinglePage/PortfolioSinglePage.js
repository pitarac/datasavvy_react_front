import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import Project from '../../api/project';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import psImg from '../../images/portfolio/portfolio_details_image_1.webp';
import icon from '../../images/icons/icon_check_3.svg';

const PortfolioSinglePage = (props) => {
    const { slug } = useParams();
    const PortfolioDetails = Project.find(item => item.slug === slug);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <Fragment>
            <Header />
            <main className="page_content about-page">
                <PageTitle pageTitle={PortfolioDetails.title} pagesub={'Detalhes 😃'} pageTop={'Portfólio'} />
                <section className="portfolio_details_section section_space bg-light">
                    <div className="container">
                        <div className="details_item_image">
                            <img src={psImg} alt="Item do Portfólio" />
                        </div>
                        <h2 className="details_item_title">Projeto de Migração e Integração para a Nuvem</h2>
                        <p>
                            O "Projeto de Migração e Integração para a Nuvem" representa um passo crucial na jornada de transformação digital do nosso cliente. Ao migrar da infraestrutura tradicional para soluções baseadas em nuvem, estamos desbloqueando um mundo de possibilidades, desde escalabilidade e flexibilidade até segurança aprimorada e eficiência de custos. Nosso planejamento meticuloso e execução garantem um processo de migração suave, com mínima interrupção nas operações de negócios. Desde a avaliação do ambiente atual até a preparação da infraestrutura, migração de dados e aplicações.
                        </p>
                        <p className="mb-0">
                            Com treinamento e suporte abrangentes, garantimos o sucesso deste projeto. Com nossa expertise e dedicação, capacitamos nossos clientes a aproveitar todo o potencial da computação em nuvem, impulsionando a inovação.
                        </p>
                        <hr />
                        <ul className="portfolio_details_info_list icon_list unordered_list justify-content-lg-between mb-5">
                            <li>
                                <span className="icon_list_text">
                                    <strong className="text-dark text-uppercase">Serviços:</strong>
                                    Migração para a Nuvem
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_text">
                                    <strong className="text-dark text-uppercase">Cliente:</strong>
                                    Techco
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_text">
                                    <strong className="text-dark text-uppercase">Localização:</strong>
                                    Nova York, NY, EUA
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_text">
                                    <strong className="text-dark text-uppercase">Data de Conclusão:</strong>
                                    20-12-2024
                                </span>
                            </li>
                        </ul>

                        <h3 className="details_item_info_title pt-4">Requisitos do Projeto</h3>
                        <p>
                            Nesta fase do projeto de Migração e Integração para a Nuvem, nosso foco está em executar estratégias robustas de migração de dados para garantir a transferência perfeita dos dados dos servidores locais para as soluções de armazenamento em nuvem. Utilizando técnicas e ferramentas avançadas,
                        </p>
                        <div className="row mb-4">
                            <div className="col-lg-5">
                                <ul className="icon_list unordered_list_block">
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Ícone de Verificação SVG" />
                                        </span>
                                        <span className="icon_list_text">
                                            Fase de Avaliação Abrangente
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Ícone de Verificação SVG" />
                                        </span>
                                        <span className="icon_list_text">
                                            Desenvolvimento de Plano Estratégico de Migração
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Ícone de Verificação SVG" />
                                        </span>
                                        <span className="icon_list_text">
                                            Estratégias Robustas de Migração de Dados
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Ícone de Verificação SVG" />
                                        </span>
                                        <span className="icon_list_text">
                                            Preparação da Infraestrutura
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-5">
                                <ul className="icon_list unordered_list_block">
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Ícone de Verificação SVG" />
                                        </span>
                                        <span className="icon_list_text">
                                            Migração de Aplicações
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Ícone de Verificação SVG" />
                                        </span>
                                        <span className="icon_list_text">
                                            Treinamento e Documentação
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Ícone de Verificação SVG" />
                                        </span>
                                        <span className="icon_list_text">
                                            Preparação da Infraestrutura
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Ícone de Verificação SVG" />
                                        </span>
                                        <span className="icon_list_text">
                                            Suporte Pós-migração
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="details_item_info_title pt-4">Solução & Resultado</h3>
                        <p>
                            A execução bem-sucedida das estratégias robustas de migração de dados garante a transferência perfeita dos dados dos servidores locais para as soluções de armazenamento em nuvem. A integridade dos dados, a segurança e a conformidade regulatória são priorizadas durante todo o processo de migração. Testes e validações rigorosos verificam a precisão e a completude da migração de dados, minimizando o tempo de inatividade e os riscos de perda de dados.
                        </p>
                        <p>
                            Para alcançar uma migração de dados bem-sucedida, nossa solução inclui uma abordagem abrangente que envolve planejamento meticuloso, técnicas avançadas e testes minuciosos. Utilizamos ferramentas e conhecimentos líderes do setor.
                        </p>

                        <h3 className="details_item_info_title pt-5 mb-4">Projetos Similares</h3>
                        <div className="row">
                            {Project.slice(10, 12).map((project, prj) => (
                                <div className="col-lg-6" key={prj}>
                                    <div className="portfolio_block portfolio_layout_2">
                                        <div className="portfolio_image">
                                            <Link onClick={ClickHandler} className="portfolio_image_wrap bg-light" to={`/portfolio_details/${project.slug}`}>
                                                <img src={project.pImg} alt="Design de Aplicativo Mobile" />
                                            </Link>
                                        </div>
                                        <div className="portfolio_content">
                                            <h3 className="portfolio_title">
                                                <Link onClick={ClickHandler} to={`/portfolio_details/${project.slug}`}>
                                                    {project.title}
                                                </Link>
                                            </h3>
                                            <ul className="category_list unordered_list">
                                                <li><Link onClick={ClickHandler} to={`/portfolio_details/${project.slug}`}><i className="fa-solid fa-tags"></i> {project.thumb1}</Link></li>
                                                <li><Link onClick={ClickHandler} to={`/portfolio_details/${project.slug}`}><i className="fa-solid fa-building"></i> {project.thumb2}</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <CtaSection />
            </main>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default PortfolioSinglePage;
