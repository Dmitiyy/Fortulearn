import Image from 'next/image'; 
import { AnimatedButton } from "../AnimatedButton"
import PhotoF from '../../images/header_1.png';
import PhotoS from '../../images/header_2.png';
import PhotoT from '../../images/header_3.png';
import PhotoFo from '../../images/header_4.png';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className='header__wrap-text'>
          <h1>
            <span style={{color: 'white'}}>Learning</span> is the best time in our life
          </h1>
          <p>If you want to improve your skills, you can receive right information here without limits and problems online, it is awesome</p>
          <div className='header__wrap-btns'>
            <AnimatedButton 
              initialColor='#1916A4'
              hoverColor='#fff'
              textColor='white'
              text='See more'
              textHover='#1916A4'
              textSize="22px"
              width="270px"
              height="55px"
            />
            <Link href='/signup' passHref>
              <a>
                <button className='header__signUp-btn'>Sign up</button>
              </a>
            </Link>
          </div>
        </div>
        <div className='header__wrap-images'>
          <div className="header__photo-column">
            <div className='header__photo-item'><Image src={PhotoF} alt='header_photo'/></div>
            <div className='header__photo-item'><Image src={PhotoS} alt='header_photo'/></div>
          </div>
          <div className="header__photo-column" style={{marginTop: '80px'}}>
            <div className='header__photo-item'><Image src={PhotoT} alt='header_photo'/></div>
            <div className='header__photo-item'><Image src={PhotoFo} alt='header_photo'/></div>
          </div>
        </div>
      </div>
    </header>
  )
}