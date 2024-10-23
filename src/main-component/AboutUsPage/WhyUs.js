import React from 'react';
import wImg from '../../images/about/about_image_5.webp'
import sIcon1 from '../../images/icons/icon_check_2.svg'
import sIcon2 from '../../images/icons/icon_leaf.svg'
import sIcon3 from '../../images/icons/icon_box.svg'
import sIcon4 from '../../images/icons/icon_receipt_add.svg'
import sIcon5 from '../../images/icons/icon_monitor.svg'
import sIcon6 from '../../images/icons/icon_microscope.svg'

const Policy = [
    {
        title: 'Qualidade em Primeiro Lugar',
        icon: sIcon1,
    },
    {
        title: 'Cooperação Flexível',
        icon: sIcon2,
    },
    {
        title: 'Entrega Pontual',
        icon: sIcon3,
    },
    {
        title: 'Custos Transparentes',
        icon: sIcon4,
    },
    {
        title: 'Desenvolvedores Qualificados',
        icon: sIcon5,
    },
    {
        title: 'Escalonamento Rápido',
        icon: sIcon6,
    },
]

const WhyUs = (props) => {

    return (
        <section className="service_section section_space bg-light">
            <div className="container">
                <div className="row align-items-center justify-content-lg-between">
                    <div className="col-lg-6">
                        <div className="image_wrap">
                            <img src={wImg} alt="DataSavvy - Sobre"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="ps-lg-5">
                            <div className="heading_block">
                                <div className="heading_focus_text">
                                    <span className="badge bg-secondary text-white">Por Que Nós?</span>
                                    Melhor
                                </div>
                                <h2 className="heading_text mb-0">
                                    Por que nossos serviços são melhores que os outros?
                                </h2>
                            </div>
                            <ul className="service_facilities_group unordered_list">
                                {Policy.map((policy, pitem) => (
                                    <li key={pitem}>
                                        <strong className="iconbox_block layout_icon_left">
                                            <span className="iconbox_icon">
                                                <img src={policy.icon} alt="Ícone de Política" />
                                            </span>
                                            <span className="iconbox_content">
                                                <strong className="iconbox_title mb-0">{policy.title}</strong>
                                            </span>
                                        </strong>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyUs;