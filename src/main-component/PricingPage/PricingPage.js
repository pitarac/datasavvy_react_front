// src/main-component/PricingPage/PricingPage.js
import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import ModalVideo from 'react-modal-video';
import CtaSection from '../../components/CtaSection/CtaSection';
import PolicySection from './Policy';
import offerBanner from '../../images/icons/best_offer.svg.svg';
import PartnerSection from '../../components/PartnerSection';
import PricingBlock from './PricingBlock'; // Certifique-se de que o caminho está correto

const PricingPage = (props) => {

    const [isOpen, setOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    const proFeatures = [
        { text: 'Desenvolvimento de Software.' },
        { text: 'Design de Produto Digital' },
        { text: 'Consultoria de TI.' },
        { text: 'Desenvolvimento de Sites.' },
        { text: 'Serviços de Cibersegurança.', isDeleted: true },
        { text: 'Serviços de Nuvem.', isDeleted: true },
    ];

    const teamFeatures = [
        { text: 'Desenvolvimento de Software.' },
        { text: 'Design de Produto Digital' },
        { text: 'Consultoria de TI.' },
        { text: 'Desenvolvimento de Sites.' },
        { text: 'Serviços de Cibersegurança.' },
        { text: 'Serviços de Nuvem.' },
    ];

    return (
        <Fragment>
            <Header />
            <main className="page_content about-page">
                {/* Título da Página */}
                <PageTitle pageTitle={'Plano de Preços'} pagesub={'Preços 😍'} pageTop={'Nosso'} />

                {/* Seção de Política */}
                <PolicySection />

                {/* Seção de Preços */}
                <section className="pricing_section section_space pb-0 bg-light">
                    <div className="container">
                        {/* Bloco de Cabeçalho */}
                        <div className="heading_block text-center">
                            <div className="heading_focus_text mb-2">
                                Nosso
                                <span className="badge bg-secondary text-white">Preços 😍</span>
                            </div>
                            <h2 className="heading_text mb-0">
                                Melhor Plano para Negócios
                            </h2>
                        </div>

                        {/* Botão de Alternância de Preço */}
                        <div className="pricing_toggle_btn text-center">
                            <button type="button" onClick={handleToggle} className={isActive ? 'active' : ''}>
                                <span>Faturado Mensalmente <small>-10%</small></span>
                                <span>Faturado Anualmente <small>-30%</small></span>
                            </button>
                        </div>

                        {/* Blocos de Preços */}
                        <div className="row justify-content-center">
                            {/* Pacote Pro */}
                            <div className="col-lg-6">
                                <PricingBlock
                                    isActive={isActive}
                                    priceMonthly={{ original: 'R$54', discounted: 'R$48' }}
                                    priceAnnually={{ original: 'R$648', discounted: 'R$453' }}
                                    saveMonthly="R$5,4"
                                    saveAnnually="R$194,4"
                                    title="Pacote Pro"
                                    description="Facilite seu trabalho com uma integração adequada."
                                    features={proFeatures}
                                />
                            </div>

                            {/* Pacote Team */}
                            <div className="col-lg-6">
                                <PricingBlock
                                    isActive={isActive}
                                    priceMonthly={{ original: 'R$60', discounted: 'R$54' }}
                                    priceAnnually={{ original: 'R$720', discounted: 'R$504' }}
                                    saveMonthly="R$6"
                                    saveAnnually="R$216"
                                    title="Pacote Team"
                                    description="Facilite seu trabalho com uma integração adequada."
                                    features={teamFeatures}
                                    isBestOffer={true}
                                    offerBanner={offerBanner}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Seção de Logos de Clientes */}
                <div className="client_logo_section section_space bg-light">
                    <div className="container">
                        <div className="heading_block text-center">
                            <div className="heading_focus_text mb-0">
                                <span className="badge bg-secondary text-white">Marcas com</span>
                                As Quais Trabalhamos 🎉
                            </div>
                        </div>
                        <PartnerSection />
                    </div>
                </div>
            </main>

            {/* Seção de Chamada para Ação */}
            <CtaSection />

            {/* Rodapé */}
            <Footer />

            {/* Barra de Rolagem */}
            <Scrollbar />

            {/* Modal de Vídeo */}
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="7e90gBu4pas" onClose={() => setOpen(false)} />
        </Fragment>
    );
};

export default PricingPage;
