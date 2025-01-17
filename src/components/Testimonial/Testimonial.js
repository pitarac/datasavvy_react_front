import React from 'react';
import tImg1 from '../../images/avatar/avatar_5.webp';
import tImg2 from '../../images/avatar/avatar_6.webp';
import tImg3 from '../../images/avatar/avatar_5.webp';
import tImg4 from '../../images/avatar/avatar_7.webp';
import Bg from '../../images/shapes/bg_pattern_2.svg';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// Array de depoimentos dos clientes
const testimonial = [
    {
        id: '01',
        tImg: tImg1,
        Title: 'Serviços Excepcionais',
        Des: "Como uma startup, precisávamos de um parceiro tecnológico que pudesse transformar nossa visão em realidade. A Itsafe superou nossas expectativas com soluções inovadoras e uma abordagem proativa. Eles nos acompanharam em cada etapa do processo, tornando nossa jornada conjunta um sucesso.",
        Name: 'Carlos Eduardo',
        sub: 'Diretor de Marketing',
    },
    {
        id: '02',
        tImg: tImg2,
        Title: 'Muito Satisfeitos',
        Des: "Estamos trabalhando com a Techco há vários anos e eles sempre entregam resultados excelentes. Desde o desenvolvimento de software personalizado até a integração de serviços em nuvem, suas soluções nos ajudaram a manter a liderança no mercado e a nos adaptar às novas demandas. A expertise, confiabilidade e compromisso da equipe com a satisfação do cliente fazem da Techco nosso parceiro de TI preferido.",
        Name: 'Mariana Silva',
        sub: 'Fundadora de Startup de Tecnologia',
    },
    {
        id: '03',
        tImg: tImg3,
        Title: 'Resposta Ágil',
        Des: "Trabalhar com a Techco foi uma experiência tranquila do começo ao fim. A equipe dedicou tempo para entender nossos objetivos e desafios, entregando uma solução que atendeu perfeitamente às nossas necessidades. O profissionalismo, conhecimento técnico e dedicação à satisfação do cliente foram evidentes durante todo o projeto. Estamos ansiosos para futuras parcerias com a Techco.",
        Name: 'João Pedro',
        sub: 'Diretor de Projetos',
    },
    {
        id: '04',
        tImg: tImg4,
        Title: 'Serviços Incríveis',
        Des: "A equipe da Techco superou nossas expectativas. O gerenciamento meticuloso do projeto e a competência técnica foram excepcionais. Eles colaboraram de perto conosco, garantindo que as soluções não apenas atendessem, mas também superassem nossas necessidades. Estamos muito satisfeitos com o resultado final.",
        Name: 'Fernanda Oliveira',
        sub: 'Gerente de Marketing',
    }
];

// Componente de Depoimentos
const Testimonial = () => {

    return (
        // Seção de depoimentos com fundo personalizado
        <section className="review_section section_space bg-light" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="container">
                {/* Bloco de título centralizado */}
                <div className="heading_block text-center">
                    <div className="heading_focus_text">
                        <span className="badge bg-secondary text-white">Cliente</span>
                        Depoimentos 🙂
                    </div>
                    <h2 className="heading_text mb-0">
                        O que os clientes dizem
                    </h2>
                </div>

                <div className="row">
                    {/* Layout responsivo com Masonry */}
                    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 991: 2 }}>
                        <Masonry columnsCount={4} gutter="30px">
                            {/* Mapeia cada depoimento para exibição */}
                            {testimonial.map((testimonial, tsm) => (
                                <div className="review_block pb-0" key={tsm}>
                                    <h3 className="review_title">“{testimonial.Title}”</h3>
                                    <p className="review_commtent">
                                        {testimonial.Des}
                                    </p>
                                    <div className="review_admin">
                                        <div className="review_admin_image">
                                            {/* Imagem do cliente */}
                                            <img src={testimonial.tImg} alt={testimonial.Name} />
                                        </div>
                                        <div className="review_admin_info">
                                            {/* Nome e cargo do cliente */}
                                            <h4 className="review_admin_name">{testimonial.Name}</h4>
                                            <span className="review_admin_designation">{testimonial.sub}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
