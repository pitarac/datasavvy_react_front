// src/components/empowering-success/EmpoweringSuccess.js

import React, { useState } from 'react';
import icon1 from '../../../images/icons/icon_bulb.svg';
import icon2 from '../../../images/icons/icon_user_rating.svg';
import icon3 from '../../../images/icons/icon_hand_shake.svg';
import ModalVideo from 'react-modal-video';
import eImg from '../../../images/about/about_image_7.webp';

const EmpoweringSuccess = (props) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <section className="empowering_success_section section_space bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="heading_block text-center">
                            <h2 className="heading_text mb-0">
                                Capacitando o Sucesso Através de Consultoria Estratégica.
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="image_wrap position-relative">
                            <img className="rounded" src={eImg} alt="Data Savvy - Sobre Nós" />
                            <button onClick={() => setOpen(true)} className="video_btn ripple_effect">
                                <span className="btn_icon">
                                    <i className="fa-solid fa-play"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <ul className="empowering_services unordered_list_block ps-lg-5">
                            <li>
                                <div className="iconbox_block layout_icon_left">
                                    <div className="iconbox_icon">
                                        <img src={icon1} alt="Ícone Lâmpada" />
                                    </div>
                                    <div className="iconbox_content">
                                        <h3 className="iconbox_title">Soluções Personalizadas</h3>
                                        <p className="mb-0">
                                            Nossos serviços de consultoria são personalizados para atender às necessidades e objetivos únicos de cada cliente, garantindo alinhamento preciso com suas metas de negócio.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="iconbox_block layout_icon_left">
                                    <div className="iconbox_icon">
                                        <img src={icon2} alt="Ícone Avaliação de Usuário" />
                                    </div>
                                    <div className="iconbox_content">
                                        <h3 className="iconbox_title">Abordagem Colaborativa</h3>
                                        <p className="mb-0">
                                            Acreditamos em fomentar parcerias sólidas com nossos clientes, trabalhando em estreita colaboração para entender seus desafios e identificar oportunidades.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="iconbox_block layout_icon_left">
                                    <div className="iconbox_icon">
                                        <img src={icon3} alt="Ícone Aperto de Mãos" />
                                    </div>
                                    <div className="iconbox_content">
                                        <h3 className="iconbox_title">Equipe de Especialistas</h3>
                                        <p className="mb-0">
                                            Nossa equipe é composta por profissionais experientes dedicados a fornecer soluções inovadoras que impulsionam o sucesso dos nossos clientes.
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="7e90gBu4pas" onClose={() => setOpen(false)} />
        </section>
    );
}

export default EmpoweringSuccess;
