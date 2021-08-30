import Image from 'next/image';
import { 
  gradient,
  NavBlock, 
  NavBtnLogIn, 
  NavBurgerMenu, 
  NavBurgerMenuList, 
  NavBurgerMenuListWrap, 
  NavContainer, 
  NavWrapBtns, 
  NavWrapText 
} from '../../styles/HomeStyledModules/HomeNav.module';
import { AnimatedButton } from '../AnimatedButton';
import { useState } from 'react';
import Link from 'next/link';

interface INavProps {
  logo: StaticImageData
  background: Boolean
}

export const Nav = ({logo, background}: INavProps) => {
  const [openMenu, setOpenMenu] = useState<Boolean>(false);

  const openBurgerMenu = () => setOpenMenu(!openMenu);

  return (
    <>
      <NavBlock style={{background: background ? gradient : 'transparent'}}>
        <NavContainer>
          <Link href='/' passHref>
            <a>
              <Image src={logo} alt='logo' className="nav-logo" />
            </a>
          </Link>
          <NavWrapText style={{color: background ? '#fff' : '#000'}}>
            <li>Rules</li>
            <Link href='/courses' passHref>
              <li>Courses</li>
            </Link>
            <li>Authors</li>
          </NavWrapText>
          <NavWrapBtns>
            <Link href='/login'>
              <a>
                <NavBtnLogIn style={{color: background ? '#fff' : '#000'}}>Log in</NavBtnLogIn>
              </a>
            </Link>
            <Link href='/signup' passHref>
              <a>
                <AnimatedButton
                  initialColor='#6EC1F6'
                  hoverColor='#fff'
                  textColor='#000'
                  text='Sign up'
                  textHover='#000'
                  textSize="22px"
                  width="130px"
                  height="45px"
                />            
              </a>
            </Link>
          </NavWrapBtns>
          <NavBurgerMenu onClick={openBurgerMenu}><div /><div /><div /></NavBurgerMenu>
        </NavContainer>
      </NavBlock>
      <NavBurgerMenuList style={{display: openMenu ? 'flex'  : 'none'}}>
        <li>
          <p>Rules</p>
          <p>Courses</p>
          <p>Authors</p>
        </li>
        <NavBurgerMenuListWrap>
          <NavBtnLogIn>Log in</NavBtnLogIn>
          <AnimatedButton
            initialColor='#6EC1F6'
            hoverColor='#fff'
            textColor='#000'
            text='Sign up'
            textHover='#000'
            textSize="20px"
            width="120px"
            height="45px"
          />  
        </NavBurgerMenuListWrap>
      </NavBurgerMenuList>
    </>
  )
}