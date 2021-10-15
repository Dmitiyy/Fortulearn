import { faFrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CourseNav from "../components/Courses/CourseNav";
import { 
  PersonalBlock, 
  PersonalBlockEmpty, 
  PersonalFeatures, 
  PersonalGrid, 
  PersonalGridItem 
} from "../styles/Personal/Personal.module";
import CoursePhoto from '../images/courses_content.png';
import CourseFooter from "../components/Courses/CourseFooter";
import { GetServerSideProps } from "next";
import { parseCookies } from "./courses";
import getUser from "../utils/getUser";
import { useEffect } from "react";
import Router from "next/router";

interface IPersonal {
  user: any
}

export default function PersonalArea({user}: IPersonal) {
  useEffect(() => {
    console.log(user);
    
    if (!user) {
      Router.push('/login');
    }
  }, [user]);

  return (
    <>
      <CourseNav user={user} />
      <PersonalBlock>
        {
          user.type === 'Student' ? (
            <>
              <h2>Selected courses</h2> 
                {
                  user.selectedCourses.length !== 0 ?
                  user.selectedCourses.map((item: any, i: any) => {
                    return (
                      <PersonalGrid key={item._id || i}>
                        <PersonalGridItem photo={CoursePhoto}>
                          <div />
                          <p>{item.name}</p>
                        </PersonalGridItem>
                      </PersonalGrid>
                    )
                  }) : (
                    <PersonalBlockEmpty>
                      <p>
                        You don&apos;t have any selected courses
                      </p>
                      <FontAwesomeIcon  icon={faFrown} size='2x' />
                    </PersonalBlockEmpty>
                  )
                }
              <p>You have {user.selectedCourses.length} conferences. You can buy more <span>here</span></p>
            </>
          ) : user.type === 'Teacher' ? (
            <p>You are teacher</p>
          ) : (
            <p>Error</p>
          )
        }
        <PersonalFeatures>
          <div>
            <h2>Progress</h2>
            <div />
          </div>
          <div>
            <h2>Accomplishments</h2>
            <div />
          </div>
        </PersonalFeatures>
      </PersonalBlock>
      <CourseFooter />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = parseCookies(context.req);
  const user = await getUser(cookies.token);
  return {
    props: {user}
  }
}