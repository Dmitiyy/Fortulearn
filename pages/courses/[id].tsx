import { Fragment } from "react";
import { Footer, IFooter } from "../../components/Home/Footer";

export default function Courses() {
  const footerParams: IFooter = {
    about: '/#about',
    you: '/#you',
    questions: '/#questions'
  }

  return (
    <Fragment>
      <h1>Course page</h1>
      <Footer {...footerParams} />
    </Fragment>
  )
}