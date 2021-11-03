import Image from 'next/image';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useCookies } from 'react-cookie';
import Router from 'next/router'
import { useDispatch } from 'react-redux';
import { 
  SignUpBtnPerson, 
  SignUpContainer, 
  SignUpForm, 
  SignUpWrapBtns, 
  SignUpWrapForm,
  SignUpErrorModule
} from '../styles/SignUpStyledModules/SignUp.module';
import StudentWhite from '../images/icon_student_white.png';
import StudentBlack from '../images/icon_student_black.png';
import TeacherWhite from '../images/icon_teacher_white.png';
import TeacherBlack from '../images/icon_teacher_black.png';
import { useEffect, useState } from 'react';
import { signUpAction } from '../redux/actions/user';
import { AppDispatch, useAppSelector } from '../redux/store';

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

export interface ISendData {
  name: string;
  email: string;
  password: string;
  type: string;
}

export default function SignUp() {
  const dispatch = useDispatch<AppDispatch>();
  const dataPerson: Array<string> = ['student', 'teacher'];
  const dataBtns: Array<IBtnValue> = [
    {defaultPhoto: StudentBlack, value: 'Student', activePhoto: StudentWhite},
    {defaultPhoto: TeacherBlack, value: 'Teacher', activePhoto: TeacherWhite}
  ];
  const [activePerson, setActivePerson] = useState<number>(0); 
  const [activeType, setActiveType] = useState<string>('Student');

  const error = useAppSelector(state => state.user.signupError);
  const loading: any = useAppSelector(state => state.user.signupLoading);
  const token = useAppSelector(state => state.user.token);

  const [cookie, setCookie] = useCookies(['token']);

  useEffect(() => {
    if (token.length !== 0) {
      setCookie('token', JSON.stringify(token), {
        path: "/",
        maxAge: (3600 * 24) * 7,
        sameSite: true,
      });
    }
    if (cookie.token) {Router.push('/')};
  }, [token, setCookie, cookie]);

  const trigger = (selectedValue: string): void => {
    setActiveType(selectedValue);
    selectedValue = selectedValue.toLowerCase();
    setActivePerson(dataPerson.indexOf(selectedValue));
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Enter your name'),
    email: Yup.string().email().required('Enter your email'),
    password: Yup.string().min(8, 'Must be greater than 8').required('Enter your password')
  });

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
          <SignUpErrorModule style={{display: error ? 'flex' : 'none'}}>
            <p>Error, try again</p>
          </SignUpErrorModule>
          <SignUpForm>
          <Formik
            initialValues={{name: '', email: '', password: ''}}
            validationSchema={validationSchema}
            onSubmit={(
              values: IFormikValues
            ) => {
              const data: ISendData = {...values, type: activeType}; 
              dispatch(signUpAction(data));
            }}
          >
            {({errors}) => (
              <Form>
                <Field type='text' name='name' id='name' placeholder='Name' />
                <p>{errors.name}</p>
                <Field type='email' name='email' id='email' placeholder='Email' />
                <p>{errors.email}</p>
                <Field type='password' name='password' id='password' 
                placeholder='Password' />
                <p>{errors.password}</p>
                <button type='submit' disabled={loading}>
                  {loading ? 'Loading...' : 'Submit'}
                </button>
              </Form>
            )}
          </Formik>
          </SignUpForm>
        </SignUpWrapForm>
      </SignUpContainer>
    </div>
  )
}