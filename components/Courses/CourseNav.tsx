import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../images/logoNav.png';
import Arrow from '../../images/courses_arrow_down.png';
import { CoursesNavBlock, CoursesNavWrap } from '../../styles/CoursesStyledModules/CoursesNav.module';

export default function CourseNav() {
  return (
    <CoursesNavBlock>
      <Link href='/' passHref>
        <a><Image src={Logo} alt='logo' /></a>
      </Link>
      <CoursesNavWrap>
        Your name here
        <Image src={Arrow} alt='arrow' />
      </CoursesNavWrap>
    </CoursesNavBlock>
  )
}