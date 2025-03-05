import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchServiceBySlug } from '../../api/service';
import ModalVideo from 'react-modal-video';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import ProcessTechnology from '../../components/software-company-components/ProcessTechnology/ProcessTechnology';

import icon from '../../images/icons/icon_check_3.svg';

const ServiceSinglePage = () => {
    const { slug } = useParams();
    const [service, setService] = useState(null);
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        const loadService = async () => {
            const data = await fetchServiceBySlug(slug);
            setService(data);
        };
        loadService();
    }, [slug]);

    if (!service) {
        return <div>Carregando...</div>;
    }

    return (
        <Fragment>
            <Header />
            <main className="page_content service-single-page">
                <PageTitle pageTitle={service.title} pagesub={'Detalhes'} pageTop={'Serviços'} />
                <section className="service_details_section section_space bg-light">
                    <div className="container">
                        <div className="details_item_image position-relative">
                            <img src={`http://localhost:5001${service.sImg}`} alt={service.title} />
                            {service.videoId && (
                                <button className="video_btn ripple_effect" onClick={() => setOpen(true)}>
                                    <span className="btn_icon">
                                        <i className="fa-solid fa-play"></i>
                                    </span>
                                </button>
                            )}
                        </div>
                        <h2 className="details_item_title">{service.title}</h2>
                        <p>{service.longDescription}</p>
                        <p>{service.additionalInfo}</p>
                        <ProcessTechnology />
                        {service.serviceOutcome && (
                            <>
                                <h3 className="details_item_info_title">Resultados do Serviço</h3>
                                <ul className="icon_list unordered_list_block">
                                    {service.serviceOutcome.map((item, index) => (
                                        <li key={index}>
                                            <span className="icon_list_icon">
                                                <img src={icon} alt="Check SVG Icon" />
                                            </span>
                                            <span className="icon_list_text">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                </section>
            </main>
            <CtaSection />
            <Footer />
            <Scrollbar />
            {service.videoId && (
                <ModalVideo
                    channel='youtube'
                    autoplay
                    isOpen={isOpen}
                    videoId={service.videoId}
                    onClose={() => setOpen(false)}
                />
            )}
        </Fragment>
    );
};

export default ServiceSinglePage;
