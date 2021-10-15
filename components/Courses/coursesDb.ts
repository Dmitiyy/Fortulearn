import Business from '../../images/categoires_b_courses.png';
import Development from '../../images/categoires_d_courses.png';
import Finance from '../../images/categoires_f_courses.png';
import Music from '../../images/categoires_m_courses.png';

interface IData {
  title: string;
  photo: StaticImageData;
  id: string;
  value: string
}

export const categoriesData: Array<IData> = [
  {
    title: 'Business',
    photo: Business,
    id: 'id' + Math.random().toString(16).slice(2),
    value: 'business'
  },
  {
    title: 'Development',
    photo: Development,
    id: 'id' + Math.random().toString(16).slice(2),
    value: 'development'
  },
  {
    title: 'Finance',
    photo: Finance,
    id: 'id' + Math.random().toString(16).slice(2),
    value: 'finance'
  },
  {
    title: 'Music',
    photo: Music,
    id: 'id' + Math.random().toString(16).slice(2),
    value: 'music'
  },
];