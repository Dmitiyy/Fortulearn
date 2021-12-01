import { Fragment } from "react";
import { GetServerSideProps } from "next";
import { About } from "../components/Home/About";
import { Footer, IFooter } from "../components/Home/Footer";
import { Header } from "../components/Home/Header";
import { Nav } from "../components/Home/Nav";
import { Questions } from "../components/Home/Questions";
import { You } from "../components/Home/You";

import Logo from '../images/logoNav.png';
import { parseCookies } from "./courses";
import getUser from "../utils/getUser";
import {TUser} from '../redux/reducers/user';

interface IProps {
  user: TUser
}

export default function Home({user}: IProps) {
  const footerParams: IFooter = {
    about: '#about',
    you: '#you',
    questions: '#questions'
  }

  return (
    <Fragment>
      <Nav background={true} logo={Logo} user={user} />
      <Header />
      <About />
      <You />
      <Questions />
      <Footer {...footerParams} />
    </Fragment>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = parseCookies(context.req);
  const user = await getUser(cookies.token);

  return {
    props: {user}
  }
}