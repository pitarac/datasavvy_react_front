import React from 'react';
import Teams from '../../api/team';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import sImg1 from '../../images/icons/icon_facebook.svg';
import sImg2 from '../../images/icons/icon_twitter_x.svg';
import sImg3 from '../../images/icons/icon_linkedin.svg';
import sImg4 from '../../images/icons/icon_instagram.svg';


const TeamSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <section className="team_section xb-hidden section_space">
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

                <div className="team_carousel">
                    <Swiper
                        loop={true}
                        spaceBetween={30}
                        allowTouchMove={true}
                        centeredSlides={true}
                        pagination={{ clickable: true }}
                        speed={800}
                        breakpoints={{
                            576: {
                                slidesPerView: 2,
                            },
                            1025: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {Teams.slice(0, 6).map((team, tm) => (
                            <SwiperSlide key={tm}>
                                <div className="team_block">
                                    <div className="team_member_image">
                                        <Link onClick={ClickHandler} className="image_wrap" aria-label="Detalhes do Membro da Equipe" to={`/team-single/${team.slug}`}>
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
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="container">
                    <div className="btns_group pb-0">
                        <Link className="btn btn-outline-light" to="/team">
                            <span className="btn_label" data-text="Todos os Nossos Especialistas">Todos os Nossos Especialistas</span>
                            <span className="btn_icon">
                                <i className="fa-solid fa-arrow-up-right"></i>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
