import Image from "next/image";
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { 
  SignUpBtnPerson, 
  SignUpContainer, 
  SignUpForm, 
  SignUpWrapBtns, 
  SignUpWrapForm
} from "../styles/SignUpModules/SignUp.module";
import StudentWhite from '../images/icon_student_white.png';
import StudentBlack from '../images/icon_student_black.png';
import TeacherWhite from '../images/icon_teacher_white.png';
import TeacherBlack from '../images/icon_teacher_black.png';
import { useState } from "react";

interface IFormikValues {
  name: string;
  email: string;
  password: string;
}

interface IBtnValue {
  defaultPhoto: StaticImageData;
  value: string;
  activePhoto: StaticImageData
}

export default function SignUp() {
  const dataPerson: Array<string> = ['student', 'teacher'];
  const dataBtns: Array<IBtnValue> = [
    {defaultPhoto: StudentBlack, value: 'Student', activePhoto: StudentWhite},
    {defaultPhoto: TeacherBlack, value: 'Teacher', activePhoto: TeacherWhite}
  ];
  const [activePerson, setActivePerson] = useState<number>(0); 

  const trigger = (selectedValue: string): void => {
    selectedValue = selectedValue.toLowerCase();
    setActivePerson(dataPerson.indexOf(selectedValue));
  };

  return (
    <div className="signup__body">
      <SignUpContainer>
        <SignUpWrapBtns>
          {
            dataBtns.map((item, i) => {
              return (
                <SignUpBtnPerson key={Math.random() + i} 
                className={activePerson === i ? 'signup_btn-active' : ''}
                onClick={() => trigger(item.value)}>
                  <Image src={
                    activePerson === i ? item.activePhoto : item.defaultPhoto
                  } alt='signup_icon' 
                  /><p>{item.value}</p>
                </SignUpBtnPerson>
              )
            })
          }
        </SignUpWrapBtns>
        <SignUpWrapForm>
          <h2>Sign up</h2>
          <SignUpForm>
          <Formik
            initialValues={{name: '', email: '', password: ''}}
            onSubmit={(
              values: IFormikValues,
              { setSubmitting }: FormikHelpers<IFormikValues>
            ) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 500);
            }}
          >
            <Form>
              <Field type='text' name='name' id='name' placeholder='Name' />
              <Field type='email' name='email' id='email' placeholder='Email' />
              <Field type='password' name='password' id='password' placeholder='Password' />
              <button type='submit'>Submit</button>
            </Form>
          </Formik>
          </SignUpForm>
        </SignUpWrapForm>
      </SignUpContainer>
    </div>
  )
}