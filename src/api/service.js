// src/api/service.js

// Importar imagens disponíveis
import sImg1 from '../images/services/service_image_1.webp';
import sImg2 from '../images/services/service_image_2.webp';
import sImg3 from '../images/services/service_image_3.webp';
import sImg4 from '../images/services/service_image_4.webp';
import sImg5 from '../images/services/service_image_5.webp';

import icon1 from '../images/icons/icon_code.svg';
import icon2 from '../images/icons/icon_programming_tree.svg';
import icon3 from '../images/icons/icon_monitor_2.svg';
import icon4 from '../images/icons/icon_phone.svg';
import icon5 from '../images/icons/icon_bug.svg';
import icon6 from '../images/icons/icon_programming.svg';

import icon7 from '../images/icons/icon_analisis_2.svg';
import icon8 from '../images/icons/icon_process.svg';
import icon9 from '../images/icons/icon_chart_2.svg';
import icon10 from '../images/icons/icon_meeting.svg';
import icon11 from '../images/icons/icon_bulb_2.svg';
import icon12 from '../images/icons/icon_speed_miter.svg';

// Imagens adicionais (reutilizando as disponíveis)
const galleryImage1 = sImg2; // Reutilizando sImg2
const galleryImage2 = sImg3; // Reutilizando sImg3
const galleryImage3 = sImg4; // Reutilizando sImg4

const Services = [
    {
        Id: '1',
        sImg: sImg1,
        title: 'Análise de Dados',
        slug: 'analise-de-dados',
        thumb1: 'Insights',
        thumb2: 'Estratégia',
        col: 'col-lg-6',
        description: 'Oferecemos análises de dados aprofundadas para extrair insights valiosos e suportar decisões estratégicas.',
        longDescription: `Análise de Dados é o alicerce das empresas modernas, servindo como a base sobre a qual todas as operações digitais se apoiam. Na datasavvy, especializamo-nos em elaborar arquiteturas robustas e confiáveis de dados, personalizadas para atender às necessidades únicas de nossos clientes.`,
        additionalInfo: `Adotamos uma abordagem holística na análise de dados, considerando fatores como requisitos de desempenho, protocolos de segurança, escalabilidade e potencial de crescimento futuro.`,
        serviceOutcome: [
            'Escalabilidade e Flexibilidade',
            'Segurança e Conformidade',
            'Otimização de Desempenho',
            'Experiência do Usuário',
            'Tomada de Decisões Informadas',
        ],
        galleryImages: [galleryImage1, galleryImage2, galleryImage3],
        videoId: '7e90gBu4pas', // ID do vídeo do YouTube
    },
    {
        Id: '2',
        sImg: sImg2,
        title: 'Data Analytics',
        slug: 'data-analytics',
        thumb1: 'Desempenho',
        thumb2: 'Eficiência',
        col: 'col-lg-6',
        description: 'Soluções avançadas de data analytics para aprimorar o desempenho e eficiência dos negócios.',
        longDescription: `No mundo atual orientado por dados, o Data Analytics desempenha um papel crucial na condução de decisões informadas. Nossa equipe oferece soluções avançadas que ajudam as empresas a interpretar dados complexos e transformá-los em insights acionáveis.`,
        additionalInfo: `Utilizamos ferramentas e técnicas de ponta para coletar, processar e analisar dados, permitindo que sua empresa identifique tendências, otimize operações e melhore a experiência do cliente.`,
        serviceOutcome: [
            'Decisões Baseadas em Dados',
            'Melhoria de Eficiência',
            'Identificação de Tendências',
            'Vantagem Competitiva',
            'Satisfação do Cliente',
        ],
        galleryImages: [galleryImage1, galleryImage2, galleryImage3],
        videoId: null,
    },
    {
        Id: '3',
        sImg: sImg3,
        title: 'LGPD',
        slug: 'lgpd',
        thumb1: 'Conformidade',
        thumb2: 'Segurança',
        col: 'col-lg-4',
        description: 'Consultoria especializada para adequação à Lei Geral de Proteção de Dados, garantindo conformidade legal.',
        longDescription: `A conformidade com a LGPD é essencial para empresas que lidam com dados pessoais no Brasil. Oferecemos consultoria especializada para ajudar sua empresa a se adequar às exigências legais, evitando multas e mantendo a confiança dos clientes.`,
        additionalInfo: `Nossos especialistas realizam avaliações completas, implementam políticas de proteção e oferecem treinamento para sua equipe, assegurando que todas as práticas estejam alinhadas com a legislação vigente.`,
        serviceOutcome: [
            'Conformidade Legal',
            'Proteção de Dados',
            'Confiança dos Clientes',
            'Redução de Riscos',
            'Treinamento da Equipe',
        ],
        galleryImages: [galleryImage1, galleryImage2, galleryImage3],
        videoId: null,
    },
    {
        Id: '4',
        sImg: sImg4,
        title: 'Growth Hacking',
        slug: 'growth-hacking',
        thumb1: 'Crescimento',
        thumb2: 'Estratégias',
        col: 'col-lg-4',
        description: 'Estratégias inovadoras de growth hacking para acelerar o crescimento e expandir sua presença no mercado.',
        longDescription: `O Growth Hacking é uma abordagem focada em experimentação e inovação para impulsionar o rápido crescimento do seu negócio. Utilizamos técnicas criativas e análises de dados para identificar oportunidades de expansão e aumentar sua base de clientes.`,
        additionalInfo: `Ao combinar marketing, desenvolvimento de produtos e análise de dados, desenvolvemos estratégias personalizadas que geram resultados mensuráveis e sustentáveis.`,
        serviceOutcome: [
            'Aumento de Clientes',
            'Estratégias Inovadoras',
            'Crescimento Rápido',
            'Otimização de Conversão',
            'Análise de Métricas',
        ],
        galleryImages: [galleryImage1, galleryImage2, galleryImage3],
        videoId: null,
    },
    {
        Id: '5',
        sImg: sImg5,
        title: 'Fábrica de Software',
        slug: 'fabrica-de-software',
        thumb1: 'Desenvolvimento',
        thumb2: 'Soluções Personalizadas',
        col: 'col-lg-4',
        description: 'Desenvolvimento de software sob medida para atender às necessidades específicas do seu negócio.',
        longDescription: `Nossa Fábrica de Software oferece soluções de desenvolvimento personalizadas para empresas que buscam otimizar processos e inovar. Trabalhamos em todas as etapas do ciclo de desenvolvimento, desde a concepção até a implementação e manutenção.`,
        additionalInfo: `Utilizamos metodologias ágeis para garantir eficiência e qualidade, adaptando-nos às mudanças e entregando valor continuamente.`,
        serviceOutcome: [
            'Software Sob Medida',
            'Metodologias Ágeis',
            'Qualidade Garantida',
            'Suporte e Manutenção',
            'Integração de Sistemas',
        ],
        galleryImages: [galleryImage1, galleryImage2, galleryImage3],
        videoId: null,
    },
    {
        Id: '6',
        sImg: icon1,
        title: 'Pesquisa de Mercado',
        slug: 'pesquisa-de-mercado',
        description: 'Análises de mercado detalhadas para identificar oportunidades e tendências relevantes.',
        longDescription: `Entender o mercado é fundamental para o sucesso de qualquer negócio. Oferecemos pesquisas de mercado completas que fornecem insights sobre concorrentes, tendências de consumo e oportunidades de crescimento.`,
        additionalInfo: `Nossas análises ajudam sua empresa a tomar decisões informadas, adaptando estratégias para atender às demandas do mercado.`,
        serviceOutcome: [
            'Análise de Concorrentes',
            'Identificação de Tendências',
            'Segmentação de Mercado',
            'Decisões Informadas',
            'Estratégias Competitivas',
        ],
        galleryImages: [galleryImage1, galleryImage2, galleryImage3],
        videoId: null,
    },
    {
        Id: '7',
        sImg: icon2,
        title: 'Business Intelligence (BI)',
        slug: 'business-intelligence',
        description: 'Soluções de BI para transformar dados em informações acionáveis e estratégicas.',
        longDescription: `Com nossas soluções de Business Intelligence, auxiliamos sua empresa a converter grandes volumes de dados em insights estratégicos. Desenvolvemos dashboards interativos e relatórios personalizados que facilitam a tomada de decisões.`,
        additionalInfo: `Integramos dados de diversas fontes e utilizamos ferramentas avançadas de visualização para proporcionar uma visão clara e abrangente do desempenho do seu negócio.`,
        serviceOutcome: [
            'Tomada de Decisões Estratégicas',
            'Visualização de Dados',
            'Integração de Dados',
            'Relatórios Personalizados',
            'Análise em Tempo Real',
        ],
        galleryImages: [galleryImage1, galleryImage2, galleryImage3],
        videoId: null,
    },
    {
        Id: '8',
        sImg: icon3,
        title: 'Desenvolvimento',
        slug: 'desenvolvimento',
        description: 'Serviços completos de desenvolvimento de software para diversas plataformas e necessidades.',
        longDescription: `Nossa equipe de desenvolvimento é especializada em criar soluções tecnológicas que atendem às demandas específicas do seu negócio. Desenvolvemos desde websites e aplicativos móveis até sistemas empresariais complexos.`,
        additionalInfo: `Trabalhamos com as mais recentes tecnologias e seguimos as melhores práticas de desenvolvimento para garantir produtos de alta qualidade e desempenho.`,
        serviceOutcome: [
            'Desenvolvimento Web',
            'Aplicativos Móveis',
            'Sistemas Empresariais',
            'APIs e Integrações',
            'Soluções Personalizadas',
        ],
        galleryImages: [galleryImage1, galleryImage2, galleryImage3],
        videoId: null,
    },
    {
        Id: '9',
        sImg: icon4,
        title: 'UI/UX Design',
        slug: 'ui-ux-design',
        description: 'Design de interfaces intuitivas e experiências de usuário otimizadas para seus produtos digitais.',
        longDescription: `Acreditamos que um bom design é essencial para o sucesso de qualquer produto digital. Nossa equipe de UI/UX cria interfaces atraentes e funcionais que proporcionam experiências memoráveis aos usuários.`,
        additionalInfo: `Utilizamos metodologias centradas no usuário, realizando pesquisas e testes para garantir que o design atenda às necessidades do público-alvo.`,
        serviceOutcome: [
            'Design de Interface',
            'Prototipagem',
            'Pesquisa de Usuários',
            'Testes de Usabilidade',
            'Experiência do Usuário',
        ],
        galleryImages: [galleryImage1, galleryImage2, galleryImage3],
        videoId: null,
    },
    {
        Id: '10',
        sImg: icon5,
        title: 'Garantia de Qualidade (QA)',
        slug: 'garantia-de-qualidade',
        description: 'Garantia de qualidade rigorosa para assegurar a confiabilidade e desempenho dos seus sistemas.',
        longDescription: `Nossa equipe de QA realiza testes abrangentes para identificar e corrigir falhas antes que seu produto chegue ao mercado. Garantimos que seu software atenda aos mais altos padrões de qualidade.`,
        additionalInfo: `Oferecemos testes funcionais, de desempenho, segurança e automação, assegurando que todos os aspectos do seu sistema funcionem perfeitamente.`,
        serviceOutcome: [
            'Testes Funcionais',
            'Automação de Testes',
            'Testes de Desempenho',
            'Testes de Segurança',
            'Confiabilidade do Sistema',
        ],
        galleryImages: [galleryImage1, galleryImage2, galleryImage3],
        videoId: null,
    },
    {
        Id: '11',
        sImg: icon6,
        title: 'Computação em Nuvem',
        slug: 'computacao-em-nuvem',
        description: 'Soluções de cloud computing para escalabilidade e flexibilidade dos seus recursos de TI.',
        longDescription: `Ajudamos sua empresa a migrar para a nuvem, aproveitando os benefícios de escalabilidade, flexibilidade e redução de custos. Nossas soluções de computação em nuvem são adaptadas às suas necessidades específicas.`,
        additionalInfo: `Oferecemos suporte em todo o processo, desde a estratégia e planejamento até a implementação e gerenciamento contínuo dos serviços em nuvem.`,
        serviceOutcome: [
            'Migração para a Nuvem',
            'Gerenciamento de Nuvem',
            'Infraestrutura como Serviço (IaaS)',
            'Soluções de Escalabilidade',
            'Redução de Custos',
        ],
        galleryImages: [galleryImage1, galleryImage2, galleryImage3],
        videoId: null,
    },
    {
        Id: '12',
        sImg: icon7,
        title: 'Inteligência Artificial',
        slug: 'inteligencia-artificial',
        description: 'Implementação de soluções de IA para automatizar processos e melhorar a tomada de decisões.',
        longDescription: `A Inteligência Artificial está transformando a forma como as empresas operam. Oferecemos soluções de IA que ajudam sua empresa a automatizar processos, melhorar a eficiência e obter insights valiosos.`,
        additionalInfo: `Nossa equipe trabalha com machine learning, processamento de linguagem natural e outras tecnologias de IA para desenvolver soluções personalizadas.`,
        serviceOutcome: [
            'Automação de Processos',
            'Análise Preditiva',
            'Assistentes Virtuais',
            'Personalização',
            'Inovação Tecnológica',
        ],
        galleryImages: [galleryImage1, galleryImage2, galleryImage3],
        videoId: null,
    },
    {
        Id: '13',
        sImg: icon8,
        title: 'Machine Learning',
        slug: 'machine-learning',
        description: 'Desenvolvimento de modelos de aprendizado de máquina para previsão e análise de dados.',
        longDescription: `Utilizamos técnicas de machine learning para criar modelos que aprendem com os dados e fornecem previsões precisas. Isso permite que sua empresa tome decisões informadas e se adapte rapidamente às mudanças.`,
        additionalInfo: `Desenvolvemos soluções em diversos setores, como finanças, saúde, varejo e mais, sempre alinhadas às necessidades do seu negócio.`,
        serviceOutcome: [
            'Modelos Preditivos',
            'Análise de Dados',
            'Detecção de Padrões',
            'Otimização de Processos',
            'Tomada de Decisão Informada',
        ],
        galleryImages: [galleryImage1, galleryImage2, galleryImage3],
        videoId: null,
    },
    {
        Id: '14',
        sImg: icon9,
        title: 'Cibersegurança',
        slug: 'ciberseguranca',
        description: 'Proteção avançada contra ameaças digitais para garantir a segurança dos seus dados.',
        longDescription: `Em um mundo cada vez mais digital, a segurança cibernética é essencial. Oferecemos soluções abrangentes para proteger sua empresa contra ameaças e vulnerabilidades.`,
        additionalInfo: `Nossos serviços incluem avaliação de riscos, implementação de medidas de segurança, monitoramento contínuo e resposta a incidentes.`,
        serviceOutcome: [
            'Proteção de Dados',
            'Conformidade Regulatória',
            'Detecção de Ameaças',
            'Resposta a Incidentes',
            'Segurança de Rede',
        ],
        galleryImages: [galleryImage1, galleryImage2, galleryImage3],
        videoId: null,
    },
    {
        Id: '15',
        sImg: icon10,
        title: 'Internet das Coisas (IoT)',
        slug: 'internet-das-coisas',
        description: 'Soluções IoT para conectar dispositivos e otimizar operações.',
        longDescription: `A Internet das Coisas permite que dispositivos se comuniquem e compartilhem dados. Desenvolvemos soluções IoT que melhoram a eficiência operacional e criam novas oportunidades de negócios.`,
        additionalInfo: `Desde a integração de sensores até a análise de dados coletados, fornecemos uma solução completa para suas necessidades de IoT.`,
        serviceOutcome: [
            'Conectividade de Dispositivos',
            'Automação',
            'Monitoramento em Tempo Real',
            'Análise de Dados',
            'Inovação em Produtos e Serviços',
        ],
        galleryImages: [galleryImage1, galleryImage2, galleryImage3],
        videoId: null,
    },
    {
        Id: '16',
        sImg: icon11,
        title: 'Big Data',
        slug: 'big-data',
        description: 'Gerenciamento e análise de grandes volumes de dados para insights estratégicos.',
        longDescription: `Gerenciamos e analisamos grandes volumes de dados para extrair insights que impulsionam a estratégia do seu negócio. Nossas soluções de Big Data ajudam a lidar com dados estruturados e não estruturados de maneira eficiente.`,
        additionalInfo: `Utilizamos tecnologias avançadas para armazenamento, processamento e análise, permitindo que sua empresa tome decisões baseadas em dados.`,
        serviceOutcome: [
            'Processamento de Grandes Volumes',
            'Análise em Tempo Real',
            'Visualização de Dados',
            'Integração de Dados Diversos',
            'Insights Estratégicos',
        ],
        galleryImages: [galleryImage1, galleryImage2, galleryImage3],
        videoId: null,
    },
    {
        Id: '17',
        sImg: icon12,
        title: 'Desenvolvimento de Aplicativos Móveis',
        slug: 'desenvolvimento-de-aplicativos-moveis',
        description: 'Criação de aplicativos móveis personalizados para Android e iOS.',
        longDescription: `Desenvolvemos aplicativos móveis que proporcionam experiências excepcionais aos usuários. Seja para Android, iOS ou multiplataforma, criamos soluções que atendem às necessidades do seu negócio.`,
        additionalInfo: `Nossa equipe cuida de todo o processo, desde o design até o lançamento, garantindo um produto final de alta qualidade.`,
        serviceOutcome: [
            'Aplicativos Nativos',
            'Desenvolvimento Multiplataforma',
            'Experiência do Usuário',
            'Integração com Serviços',
            'Manutenção e Suporte',
        ],
        galleryImages: [galleryImage1, galleryImage2, galleryImage3],
        videoId: null,
    },
];

export default Services;