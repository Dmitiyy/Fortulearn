import { Formik, Field, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import Router from 'next/router';
import {  
  LoginWrapForm,
  LoginContainer, 
  LoginForm,
  LogInErrorModule
} from "../styles/LoginStyledModules/Login.module";
import {TState} from '../redux/reducers/user';
import { logInAction } from '../redux/actions/user';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';

export interface IFormikValues {
  email: string;
  password: string;
}

export default function Login() {
  const validationSchema = Yup.object({
    email: Yup.string().email().required('Enter your email'),
    password: Yup.string().min(8, 'Must be greater than 8').required('Enter your password')
  });

  const error = useSelector((state: TState) => state.loginError);
  const loading: any = useSelector((state: TState) => state.loginLoading);
  const token: string = useSelector((state: TState) => state.token);
  const dispatch = useDispatch();
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

  return (
    <div className="signup__body">
      <LoginContainer>
        <LoginWrapForm>
          <h2>Log in</h2>
          <LogInErrorModule style={{display: error ? 'flex' : 'none'}}>
            <p>Error, try again</p>
          </LogInErrorModule>
          <LoginForm>
          <Formik
            initialValues={{email: '', password: ''}}
            validationSchema={validationSchema}
            onSubmit={(
              values: IFormikValues
            ) => {
              dispatch(logInAction(values));
            }}
          >
            {
              ({errors}) => (
                <Form>
                  <Field type='email' name='email' id='email' placeholder='Email' />
                  <p>{errors.email}</p>
                  <Field type='password' name='password' id='password' placeholder='Password' />
                  <p>{errors.password}</p>
                  <button type='submit' disabled={loading}>
                    {loading ? 'Loading...' : 'Submit'}
                  </button>
                </Form>
              )
            }
          </Formik>
          </LoginForm>
        </LoginWrapForm>
      </LoginContainer>
    </div>
  )
}