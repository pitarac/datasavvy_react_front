import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import icon1 from '../../../images/icons/icon_c.svg';
import icon2 from '../../../images/icons/icon_g2.svg';
import tImg1 from '../../../images/avatar/avatar_5.webp';
import tImg2 from '../../../images/avatar/avatar_6.webp';
import tImg3 from '../../../images/avatar/avatar_7.webp';

import clogo from '../../../images/clients/client_logo_8.webp';
import flag from '../../../images/flag/ukraine_flag.webp';

const testimonial = [
    { id: '01', tImg: tImg1, Title: 'Amazing software services', Des: "A solução deles nos ajudou muito.", Name: 'Maverick Phoenix', sub: 'Board Member, UNIQA', country: 'Seattle, Ukraine' },
    { id: '02', tImg: tImg2, Title: 'Great Support', Des: "Estamos muito satisfeitos com o serviço.", Name: 'John Doe', sub: 'CEO, XYZ Corp', country: 'New York, USA' },
    { id: '03', tImg: tImg3, Title: 'Highly Recommend', Des: "Excelente qualidade e suporte.", Name: 'Alice Smith', sub: 'Founder, ABC Ltd.', country: 'London, UK' }
];

const Testimonial = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="row">
            <div className="col-lg-4">
                <div className="deals_winner_customers">
                    <h3 className="title_text">
                        <mark>3,900+</mark> clientes satisfeitos
                    </h3>
                </div>
            </div>
            <div className="col-lg-8">
                <div className="review_onecol_wrapper">
                    <div className="review_onecol_carousel">
                        <Swiper
                            modules={[Navigation, Pagination, A11y, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}
                            loop={true}
                            speed={1800}
                            autoplay={{ delay: 3000 }}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current
                            }}
                        >
                            {testimonial.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="review_block_2">
                                        <h3 className="review_title">“{item.Title}”</h3>
                                        <p className="review_comment">{item.Des}</p>
                                        <div className="review_admin">
                                            <img src={item.tImg} alt={item.Name} />
                                            <div className="review_admin_info">
                                                <h4 className="review_admin_name">{item.Name}</h4>
                                                <span className="review_admin_designation">{item.sub}</span>
                                                <div className="review_admin_country">
                                                    <img src={flag} alt="Country Flag" />
                                                    <span>{item.country}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="carousel_arrows_nav">
                            <button ref={prevRef} type="button" className="r1cc-swiper-button-prev">
                                <i className="fa-solid fa-arrow-left"></i>
                            </button>
                            <button ref={nextRef} type="button" className="r1cc-swiper-button-next">
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
