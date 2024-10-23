import React from 'react';
import sIcon1 from '../../images/icons/icon_clock.svg'
import sIcon2 from '../../images/icons/icon_dart_board_2.svg'
import sIcon3 from '../../images/icons/icon_target.svg'

const Policy = [
    {
        title: 'Nossa História',
        subTitle: 'Desde 2017, somos um parceiro confiável e visionário em engenharia de software para marcas de classe mundial.',
        icon: sIcon1,
    },
    {
        title: 'Nossa Missão',
        subTitle: 'Nossa missão é clarificar o que a empresa deseja alcançar, quem queremos apoiar e por que queremos apoiá-los.',
        icon: sIcon2,
    },
    {
        title: 'Nossa Visão',
        subTitle: 'Uma visão para a empresa foca no potencial futuro e no que pretendemos ser, mostrando a direção que queremos seguir.',
        icon: sIcon3,
    },

]


const PolicySection = (props) => {

    return (
        <section className="policy_section bg-light">
            <div className="container">
                <div className="row">
                    {Policy.map((policy, pitem) => (
                        <div className="col-lg-4" key={pitem}>
                            <div className="iconbox_block">
                                <div className="iconbox_icon">
                                    <img src={policy.icon} alt="Ícone da Política" />
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
