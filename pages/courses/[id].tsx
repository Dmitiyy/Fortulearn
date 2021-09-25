import { Fragment } from "react";
import Image from 'next/image';
import { faDollarSign, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CourseFooter from "../../components/Courses/CourseFooter";
import CourseNav from "../../components/Courses/CourseNav";
import {
  CoursesAuthorImgWrap,
  CoursesAuthorPhoto,
  CoursesAuthorWrap,
  CoursesContentAuthor,
  CoursesContentBlock, 
  CoursesContentPhoto,
  CoursesContentText,
  CoursesContentWrap
} from '../../styles/CoursesStyledModules/CoursesContent.module';
import Preview from '../../images/courses_content.png';
import { AnimatedButton } from "../../components/AnimatedButton";

export default function Courses() {
  return (
    <Fragment>
      <CourseNav />
      <CoursesContentBlock>
        <CoursesContentPhoto>
          <Image src={Preview} alt='preview' />
          <CoursesContentWrap>
            <div><FontAwesomeIcon icon={faUserFriends} size='2x' /><p>2-6</p></div>
            <div><FontAwesomeIcon icon={faDollarSign} size='2x' /><p>7</p></div>
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
      <CoursesContentAuthor>
        <h2>Author</h2>
        <CoursesAuthorWrap>
          <CoursesAuthorImgWrap>
            <CoursesAuthorPhoto />
            <div className='courses__author-photo'>
              <h2>Philipp Wüthrich</h2><p>Web designer</p>
            </div>
          </CoursesAuthorImgWrap>
          <AnimatedButton 
            initialColor='#6FC3F7'
            hoverColor='#fff'
            textColor='black'
            text='See more'
            textHover='#000'
            textSize="20px"
            width="180px"
            height="50px"
          />
        </CoursesAuthorWrap>
      </CoursesContentAuthor>
      <CourseFooter />
    </Fragment>
  )
}