import Image from 'next/image';
import { NavBlock, NavBtnLogIn, NavContainer, NavWrapBtns, NavWrapText } from '../../styles/HomeStyledModules/HomeNav.module'
import Logo from '../../images/logoNav.png';
import { AnimatedButton } from '../AnimatedButton';

export const Nav = () => {
  return (
    <NavBlock>
      <NavContainer>
        <Image src={Logo} alt='logo' />
        <NavWrapText>
          <li>Rules</li>
          <li>Courses</li>
          <li>Authors</li>
        </NavWrapText>
        <NavWrapBtns>
          <NavBtnLogIn>Log in</NavBtnLogIn>
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
        </NavWrapBtns>
      </NavContainer>
    </NavBlock>
  )
}