import { Fragment } from "react";
import { GetServerSideProps, NextApiRequest } from 'next';
import { Categories } from "../../components/Courses/Categories";
import { Motivation } from "../../components/Courses/Motivation";
import { Footer, IFooter } from "../../components/Home/Footer";
import { Nav } from "../../components/Home/Nav";
import Logo from '../../images/logo_courses.png';
import getUser from "../../utils/getUser";
import cookie from 'cookie';

export default function Courses({user}: any) {
  const footerParams: IFooter = {
    about: '/#about',
    you: '/#you',
    questions: '/#questions'
  }

  return (
    <Fragment>
      <Nav background={false} logo={Logo} user={user} />
      <Motivation />
      <Categories />
      <Footer {...footerParams} />
    </Fragment>
  )
}

export function parseCookies(req: any){
  return cookie.parse(req ? req.headers.cookie || '' : document.cookie);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = parseCookies(context.req);
  const user = await getUser(cookies.token);
  return {
    props: {user}
  };
}