// src/components/PricingBlock.js
import React from 'react';
import { Link } from 'react-router-dom';

const PricingBlock = ({
    isActive,
    priceMonthly,
    priceAnnually,
    saveMonthly,
    saveAnnually,
    title,
    description,
    features,
    isBestOffer,
    offerBanner
}) => {
    return (
        <div className={`pricing_block ${isActive ? 'active' : ''}`}>
            {isBestOffer && (
                <div className="best_plan">
                    <img src={offerBanner} alt="Melhor Oferta" />
                </div>
            )}
            <div className="table_head">
                <div className="pricing_price_value bg-primary-subtle text-primary">
                    <span className="pricing_monthly">
                        <del>{priceMonthly.original}</del> {priceMonthly.discounted}<small>.6</small> <sub>Você Economiza <u>{saveMonthly}</u> Mensalmente</sub>
                    </span>
                    <span className="pricing_annually">
                        <del>{priceAnnually.original}</del> {priceAnnually.discounted}<small>.6</small> <sub>Você Economiza <u>{saveAnnually}</u> Anualmente</sub>
                    </span>
                </div>
                <div className="pricing_block_title">
                    <h3 className="pricing_package_title">{title}</h3>
                    <p className="pricing_package_description mb-0">
                        {description}
                    </p>
                </div>
            </div>
            <ul className="icon_list unordered_list_block">
                {features.map((feature, index) => (
                    <li key={index} className={feature.isDeleted ? 'delete' : ''}>
                        <span className="icon_list_icon">
                            <i className="fa-regular fa-circle-check"></i>
                        </span>
                        <span className="icon_list_text">
                            {feature.text}
                        </span>
                    </li>
                ))}
            </ul>
            {isBestOffer ? (
                <a className="btn btn-light" href="#!">
                    <span className="btn_label" data-text="Comprar Agora">Comprar Agora</span>
                    <span className="btn_icon">
                        <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                </a>
            ) : (
                <Link to="/pricing" className="btn btn-light">
                    <span className="btn_label" data-text="Comprar Agora">Comprar Agora</span>
                    <span className="btn_icon">
                        <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                </Link>
            )}
        </div>
    );
};

export default PricingBlock;
