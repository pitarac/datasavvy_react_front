import React, { Fragment, useState } from 'react';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import aImg from '../../images/about/about_image_3.webp'
import aImg2 from '../../images/about/about_image_4.webp'
import ModalVideo from 'react-modal-video'
import PolicySection from './Policy';
import WhyUs from './WhyUs';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import CtaSection from '../../components/CtaSection/CtaSection';

const AboutUsPage = (props) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <Fragment>
            <Header />
            <main className="page_content about-page">
                <PageTitle pageTitle={'Sobre Nós'} pagesub={'Mais sobre a DataSavvy 😃'} pageTop={'Sobre'} />
                <section className="intro_about_section section_space bg-light">
                    <div className="intro_about_content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="image_wrap">
                                        <img src={aImg} alt="DataSavvy - Sobre " />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="image_wrap position-relative">
                                        <img src={aImg2} alt="DataSavvy - Sobre" />
                                        <button className="video_btn ripple_effect" onClick={() => setOpen(true)}>
                                            <span className="btn_icon">
                                                <i className="fa-solid fa-play"></i>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="heading_block mb-0">
                            <div className="row justify-content-lg-between">
                                <div className="col-lg-4">
                                    <div className="heading_focus_text">
                                        Sobre
                                        <span className="badge bg-secondary text-white">DataSavvy 🙂</span>
                                    </div>
                                    <h2 className="heading_text mb-0">
                                        Nós Oferecemos Serviços Flexíveis para Você
                                    </h2>
                                </div>
                                <div className="col-lg-6">
                                    <p className="heading_description mb-0">
                                        Na DataSavvy, temos orgulho em oferecer serviços dinâmicos de TI que atendem aos seus requisitos específicos. Nossa abordagem flexível significa que podemos ajustar nossas ofertas para acomodar suas necessidades em constante evolução, seja suporte completo de infraestrutura de TI, consultoria estratégica ou desenvolvimento de software.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <PolicySection />
                <FeaturesSection />
                <TeamSection />
                <WhyUs />
                <CtaSection />
            </main>
            <Footer />
            <Scrollbar />
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="7e90gBu4pas" onClose={() => setOpen(false)} />
        </Fragment>
    )
};

export default AboutUsPage;
