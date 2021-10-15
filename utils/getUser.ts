import axios from "axios";
import Student from "../models/Student";
import Teacher from "../models/Teacher";

export default async function getUser(token: string) {
  let user: typeof Student | typeof Teacher;

  if (token) {
    try {
      const response = await axios({
        method: 'GET',
        url: 'http://localhost:3000/api/user',
        headers: {'Authorization': `Bearer ${JSON.parse(token)}`}
      });
      user = response.data.data;
      return user;
    } catch (err: any) {return false};
  } else {return false};
}