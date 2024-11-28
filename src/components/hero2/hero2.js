import React from 'react';
import Bg from '../../images/shapes/shape_title_under_line.svg';
import circle1 from '../../images/hero/circle_engine_1.webp';
import circle2 from '../../images/hero/circle_engine_2.webp';
import circle3 from '../../images/hero/circle_engine_3.webp';
import circle4 from '../../images/hero/circle_engine_4.webp';
import shape1 from '../../images/hero/shape_image_1.webp';
import shape2 from '../../images/hero/shape_image_2.webp';
import shape3 from '../../images/hero/shape_image_3.webp';
import shape4 from '../../images/hero/shape_image_4.webp';

const Hero2 = (props) => {
  return (
    <section className="software_company_hero_section xb-hidden">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="content_wrap">
              <div
                className="heading_focus_text has_underline text-white d-inline-flex"
                style={{ backgroundImage: `url(${Bg})` }}
              >
                Solução Perfeita para Empresas
              </div>
              <h1 className="text-white">
                Ajudamos Empresas a <mark>Digitalizar</mark> Seus Negócios.
              </h1>
              <p>
                No cenário digital em constante evolução de hoje, estar à frente é essencial para
                empresas que desejam prosperar e ter sucesso.
              </p>
              <ul className="step_list text-white unordered_list_block">
                <li>Foco na qualidade primeiro</li>
                <li>Chegue ao mercado no tempo certo</li>
              </ul>
              <ul className="btns_group unordered_list p-0 justify-content-start">
                <li>
                  <a className="btn" href="pricing.html">
                    <span className="btn_label" data-text="Entre em Contato Hoje!">
                      Entre em Contato Hoje!
                    </span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a className="hotline_block" href="tel:+420318568511">
                    <span className="hotline_icon">
                      <i className="fa-solid fa-phone-volume"></i>
                    </span>
                    <span className="hotline_content">
                      <small>CONTATE-NOS DIARIAMENTE</small>
                      <strong className="text-white">(61) 3773-9868</strong>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="engine_image">
              <div className="image_wrap_1">
                <img src={circle1} alt="Motor" />
              </div>
              <div className="image_wrap_2">
                <img src={circle2} alt="Motor" />
              </div>
              <div className="image_wrap_3">
                <img src={circle3} alt="Motor" />
              </div>
              <div className="image_wrap_4">
                <img src={circle4} alt="Motor" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shape_image_1">
        <img src={shape1} alt="Motor" />
      </div>
      <div className="shape_image_2">
        <img src={shape2} alt="Motor" />
      </div>
      <div className="shape_image_3">
        <img src={shape3} alt="Motor" />
      </div>
      <div className="shape_image_4">
        <img src={shape4} alt="Motor" />
      </div>
    </section>
  );
};

export default Hero2;
