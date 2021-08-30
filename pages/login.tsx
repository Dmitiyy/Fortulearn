import { Formik, Field, Form, FormikHelpers } from 'formik';
import {  
  LoginWrapForm,
  LoginContainer, 
  LoginForm
} from "../styles/LoginStyledModules/Login.module";

interface IFormikValues {
  email: string;
  password: string;
}

export default function Login() {
  return (
    <div className="signup__body">
      <LoginContainer>
        <LoginWrapForm>
          <h2>Log in</h2>
          <LoginForm>
          <Formik
            initialValues={{email: '', password: ''}}
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
              <Field type='email' name='email' id='email' placeholder='Email' />
              <Field type='password' name='password' id='password' placeholder='Password' />
              <button type='submit'>Submit</button>
            </Form>
          </Formik>
          </LoginForm>
        </LoginWrapForm>
      </LoginContainer>
    </div>
  )
}