import Image from 'next/image';
import { 
  NavBlock, 
  NavBtnLogIn, 
  NavBurgerMenu, 
  NavBurgerMenuList, 
  NavBurgerMenuListWrap, 
  NavContainer, 
  NavWrapBtns, 
  NavWrapText 
} from '../../styles/HomeStyledModules/HomeNav.module'
import Logo from '../../images/logoNav.png';
import { AnimatedButton } from '../AnimatedButton';
import { useState } from 'react';
import Link from 'next/link';

export const Nav = () => {
  const [openMenu, setOpenMenu] = useState<Boolean>(false);

  const openBurgerMenu = () => setOpenMenu(!openMenu);

  return (
    <>
      <NavBlock>
        <NavContainer>
          <Image src={Logo} alt='logo' className="nav-logo" />
          <NavWrapText>
            <li>Rules</li>
            <li>Courses</li>
            <li>Authors</li>
          </NavWrapText>
          <NavWrapBtns>
            <NavBtnLogIn>Log in</NavBtnLogIn>
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