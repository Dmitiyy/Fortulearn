import Image from 'next/image'; 
import { HeaderBlock, HeaderContainer, HeaderPhotoColumn, HeaderPhotoItem, HeaderSignUpBtn, HeaderWrapBtns, HeaderWrapImages, HeaderWrapText } from "../../styles/HomeStyledModules/HomeHeader.module"
import { AnimatedButton } from "../AnimatedButton"
import PhotoF from '../../images/header_1.png';
import PhotoS from '../../images/header_2.png';
import PhotoT from '../../images/header_3.png';
import PhotoFo from '../../images/header_4.png';
import Link from 'next/link';

export const Header = () => {
  return (
    <HeaderBlock>
      <HeaderContainer>
        <HeaderWrapText>
          <h1>
            <span style={{color: 'white'}}>Learning</span> is the best time in our life
          </h1>
          <p>If you want to improve your skills, you can receive right information here without limits and problems online, it is awesome</p>
          <HeaderWrapBtns>
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
                <HeaderSignUpBtn>Sign up</HeaderSignUpBtn>
              </a>
            </Link>
          </HeaderWrapBtns>
        </HeaderWrapText>
        <HeaderWrapImages>
          <HeaderPhotoColumn>
            <HeaderPhotoItem><Image src={PhotoF} alt='header_photo'/></HeaderPhotoItem>
            <HeaderPhotoItem><Image src={PhotoS} alt='header_photo'/></HeaderPhotoItem>
          </HeaderPhotoColumn>
          <HeaderPhotoColumn style={{marginTop: '80px'}}>
            <HeaderPhotoItem><Image src={PhotoT} alt='header_photo'/></HeaderPhotoItem>
            <HeaderPhotoItem><Image src={PhotoFo} alt='header_photo'/></HeaderPhotoItem>
          </HeaderPhotoColumn>
        </HeaderWrapImages>
      </HeaderContainer>
    </HeaderBlock>
  )
}