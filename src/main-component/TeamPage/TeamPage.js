import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Teams from '../../api/team';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import tImg from '../../images/team/team_cartoon_image.webp';
import sImg1 from '../../images/icons/icon_facebook.svg';
import sImg2 from '../../images/icons/icon_twitter_x.svg';
import sImg3 from '../../images/icons/icon_linkedin.svg';
import sImg4 from '../../images/icons/icon_instagram.svg';

const TeamPage = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <Fragment>
            <Header />
            <main className="page_content about-page">
                <PageTitle pageTitle={'Nossa Equipe'} pagesub={'Membros 😍'} pageTop={'Equipe'} />
                <section className="about_section section_space bg-light">
                    <div className="container">
                        <div className="row align-items-center justify-content-lg-between">
                            <div className="col-lg-6 order-lg-last">
                                <div className="team_cartoon_image">
                                    <img src={tImg} alt="Ilustração da Equipe" />
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="about_content">
                                    <div className="heading_block">
                                        <div className="heading_focus_text">
                                            Nossa Dedicada
                                            <span className="badge bg-secondary text-white">Equipe 🙂</span>
                                        </div>
                                        <h2 className="heading_text">
                                            Conheça Nossa Equipe de Especialistas da Techco
                                        </h2>
                                        <p className="heading_description mb-0">
                                            Conheça os profissionais por trás da Techco – nossa equipe especializada, dedicada a revolucionar o setor de TI. Comprometidos em oferecer soluções inovadoras e eficazes.
                                        </p>
                                    </div>
                                    <Link onClick={ClickHandler} to={'/team'} className="btn">
                                        <span className="btn_label" data-text="Fale com um Especialista">Fale com um Especialista</span>
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="team_section section_space">
                    <div className="container">
                        <div className="heading_block text-center">
                            <div className="heading_focus_text">
                                <span className="badge bg-secondary text-white">Nossos Especialistas</span>
                                Membros da Equipe 😍
                            </div>
                            <h2 className="heading_text mb-0">
                                Especialistas Altamente Qualificados
                            </h2>
                        </div>

                        <div className="row">
                            {Teams.slice(0, 6).map((team, tm) => (
                                <div className="col-lg-4 col-md-6 col-sm-6" key={tm}>
                                    <div className="team_block">
                                        <div className="team_member_image">
                                            <Link onClick={ClickHandler} className="image_wrap" aria-label="Botão de Detalhes da Equipe" to={`/team-single/${team.slug}`}>
                                                <img src={team.tImg} alt="Imagem do Membro da Equipe" />
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </Link>
                                        </div>
                                        <div className="team_member_info">
                                            <h3 className="team_member_name">
                                                <Link onClick={ClickHandler} to={`/team-single/${team.slug}`}>{team.name}</Link>
                                            </h3>
                                            <h4 className="team_member_designation">{team.title}</h4>
                                            <ul className="social_icons_block unordered_list justify-content-center">
                                                <li>
                                                    <Link onClick={ClickHandler} to={`/team-single/${team.slug}`}>
                                                        <img src={sImg1} alt="Ícone do Facebook" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link onClick={ClickHandler} to={`/team-single/${team.slug}`}>
                                                        <img src={sImg2} alt="Ícone do Twitter X" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link onClick={ClickHandler} to={`/team-single/${team.slug}`}>
                                                        <img src={sImg3} alt="Ícone do LinkedIn" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link onClick={ClickHandler} to={`/team-single/${team.slug}`}>
                                                        <img src={sImg4} alt="Ícone do Instagram" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <CtaSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default TeamPage;
