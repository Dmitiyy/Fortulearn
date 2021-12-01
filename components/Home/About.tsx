import Image from 'next/image';
import Photo from '../../images/about_image.png';

export const About = () => {
  return (
    <div className='about' id='about'>
      <h1>About</h1>
      <p>Why do you need to use this learning platform?</p>
      <div className='about__container'>
        <p>
          Our mission is provide opportunity for people, who want to find their inspiration, try something new in life and do this without any problem. Fortulearn includes personal cabinet with selected courses, platform where you can do learning in the real time with video conference, personal chat with speaker, in order you can ask some questions and much more. You will have a good impressions!
        </p>
        <Image src={Photo} alt='about_photo' />
      </div>
    </div>
  )
}