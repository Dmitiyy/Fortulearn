import { createAction } from '@reduxjs/toolkit'
import { IFormikValues } from "../../pages/login";
import { ISendData } from "../../pages/signup";
import { Actions } from "./tActions";

export const signUpAction = createAction<ISendData>(Actions.SignUp);
export const logInAction = createAction<IFormikValues>(Actions.LogIn);
export const getCourseDetails = createAction<string>(Actions.CourseDetails);