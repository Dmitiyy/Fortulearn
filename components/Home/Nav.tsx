import Image from 'next/image';
import { AnimatedButton } from '../AnimatedButton';
import { useState } from 'react';
import Link from 'next/link';
import { TUser } from '../../redux/reducers/user';

interface INavProps {
  logo: StaticImageData
  background: Boolean,
  user: TUser
}

export const gradient = 'linear-gradient(90.13deg, #6FC3F7 0.12%, #1813A2 99.88%)';

export const Nav = ({logo, background, user}: INavProps) => {
  const [openMenu, setOpenMenu] = useState<Boolean>(false);

  const openBurgerMenu = () => setOpenMenu(!openMenu);

  return (
    <>
      <nav className="nav" style={{background: background ? gradient : 'transparent'}}>
        <div className="nav__container">
            <Link href='/' passHref>
              <a>
                <Image src={logo} alt='logo' className="nav-logo" />
              </a>
            </Link>
            <ul className='nav__wrap-text' style={{color: background ? '#fff' : '#000'}}>
              <li>Rules</li>
              <Link href='/courses' passHref>
                <li>Courses</li>
              </Link>
              <li>Authors</li>
            </ul>
            <div className='nav__wrap-btns'>
              {
                user ? (
                  <Link href='/personal' passHref>
                    <div className='home__nav-user'><p 
                      style={{color: background ? '#fff' : '#000'}}>{user.name}</p>
                    </div>
                  </Link>
                ) : (
                  <>
                    <Link href='/login'>
                      <a>
                        <p className='nav-btn-LogIn' 
                        style={{color: background ? '#fff' : '#000'}}>Log in</p>
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
                  </>
                )
              }
            </div>
            <div className="nav__burger__menu" onClick={openBurgerMenu}>
              <div /><div /><div />
            </div>
        </div>
      </nav>
      <ul className='nav__burger__menu-list' style={{display: openMenu ? 'flex'  : 'none'}}>
        <li>
          <p>Rules</p>
          <p>Courses</p>
          <p>Authors</p>
        </li>
        <li className='nav__burger__menu-list__wrap'>
          <Link href='/login'>
            <a>
              <p className='nav-btn-LogIn' 
              style={{color: background ? '#fff' : '#000'}}>Log in</p>
            </a>
          </Link>
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
        </li>
      </ul>
    </>
  )
}