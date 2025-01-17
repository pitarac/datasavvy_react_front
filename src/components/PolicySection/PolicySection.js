import React from 'react';
import sIcon1 from '../../images/icons/icon_user_check.svg';
import sIcon2 from '../../images/icons/icon_headphone.svg';
import sIcon3 from '../../images/icons/icon_dollar.svg';

const Policy = [
    {
        title: 'Membros da Equipe Especializados',
        subTitle: 'Nos orgulhamos de reunir uma equipe diversificada e altamente qualificada.',
        icon: sIcon1,
    },
    {
        title: 'Atendimento ao Cliente Mais Rápido',
        subTitle: 'Nos orgulhamos de fornecer o atendimento ao cliente mais rápido da indústria.',
        icon: sIcon2,
    },
    {
        title: 'Preços Razoáveis',
        subTitle: 'Acreditamos em oferecer preços razoáveis que proporcionam excelência.',
        icon: sIcon3,
    },
];

const PolicySection = (props) => {
    return (
        <section className="policy_section">
            <div className="container">
                <div className="row">
                    {Policy.map((policy, pitem) => (
                        <div className="col-lg-4" key={pitem}>
                            <div className="iconbox_block layout_icon_left">
                                <div className="iconbox_icon bg-secondary-subtle">
                                    <img src={policy.icon} alt="Ícone de SVG de Dólar" />
                                </div>
                                <div className="iconbox_content">
                                    <h3 className="iconbox_title">{policy.title}</h3>
                                    <p className="mb-0">
                                        {policy.subTitle}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PolicySection;
