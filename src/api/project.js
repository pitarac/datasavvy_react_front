import pImg1 from '../images/portfolio/portfolio_item_image_1.webp'
import pImg2 from '../images/portfolio/portfolio_item_image_2.webp'
import pImg3 from '../images/portfolio/portfolio_item_image_3.webp'
import pImg4 from '../images/case/case_image_1.webp'
import pImg5 from '../images/case/case_image_2.webp'
import pImg6 from '../images/case/case_image_3.webp'

import pImg7 from '../images/portfolio/portfolio_item_image_4.webp'
import pImg8 from '../images/portfolio/portfolio_item_image_5.webp'
import pImg9 from '../images/portfolio/portfolio_item_image_6.webp'
import pImg10 from '../images/portfolio/portfolio_item_image_7.webp'
import pImg11 from '../images/portfolio/portfolio_item_image_8.webp'
import pImg12 from '../images/portfolio/portfolio_item_image_9.webp'
import pImg13 from '../images/portfolio/portfolio_item_image_10.webp'
import pImg14 from '../images/portfolio/portfolio_item_image_11.webp'


import tImg1 from '../images/case/icon_angular.svg'
import tImg2 from '../images/case/icon_elephent.svg'
import tImg3 from '../images/case/icon_netcore.svg'
import tImg4 from '../images/case/vuejs.svg'
import tImg5 from '../images/case/icon_python.svg'


const Project = [
    {
        Id: '1',
        pImg: pImg1,
        title: 'Análise de Vendas para Empresa X',
        slug: 'analise-de-vendas-empresa-x',
        sub: 'Análise de Dados',
        description: 'Realizamos uma análise aprofundada dos dados de vendas da Empresa X, identificando oportunidades de crescimento e otimização de processos.',
    },
    {
        Id: '2',
        pImg: pImg2,
        title: 'Implementação da LGPD na Empresa Y',
        slug: 'implementacao-lgpd-empresa-y',
        sub: 'LGPD',
        description: 'Auxiliamos a Empresa Y a se adequar à Lei Geral de Proteção de Dados, garantindo conformidade e segurança das informações.',
    },
    {
        Id: '3',
        pImg: pImg3,
        title: 'Campanha de Growth Hacking para Startup Z',
        slug: 'campanha-growth-hacking-startup-z',
        sub: 'Growth Hacking',
        description: 'Desenvolvemos estratégias inovadoras para acelerar o crescimento da Startup Z no mercado digital.',
    },
    {
        Id: '4',
        pImg: pImg4,
        title: 'Desenvolvimento de Sistema para Indústria W',
        slug: 'desenvolvimento-sistema-industria-w',
        sub: 'Fábrica de Software',
        description: 'Criamos um sistema personalizado para a Indústria W, otimizando seus processos internos e aumentando a eficiência operacional.',
    },
    {
        Id: '5',
        pImg: pImg5,
        title: 'Pesquisa de Mercado para Produto V',
        slug: 'pesquisa-mercado-produto-v',
        sub: 'Pesquisa de Mercado',
        description: 'Conduzimos uma pesquisa de mercado detalhada para o lançamento do Produto V, identificando tendências e preferências dos consumidores.',
    },
    {
        Id: '6',
        pImg: pImg6,
        title: 'Implementação de BI na Empresa U',
        slug: 'implementacao-bi-empresa-u',
        sub: 'Business Intelligence',
        description: 'Implementamos soluções de BI na Empresa U, proporcionando insights estratégicos através de dashboards interativos.',
    },
    {
        Id: '7',
        pImg: pImg7,
        title: 'Desenvolvimento de Aplicativo Móvel para Serviço T',
        slug: 'desenvolvimento-app-movel-servico-t',
        sub: 'Desenvolvimento',
        Industry: 'Tecnologia',
        Country: 'Brasil',
        Technologies1: tImg1,
        Technologies2: tImg2,
        description: 'Criamos um aplicativo móvel inovador para o Serviço T, melhorando a experiência dos usuários e ampliando o alcance no mercado.',
    },
    {
        Id: '8',
        pImg: pImg8,
        title: 'Redesign de Interface para Plataforma S',
        slug: 'redesign-interface-plataforma-s',
        sub: 'UI/UX Design',
        Industry: 'Educação',
        Country: 'Brasil',
        Technologies1: tImg3,
        Technologies2: tImg4,
        description: 'Realizamos o redesign completo da interface da Plataforma S, focando na melhoria da usabilidade e satisfação dos usuários.',
    },
    {
        Id: '9',
        pImg: pImg9,
        title: 'Testes de Qualidade para Sistema R',
        slug: 'testes-qualidade-sistema-r',
        sub: 'QA',
        Industry: 'Finanças',
        Country: 'Brasil',
        Technologies1: tImg5,
        Technologies2: tImg1, // Reutilizado tImg1
        description: 'Executamos testes rigorosos de qualidade no Sistema R, assegurando sua confiabilidade e desempenho.',
    },
    {
        Id: '10',
        pImg: pImg10,
        title: 'Análise de Big Data para Empresa Q',
        slug: 'analise-big-data-empresa-q',
        thumb1: 'Big Data',
        thumb2: 'Análise Avançada',
        category: 'tecnologia',
    },
    {
        Id: '11',
        pImg: pImg11,
        title: 'Implementação de Machine Learning na Empresa P',
        slug: 'implementacao-machine-learning-empresa-p',
        thumb1: 'IA',
        thumb2: 'Automação',
        category: 'tecnologia',
    },
    {
        Id: '12',
        pImg: pImg12,
        title: 'Projeto de Cibersegurança para Empresa O',
        slug: 'projeto-ciberseguranca-empresa-o',
        thumb1: 'Segurança',
        thumb2: 'Proteção de Dados',
        category: 'seguranca',
    },
    {
        Id: '13',
        pImg: pImg13,
        title: 'Solução de IoT para Indústria N',
        slug: 'solucao-iot-industria-n',
        thumb1: 'IoT',
        thumb2: 'Automação Industrial',
        category: 'industria',
    },
    {
        Id: '14',
        pImg: pImg14,
        title: 'Migração para Computação em Nuvem da Empresa M',
        slug: 'migracao-computacao-nuvem-empresa-m',
        thumb1: 'Cloud Computing',
        thumb2: 'Escalabilidade',
        category: 'tecnologia',
    },
    {
        Id: '15',
        pImg: pImg1, // Reutilizado pImg1
        title: 'Estratégia de Marketing Digital para Empresa L',
        slug: 'estrategia-marketing-digital-empresa-l',
        thumb1: 'Marketing',
        thumb2: 'Crescimento',
        category: 'marketing',
    },
    {
        Id: '16',
        pImg: pImg2, // Reutilizado pImg2
        title: 'Otimização de Processos para Empresa K',
        slug: 'otimizacao-processos-empresa-k',
        thumb1: 'Consultoria',
        thumb2: 'Eficiência',
        category: 'negocios',
    },
    {
        Id: '17',
        pImg: pImg3, // Reutilizado pImg3
        title: 'Treinamento em LGPD para Empresa J',
        slug: 'treinamento-lgpd-empresa-j',
        thumb1: 'Compliance',
        thumb2: 'Treinamento',
        category: 'lgpd',
    },
]


export default Project;