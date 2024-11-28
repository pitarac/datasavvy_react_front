import React, { useState } from 'react';
import Bg from '../../../images/shapes/shape_title_under_line.svg';
import shape1 from '../../../images/shapes/shape_line_2.svg';
import shape2 from '../../../images/shapes/shape_line_3.svg';
import shape3 from '../../../images/shapes/shape_line_4.svg';
import shape4 from '../../../images/shapes/shape_space_3.svg';

import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';
import TechnologySection from '../TechnologySection/TechnologySection';
import Testimonial from '../Testimonial/Testimonial';

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
        <section className="process_technology_review_section bg-light section_decoration">
            <div className="container">
                <div className="row align-items-center justify-content-lg-between">
                    <div className="col-lg-6">
                        <div className="heading_block">
                            <div className="heading_focus_text has_underline d-inline-flex" style={{ backgroundImage: `url(${Bg})` }}>
                                Processo de Trabalho
                            </div>
                            <h2 className="heading_text mb-0">
                                Nossa <mark>Abordagem</mark>
                            </h2>
                        </div>
                        <Accordion open={open} toggle={toggle} className="accordion" id="service_process_faq">
                            <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="1">
                                    01. Fase de Descoberta
                                </AccordionHeader>
                                <AccordionBody accordionId="1" className='acc_body'>
                                    <p className="m-0">
                                        Aplicativo de diagnóstico e previsão orientado a dados para melhorar os resultados.
                                    </p>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="2">
                                    02. Design e Desenvolvimento
                                </AccordionHeader>
                                <AccordionBody accordionId="2" className='acc_body'>
                                    <p className="m-0">
                                        Aplicativo de diagnóstico e previsão orientado a dados para melhorar os resultados.
                                    </p>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="3">
                                    03. Manutenção
                                </AccordionHeader>
                                <AccordionBody accordionId="3" className='acc_body'>
                                    <p className="m-0">
                                        Aplicativo de diagnóstico e previsão orientado a dados para melhorar os resultados.
                                    </p>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="4">
                                    04. Implantação
                                </AccordionHeader>
                                <AccordionBody accordionId="4" className='acc_body'>
                                    <p className="m-0">
                                        Aplicativo de diagnóstico e previsão orientado a dados para melhorar os resultados.
                                    </p>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="5">
                                    05. Testes e Garantia de Qualidade
                                </AccordionHeader>
                                <AccordionBody accordionId="5" className='acc_body'>
                                    <p className="m-0">
                                        Aplicativo de diagnóstico e previsão orientado a dados para melhorar os resultados.
                                    </p>
                                </AccordionBody>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className="col-lg-5">
                        <Accordion open={open} toggle={toggle} className="accordion" id="service_process_faq">
                            <ul className="content_layer_group unordered_list_block text-center">
                                <li><AccordionHeader targetId="1"><span>Fase de Descoberta</span></AccordionHeader></li>
                                <li><AccordionHeader targetId="2"><span>Design e Desenvolvimento</span></AccordionHeader></li>
                                <li><AccordionHeader targetId="3"><span>Manutenção</span></AccordionHeader></li>
                                <li><AccordionHeader targetId="4"><span>Implantação</span></AccordionHeader></li>
                                <li><AccordionHeader targetId="5"><span>Testes e Garantia de Qualidade</span></AccordionHeader></li>
                            </ul>
                        </Accordion>
                    </div>
                </div>
                <TechnologySection />
                <Testimonial />
            </div>

            <div className="decoration_item shape_image_1">
                <img src={shape1} alt="Forma Decorativa" />
            </div>
            <div className="decoration_item shape_image_2">
                <img src={shape2} alt="Forma Decorativa" />
            </div>
            <div className="decoration_item shape_image_3">
                <img src={shape3} alt="Forma Decorativa" />
            </div>
            <div className="decoration_item shape_image_4">
                <img src={shape4} alt="Forma Decorativa" />
            </div>
        </section>
    )
};
export default FaqSection;
