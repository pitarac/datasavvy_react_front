import timg1 from '../images/team/team_member_image_1.webp';
import timg2 from '../images/team/team_member_image_2.webp';
import timg3 from '../images/team/team_member_image_3.webp';
import timg4 from '../images/team/team_member_image_4.webp';
import timg5 from '../images/team/team_member_image_5.webp';

// Array de membros da equipe
const Teams = [
   {
      Id: '1',
      tImg: timg1,
      name: 'Lucas Silva',
      slug: 'lucas-silva',
      title: 'Engenheiro de Sistemas',
   },
   {
      Id: '2',
      tImg: timg2,
      name: 'Mariana Oliveira',
      slug: 'mariana-oliveira',
      title: 'Consultora de TI',
   },
   {
      Id: '3',
      tImg: timg3,
      name: 'Pedro Santos',
      slug: 'pedro-santos',
      title: 'Engenheiro de Sistemas',
   },
   {
      Id: '4',
      tImg: timg4,
      name: 'Ana Beatriz',
      slug: 'ana-beatriz',
      title: 'Analista de Dados',
   },
   {
      Id: '5',
      tImg: timg5,
      name: 'Juliana Costa',
      slug: 'juliana-costa',
      title: 'Gerente de Projetos',
   },
   {
      Id: '6',
      tImg: timg4, // Reutilizando a imagem timg4 conforme a configuração original
      name: 'Carlos Eduardo',
      slug: 'carlos-eduardo',
      title: 'Desenvolvedor Front-End',
   },
];

export default Teams;
