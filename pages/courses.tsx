import { Fragment } from "react";
import { Categories } from "../components/Courses/Categories";
import { Motivation } from "../components/Courses/Motivation";
import { Nav } from "../components/Home/Nav";
import Logo from '../images/logo_courses.png';

export default function Courses() {
  return (
    <Fragment>
      <Nav background={false} logo={Logo} />
      <Motivation />
      <Categories />
    </Fragment>
  )
}