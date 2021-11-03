import { Fragment, useEffect } from "react";
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
  CoursesContentJoin,
  CoursesContentImg
} from '../../styles/CoursesStyledModules/CoursesContent.module';
import { AnimatedButton } from "../../components/AnimatedButton";
import { GetServerSideProps } from "next";
import axios from "axios";
import { checkTheNameOfItem } from "../../utils/checkName";
import { useDispatch } from "react-redux";
import { defaultAction } from "../../redux/actions/user";
import getUser from "../../utils/getUser";
import {parseCookies} from './index';
import { AppDispatch } from "../../redux/store";
import { setDataDefault } from "../../redux/reducers/user";

interface ICourse {
  author: {photo: string, name: string, status: string, email: string};
  createdAt: string;
  description: string;
  name: string;
  participants: [number, number];
  people: [];
  photo: string;
  price: number;
  schedule: ICourseSchedule;
  type: string;
  _id: string;
}

interface ICourseSchedule {
  sunday: string[];
  monday: string[];
  tuesday: string[];
  wednesday: string[];
  thursday: string[];
  friday: string[];
  saturday: string[];
}

type TProps = {
  course: ICourse;
  teacher: any;
  user: any;
}

export default function Courses({course, teacher, user}: TProps) {
  const {
    sunday,
    monday, 
    tuesday, 
    wednesday,
    thursday,
    friday, 
    saturday 
  } = course.schedule;
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setDataDefault({ini: 'author', data: teacher}));
  }, [teacher, dispatch]);

  return (
    <Fragment>
      <CourseNav user={user} />
      <CoursesContentBlock>
        <CoursesContentPhoto>
          <CoursesContentImg photo={course.photo} />
          <CoursesContentWrap>
            <div><FontAwesomeIcon icon={faUserFriends} size='2x' /><p>
              {course.participants[0]}-{course.participants[1]}
            </p></div>
            <div><FontAwesomeIcon icon={faDollarSign} size='2x' /><p>
              {course.price}
            </p></div>
          </CoursesContentWrap>
        </CoursesContentPhoto>
        <CoursesContentText>
          <h2>{course.name}</h2>
          <p>{course.description}</p>
        </CoursesContentText>
      </CoursesContentBlock>
      <CoursesContentAuthor>
        <h2>Author</h2>
        <CoursesAuthorWrap>
          <CoursesAuthorImgWrap>
            <CoursesAuthorPhoto photo={course.author.photo} />
            <div className='courses__author-photo'>
              <h2>{course.author.name}</h2><p>{course.author.status}</p>
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
          {
            course.people.map((item: any, i) => {
              return (
                <CoursesParticipantsItem photo={item.photo} key={i}>
                  <CoursesParticipantsInner>
                    <h3>{checkTheNameOfItem(item.name)}</h3>
                  </CoursesParticipantsInner>
                </CoursesParticipantsItem>
              )
            })
          }
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
            {renderTable([sunday, monday, tuesday, wednesday, thursday, friday, saturday])}
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

const renderTable = (data: any[]) => {
  let maxLength: number = 0;
  const lengthData: number[] = [];

  for(let i: number = 0; i < data.length; i++) {
    if (data[i].length > maxLength) {
      maxLength = data[i].length;
    }
  }

  for (let i: number = 0; i < maxLength; i++) {
    lengthData.push(i);
  }

  return (
    lengthData.map((item: number) => {
      return (
        <tr key={item}>
          {
            data.map((_, i) => {
              return (
                <td key={i}>{!data[i][item] ? '⚊' : data[i][item]}</td>
              )
            })
          }
        </tr>
      )
    })
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await axios({
    method: 'POST',
    url: 'http://localhost:3000/api/getCertainCourse',
    headers: {
      'Content-Type': 'application/json'
    },       
    data: JSON.stringify({id: context.query.id}),
  });

  const course = response.data.data.course[0];
  const teacher = response.data.data.teacher[0];

  const cookies = parseCookies(context.req);
  const user = await getUser(cookies.token);

  return {
    props: {course, teacher, user}
  };
}