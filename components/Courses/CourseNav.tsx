import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../images/logoNav.png';
import Arrow from '../../images/courses_arrow_down.png';
import { 
  CoursesNavBlock, 
  CoursesNavWrap,
  CoursesNavSettings 
} from '../../styles/CoursesStyledModules/CoursesNav.module';
import { useState } from 'react';

export default function CourseNav({user}: any) {
  const [openSettings, setOpenSettings] = useState<Boolean>(false);

  const triggerSettings = (): void => {
    if (user) {
      setOpenSettings(!openSettings)
    } else {
      setOpenSettings(false);
    }
  };

  return (
    <CoursesNavBlock>
      <Link href='/' passHref>
        <a><Image src={Logo} alt='logo' /></a>
      </Link>
      <CoursesNavWrap onClick={triggerSettings}>
        {
          user ? (
            <>
              {user.name}
              <Image src={Arrow} alt='arrow' />
            </>
          ) : (
            <Link href='/login' passHref>
              <p>Please log in</p>
            </Link>
          )
        }
      </CoursesNavWrap>
      <CoursesNavSettings style={{display: openSettings ? 'block' : 'none'}}>
        <p>Settings</p>
        <p>Gifts</p>
      </CoursesNavSettings>
    </CoursesNavBlock>
  )
}