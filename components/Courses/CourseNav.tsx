import Logo from '../../images/logoNav.png';
import Arrow from '../../images/courses_arrow_down.png';
import { CoursesNavBlock, CoursesNavWrap } from '../../styles/CoursesStyledModules/CoursesNav.module';
import Image from 'next/image';

export default function CourseNav() {
  return (
    <CoursesNavBlock>
      <Image src={Logo} alt='logo' />
      <CoursesNavWrap>
        Your name here
        <Image src={Arrow} alt='arrow' />
      </CoursesNavWrap>
    </CoursesNavBlock>
  )
}