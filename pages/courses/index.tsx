import { Fragment } from "react";
import { Categories } from "../../components/Courses/Categories";
import { Motivation } from "../../components/Courses/Motivation";
import { Footer, IFooter } from "../../components/Home/Footer";
import { Nav } from "../../components/Home/Nav";
import Logo from '../../images/logo_courses.png';

export default function Courses() {
  const footerParams: IFooter = {
    about: '/#about',
    you: '/#you',
    questions: '/#questions'
  }

  return (
    <Fragment>
      <Nav background={false} logo={Logo} />
      <Motivation />
      <Categories />
      <Footer {...footerParams} />
    </Fragment>
  )
}