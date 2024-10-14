// src/pages/ServiceSinglePage/ServiceSinglePage.js

import React, { Fragment, useState } from 'react';
import Services from '../../api/service';
import { useParams } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import ProcessTechnology from '../../components/software-company-components/ProcessTechnology/ProcessTechnology';

import icon from '../../images/icons/icon_check_3.svg';

const ServiceSinglePage = (props) => {

    const { slug } = useParams();

    const ServiceDetails = Services.find(item => item.slug === slug);

    const [isOpen, setOpen] = useState(false);

    return (
        <Fragment>
            <Header />
            <main className="page_content service-single-page">
                <PageTitle pageTitle={ServiceDetails.title} pagesub={'Detalhes'} pageTop={'Serviços'} />
                <section className="service_details_section section_space bg-light">
                    <div className="container">
                        <div className="details_item_image position-relative">
                            <img src={ServiceDetails.sImg} alt={ServiceDetails.title} />
                            {ServiceDetails.videoId && (
                                <button className="video_btn ripple_effect" onClick={() => setOpen(true)}>
                                    <span className="btn_icon">
                                        <i className="fa-solid fa-play"></i>
                                    </span>
                                </button>
                            )}
                        </div>
                        <h2 className="details_item_title">{ServiceDetails.title}</h2>
                        <p>{ServiceDetails.longDescription}</p>
                        <p>{ServiceDetails.additionalInfo}</p>
                        <ProcessTechnology />
                        {ServiceDetails.serviceOutcome && (
                            <>
                                <h3 className="details_item_info_title">Resultados do Serviço</h3>
                                <p className="mb-4">
                                    Aqui estão alguns pontos-chave associados ao nosso serviço de {ServiceDetails.title}:
                                </p>
                                <div className="row mb-4">
                                    <div className="col-lg-6">
                                        <ul className="icon_list unordered_list_block">
                                            {ServiceDetails.serviceOutcome.slice(0, Math.ceil(ServiceDetails.serviceOutcome.length / 2)).map((item, index) => (
                                                <li key={index}>
                                                    <span className="icon_list_icon">
                                                        <img src={icon} alt="Check SVG Icon" />
                                                    </span>
                                                    <span className="icon_list_text">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul className="icon_list unordered_list_block">
                                            {ServiceDetails.serviceOutcome.slice(Math.ceil(ServiceDetails.serviceOutcome.length / 2)).map((item, index) => (
                                                <li key={index}>
                                                    <span className="icon_list_icon">
                                                        <img src={icon} alt="Check SVG Icon" />
                                                    </span>
                                                    <span className="icon_list_text">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </>
                        )}
                        {ServiceDetails.galleryImages && (
                            <div className="row">
                                {ServiceDetails.galleryImages.map((image, index) => (
                                    <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                                        <div className="details_item_image m-0">
                                            <img src={image} alt={ServiceDetails.title} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </main>
            <CtaSection />
            <Footer />
            <Scrollbar />
            {ServiceDetails.videoId && (
                <ModalVideo
                    channel='youtube'
                    autoplay
                    isOpen={isOpen}
                    videoId={ServiceDetails.videoId}
                    onClose={() => setOpen(false)}
                />
            )}
        </Fragment>
    );
};

export default ServiceSinglePage;
