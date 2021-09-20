import { Fragment } from "react";
import { About } from "../components/Home/About";
import { Footer, IFooter } from "../components/Home/Footer";
import { Header } from "../components/Home/Header";
import { Nav } from "../components/Home/Nav";
import { Questions } from "../components/Home/Questions";
import { You } from "../components/Home/You";

import Logo from '../images/logoNav.png';

export default function Home() {
  const footerParams: IFooter = {
    about: '#about',
    you: '#you',
    questions: '#questions'
  }

  return (
    <Fragment>
      <Nav background={true} logo={Logo} />
      <Header />
      <About />
      <You />
      <Questions />
      <Footer {...footerParams} />
    </Fragment>
  )
}