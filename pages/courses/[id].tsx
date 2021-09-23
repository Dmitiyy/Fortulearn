import { Fragment } from "react";
import Image from 'next/image';
import CourseFooter from "../../components/Courses/CourseFooter";
import CourseNav from "../../components/Courses/CourseNav";
import {
  CoursesContentBlock, 
  CoursesContentPhoto,
  CoursesContentText,
  CoursesContentWrap
} from '../../styles/CoursesStyledModules/CoursesContent.module';
import Preview from '../../images/courses_content.png';
import People from '../../images/courses_people.png';

export default function Courses() {
  return (
    <Fragment>
      <CourseNav />
      <CoursesContentBlock>
        <CoursesContentPhoto>
          <Image src={Preview} alt='preview' />
          <CoursesContentWrap>
            <div><Image src={People} alt='people'/><p>2-6</p></div>
            <div><p style={{fontWeight: 'bold', fontSize: '30px'}}>$</p><p>7</p></div>
          </CoursesContentWrap>
        </CoursesContentPhoto>
        <CoursesContentText>
          <h2>Course name here</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum
          </p>
        </CoursesContentText>
      </CoursesContentBlock>
      <CourseFooter />
    </Fragment>
  )
}