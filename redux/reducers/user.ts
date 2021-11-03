import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TState = {
  signupError: Boolean;
  signupLoading: Boolean;
  token: string;
  user: {
    accomplishments?: Array<any>
    conferences?: number
    email?: string
    gifts?: Array<any>
    name?: string
    password?: string
    photo?: string
    selectedCourses?: Array<any>
    type?: string
    _id?: string
  },
  loginError: Boolean;
  loginLoading: Boolean;
  currentCourse: [];
  getCourseError: Boolean;
  author: [];
};

const initialState = {
  signupError: false,
  signupLoading: false,
  token: '',
  user: {},
  loginError: false,
  loginLoading: false,
  currentCourse: [],
  getCourseError: false,
  author: []
} as TState;

interface IDefaultPayload {
  data: any;
  ini: string;
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setDataDefault(state: any, action: PayloadAction<IDefaultPayload>) {
      state[action.payload.ini] = action.payload.data;
    }
  }
})

const {actions, reducer} = userSlice;
export default reducer;
export const {setDataDefault} = actions;