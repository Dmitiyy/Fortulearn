import Image from "next/image";
import { GetServerSideProps } from "next";
import Slider from "react-slick";
import { parseCookies } from "../courses";
import getUser from "../../utils/getUser";
import CourseNav from "../../components/Courses/CourseNav";
import CourseFooter from "../../components/Courses/CourseFooter";
import Arrow from '../../images/courses_arrow.png';
import { 
  TeacherAvailable,
  TeacherAvailableSlider,
  TeacherBlock, 
  TeacherHeader, 
  TeacherHeaderPhoto, 
  TeacherHeaderText, 
  TeacherSliderWrap
} from "../../styles/Teacher/Teacher.module";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import axios from "axios";
import { TUser } from "../../redux/reducers/user";
import { CourseItem } from "../../components/Courses/Categories";

const testData = [
  {
    ['_id']: '1',
    name: 'Test name just here'
  },
  {
    ['_id']: '2',
    name: 'Test name just here'
  },
  {
    ['_id']: '3',
    name: 'Test name just here'
  },
  {
    ['_id']: '4',
    name: 'Test name just here'
  },
  {
    ['_id']: '5',
    name: 'Test name just here'
  },
  {
    ['_id']: '6',
    name: 'Test name just here'
  },
  {
    ['_id']: '7',
    name: 'Test name just here'
  },
  {
    ['_id']: '8',
    name: 'Test name just here'
  },
  {
    ['_id']: '9',
    name: 'Test name just here'
  },
]

interface ITeacherProps { 
  user: TUser;
  teacher: TUser;
}

export default function Teacher({user, teacher}: ITeacherProps) {
  return (
    <>
      <CourseNav user={user} />
      <TeacherBlock>
        <TeacherHeader>
          <TeacherHeaderText>
            <span>Teacher</span>
            <h2>{teacher.name}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
          </TeacherHeaderText>
          <TeacherHeaderPhoto />
        </TeacherHeader>
        <TeacherAvailable>
          <h2>Available courses</h2>
          <TeacherSlider />
          <TeacherSlider />
          <TeacherSlider />
        </TeacherAvailable>
      </TeacherBlock>
      <CourseFooter />
    </>
  )
}

const TeacherSlider = () => {
  const slider = useRef<Slider>(null);

  const sliderGoNext = (): void => {slider.current?.slickNext()};
  const sliderGoPrev = (): void => {slider.current?.slickPrev()};  

  return (
    <TeacherAvailableSlider>
      <h3>Design</h3>
      <TeacherSliderWrap>
        {
          testData.length <= 3 ? (
            <div className='teacher-single-courses'>
              {
                testData.map(item => {
                  return (
                    <CourseItem data={item} key={item._id} />
                  )
                })
              }
            </div>
          ) : (
            <>
              <div className='teacher-left teacher-arrow' onClick={() => sliderGoPrev()}>
                <Image src={Arrow} alt='arrow' />
              </div>
              <Slider slidesToShow={3} arrows={false} className='teacher-slider' ref={slider} speed={300}>
                {
                  testData.map(item => {
                    return (
                      <CourseItem data={item} key={item._id} />
                    )
                  })
                }
              </Slider>
              <div className='teacher-arrow' onClick={() => sliderGoNext()}>
                <Image src={Arrow} alt='arrow' />
              </div>
            </>
          ) 
        }
      </TeacherSliderWrap>
    </TeacherAvailableSlider>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = parseCookies(context.req);
  const user = await getUser(cookies.token);

  const teacher =  await axios({
    method: 'POST',
    url: 'http://localhost:3000/api/getCertainAuthor',
    headers: {
      'Content-Type': 'application/json'
    },       
    data: JSON.stringify({id: context.query.id}),
  });

  return {
    props: {user, teacher: teacher.data.data[0]}
  }
}