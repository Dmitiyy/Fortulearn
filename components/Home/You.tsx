import Image from "next/image";
import First from '../../images/you_photo1.png';
import Second from '../../images/you_photo2.png';
import { AnimatedButton } from "../AnimatedButton";

export const You = () => {
  return (
    <div className="you" id='you'>
      <h1>Who are you?</h1>
      <p>You can choose the category you want</p>
      <div className='you__container'>
        <div className="you-card" style={{background: '#6FC3F7', color: '#000'}}>
          <Image src={First} alt='you_photo' />
          <div className='you__card__container'>
            <h2>Speaker</h2>
            <p>
              If you want to make money or be a teacher, this category is for you
            </p>
            <AnimatedButton 
              initialColor='#fff'
              hoverColor='#436ACC'
              textColor='#000'
              text='Join'
              textHover='#fff'
              textSize="20px"
              width="150px"
              height="45px"
            />
          </div>
        </div>
        <div className="you-card" style={{background: '#1B1AA6', color: '#fff'}}>
          <Image src={Second} alt='you_photo' />
          <div className='you__card__container'>
            <h2>Student</h2>
            <p>
              If you want to learn something new, this category is for you
            </p>
            <AnimatedButton 
              initialColor='#fff'
              hoverColor='#436ACC'
              textColor='#000'
              text='Join'
              textHover='#fff'
              textSize="20px"
              width="150px"
              height="45px"
            />
          </div>
        </div>
      </div>
    </div>
  )
}