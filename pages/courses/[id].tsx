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
  CoursesContentWrap,
  CoursesContentParticipants,
  CoursesParticipantsWrap,
  CoursesParticipantsItem,
  CoursesParticipantsInner,
  CoursesContentSchedule,
  CoursesContentJoin
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
      <CoursesContentParticipants>
        <h2>Participants</h2>
        <CoursesParticipantsWrap>
          <CoursesParticipantsItem>
            <CoursesParticipantsInner>
              <h3>Karl Fredrickson</h3>
            </CoursesParticipantsInner>
          </CoursesParticipantsItem>
          <CoursesParticipantsItem>
            <CoursesParticipantsInner>
              <h3>Karl Fredrickson</h3>
            </CoursesParticipantsInner>
          </CoursesParticipantsItem>
          <CoursesParticipantsItem>
            <CoursesParticipantsInner>
              <h3>Karl Fredrickson</h3>
            </CoursesParticipantsInner>
          </CoursesParticipantsItem>
          <CoursesParticipantsItem>
            <CoursesParticipantsInner>
              <h3>Karl Fredrickson</h3>
            </CoursesParticipantsInner>
          </CoursesParticipantsItem>
          <CoursesParticipantsItem>
            <CoursesParticipantsInner>
              <h3>Karl Fredrickson</h3>
            </CoursesParticipantsInner>
          </CoursesParticipantsItem>
          <CoursesParticipantsItem>
            <CoursesParticipantsInner>
              <h3>Karl Fredrickson</h3>
            </CoursesParticipantsInner>
          </CoursesParticipantsItem>
          <CoursesParticipantsItem>
            <CoursesParticipantsInner>
              <h3>Karl Fredrickson</h3>
            </CoursesParticipantsInner>
          </CoursesParticipantsItem>
        </CoursesParticipantsWrap>
      </CoursesContentParticipants>
      <CoursesContentSchedule>
        <h2>Schedule</h2>
        <table>
          <thead>
            <tr>
              <th>Sunday</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9am</td>
              <td>5pm</td>
              <td>8pm</td>
              <td>9am</td>
              <td>5pm</td>
              <td>8pm</td>
              <td>9am</td>
            </tr>
            <tr>
              <td>9am</td>
              <td>5pm</td>
              <td>8pm</td>
              <td>9am</td>
              <td>5pm</td>
              <td>8pm</td>
              <td>9am</td>
            </tr>
          </tbody>
        </table>
      </CoursesContentSchedule>
      <CoursesContentJoin>
        <AnimatedButton 
          initialColor='#1916A4'
          hoverColor='#000000'
          textColor='white'
          text='Join now'
          textHover='#fff'
          textSize="20px"
          width="200px"
          height="60px"
        />
        <p>You can join to this conference, when it starts</p>
      </CoursesContentJoin>
      <CourseFooter />
    </Fragment>
  )
}