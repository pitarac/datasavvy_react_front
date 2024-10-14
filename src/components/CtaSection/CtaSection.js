// src/components/cta-section/CtaSection.js

import React from 'react';
import Bg from '../../images/backgrounds/bg_image_1.webp';
import { Link } from "react-router-dom";

const CtaSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="calltoaction_section parallaxie" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="container text-center">
                <div className="heading_block text-white">
                    <h2 className="heading_text">
                        Pronto para Começar? Vamos Conversar
                    </h2>
                    <p className="heading_description mb-0">
                        Nossa equipe de especialistas está pronta para colaborar com você em cada etapa, desde a consulta inicial até a implementação.
                    </p>
                </div>
                <Link onClick={ClickHandler} to="/contact" className="btn btn-primary">
                    <span className="btn_label" data-text="Entre em Contato Hoje!">Entre em Contato Hoje!</span>
                    <span className="btn_icon">
                        <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                </Link>
            </div>
        </section>
    );
}

export default CtaSection;
