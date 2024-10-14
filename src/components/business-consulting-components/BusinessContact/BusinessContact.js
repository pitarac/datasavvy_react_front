// src/components/business-contact/BusinessContact.js

import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import Bg from '../../../images/backgrounds/bg_image_5.webp';

const BusinessContact = (props) => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
    });

    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage',
        messages: {
            required: 'Este campo é obrigatório.',
            email: 'Por favor, insira um e-mail válido.',
            alpha_space: 'Somente letras e espaços são permitidos.',
            phone: 'Por favor, insira um número de telefone válido.'
        }
    }));

    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value });
        validator.showMessageFor(e.target.name);
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            // Aqui você pode adicionar a lógica para enviar os dados do formulário
            console.log('Formulário enviado com sucesso!');
            setForms({
                name: '',
                email: '',
                company: '',
                phone: '',
                message: ''
            });
            validator.hideMessages();
        } else {
            validator.showMessages();
            // Força uma atualização para exibir as mensagens de erro
            // Você pode usar um hook de estado para forçar a renderização
        }
    };

    return (

        <section className="calltoaction_section parallaxie" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="container">
                <div className="row justify-content-lg-end">
                    <div className="col-lg-7">
                        <div className="instant_contact_form bg-primary shadow-none">
                            <div className="small_title text-white">
                                <i className="fa-solid fa-envelope-open-text text-white"></i>
                                Vamos Conversar!
                            </div>
                            <h3 className="form_title text-white">
                                Envie-nos uma mensagem, e discutiremos seu projeto prontamente.
                            </h3>
                            <form className="xb-item--form contact-from" onSubmit={(e) => submitHandler(e)}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="input_title" htmlFor="input_name">
                                                <i className="fa-regular fa-user"></i>
                                            </label>
                                            <input
                                                value={forms.name}
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                onBlur={(e) => changeHandler(e)}
                                                onChange={(e) => changeHandler(e)}
                                                placeholder="Seu Nome" />
                                            {validator.message('name', forms.name, 'required|alpha_space')}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="input_title" htmlFor="input_email">
                                                <i className="fa-regular fa-envelope"></i>
                                            </label>
                                            <input
                                                value={forms.email}
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                onBlur={(e) => changeHandler(e)}
                                                onChange={(e) => changeHandler(e)}
                                                placeholder="Seu E-mail" />
                                            {validator.message('email', forms.email, 'required|email')}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="input_title" htmlFor="input_phone">
                                                <i className="fa-regular fa-phone-volume"></i>
                                            </label>
                                            <input
                                                value={forms.phone}
                                                type="phone"
                                                name="phone"
                                                className="form-control"
                                                onBlur={(e) => changeHandler(e)}
                                                onChange={(e) => changeHandler(e)}
                                                placeholder="Seu Telefone" />
                                            {validator.message('phone', forms.phone, 'required|phone')}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="input_title" htmlFor="input_company">
                                                <i className="fa-regular fa-globe"></i>
                                            </label>
                                            <input
                                                value={forms.company}
                                                type="text"
                                                name="company"
                                                className="form-control"
                                                onBlur={(e) => changeHandler(e)}
                                                onChange={(e) => changeHandler(e)}
                                                placeholder="Nome da Sua Empresa" />
                                            {validator.message('company', forms.company, 'required')}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label className="input_title" htmlFor="input_textarea">
                                                <i className="fa-regular fa-comments"></i>
                                            </label>
                                            <textarea
                                                onBlur={(e) => changeHandler(e)}
                                                onChange={(e) => changeHandler(e)}
                                                value={forms.message}
                                                name="message"
                                                className="form-control"
                                                placeholder="Como podemos ajudá-lo(a)?">
                                            </textarea>
                                            {validator.message('message', forms.message, 'required')}
                                        </div>
                                        <button type="submit" className="btn btn-primary">
                                            <span className="btn_label" data-text="Enviar Solicitação">Enviar Solicitação</span>
                                            <span className="btn_icon">
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default BusinessContact;
