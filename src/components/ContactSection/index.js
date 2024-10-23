import React from 'react'
import ContactForm from '../ContactFrom/ContactForm'
import icon1 from '../../images/icons/icon_map_mark_2.svg'
import icon2 from '../../images/icons/icon_calling_2.svg'
import icon3 from '../../images/icons/icon_mail_3.svg'
import icon4 from '../../images/icons/icon_calendar_2.svg'


const ContactSection = (props) => {
    return (
        <section className="contact_section section_space bg-light">
            <div className="container">
                <div className="contact_info_box row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="iconbox_block text-center">
                            <div className="iconbox_icon">
                                <img src={icon1} alt="Ícone de Localização" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Localização</h3>
                                <p className="mb-0">
                                    Sunshine Business Park, Setor-94, Polônia
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="iconbox_block text-center">
                            <div className="iconbox_icon">
                                <img src={icon2} alt="Ícone de Contato" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Contato</h3>
                                <p className="mb-0">+88(0) 555-0108</p>
                                <div className="mb-0">+88(0) 555-01117</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="iconbox_block text-center">
                            <div className="iconbox_icon">
                                <img src={icon3} alt="Ícone de Email" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Email</h3>
                                <p className="mb-0">Techco@example.com</p>
                                <p className="mb-0">gmail.@example.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="iconbox_block text-center">
                            <div className="iconbox_icon">
                                <img src={icon4} alt="Ícone de Calendário" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Horário de Visita</h3>
                                <p className="mb-0">Seg - Sáb: 8:00 - 17:00</p>
                                <p className="mb-0">Domingo: Fechado</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section_space pb-0">
                    <div className="row justify-content-lg-between">
                        <div className="col-lg-7">
                            <div className="contact_form mb-0">
                                <h3 className="details_item_info_title mb-1">Envie-nos Uma Mensagem</h3>
                                <p className="mb-5">
                                    Dê-nos a chance de servir e trazer magia para a sua marca.
                                </p>
                                <ContactForm />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="gmap_canvas ps-lg-5">
                                <iframe title='map' src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection;
