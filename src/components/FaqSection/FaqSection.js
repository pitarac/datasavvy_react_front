import React, { useState } from 'react';
import fImg1 from '../../images/faq/faq_img.png'
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

const FaqSection = (props) => {

    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <section className="faq pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="xb-faq-content">
                            <div className="sec-title mb-125">
                                <h2 className="mb-30 wow skewIn">Perguntas comuns <br /> <span> respondidas</span></h2>
                                <p>No coração do nosso compromisso de fornecer <br /> soluções excepcionais de imigração está a nossa confiança</p>
                            </div>
                            <div className="faq-img">
                                <img src={fImg1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="xb-faq">
                            <Accordion open={open} toggle={toggle} className='accordion_box'>
                                <AccordionItem className='block'>
                                    <AccordionHeader targetId="1" className='acc-btn'>Quais serviços vocês oferecem?
                                        <span className="arrow"></span>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="1" className='acc_body'>
                                        <div className="content">
                                            <p>Oferecemos serviços completos de consultoria de imigração e visto, <br /> incluindo assistência para solicitação de visto, preparação de documentos,</p>
                                            <ul>
                                                <li><i className="far fa-check"></i>Assistência Completa de Visto</li>
                                                <li><i className="far fa-check"></i>Especialização em Categorias de Visto</li>
                                                <li><i className="far fa-check"></i>Transparência e Comunicação</li>
                                            </ul>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='block'>
                                    <AccordionHeader targetId="2" className='acc-btn'>Como é o processo de consultoria?
                                        <span className="arrow"></span>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="2" className='acc_body'>
                                        <div className="content">
                                            <p>Oferecemos serviços completos de consultoria de imigração e visto, <br /> incluindo assistência para solicitação de visto, preparação de documentos,</p>
                                            <ul>
                                                <li><i className="far fa-check"></i>Assistência Completa de Visto</li>
                                                <li><i className="far fa-check"></i>Especialização em Categorias de Visto</li>
                                                <li><i className="far fa-check"></i>Transparência e Comunicação</li>
                                            </ul>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='block'>
                                    <AccordionHeader targetId="3" className='acc-btn'>Quanto custam os seus serviços?
                                        <span className="arrow"></span>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="3" className='acc_body'>
                                        <div className="content">
                                            <p>Oferecemos serviços completos de consultoria de imigração e visto, <br /> incluindo assistência para solicitação de visto, preparação de documentos,</p>
                                            <ul>
                                                <li><i className="far fa-check"></i>Assistência Completa de Visto</li>
                                                <li><i className="far fa-check"></i>Especialização em Categorias de Visto</li>
                                                <li><i className="far fa-check"></i>Transparência e Comunicação</li>
                                            </ul>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='block'>
                                    <AccordionHeader targetId="4" className='acc-btn'>Como posso começar a usar seus serviços?
                                        <span className="arrow"></span>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="4" className='acc_body'>
                                        <div className="content">
                                            <p>Oferecemos serviços completos de consultoria de imigração e visto, <br /> incluindo assistência para solicitação de visto, preparação de documentos,</p>
                                            <ul>
                                                <li><i className="far fa-check"></i>Assistência Completa de Visto</li>
                                                <li><i className="far fa-check"></i>Especialização em Categorias de Visto</li>
                                                <li><i className="far fa-check"></i>Transparência e Comunicação</li>
                                            </ul>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='block'>
                                    <AccordionHeader targetId="5" className='acc-btn'>Qual é a sua taxa de sucesso com solicitações de visto?
                                        <span className="arrow"></span>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="5" className='acc_body'>
                                        <div className="content">
                                            <p>Oferecemos serviços completos de consultoria de imigração e visto, <br /> incluindo assistência para solicitação de visto, preparação de documentos,</p>
                                            <ul>
                                                <li><i className="far fa-check"></i>Assistência Completa de Visto</li>
                                                <li><i className="far fa-check"></i>Especialização em Categorias de Visto</li>
                                                <li><i className="far fa-check"></i>Transparência e Comunicação</li>
                                            </ul>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default FaqSection;
