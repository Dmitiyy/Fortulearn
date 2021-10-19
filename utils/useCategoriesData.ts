import {useState} from 'react';
import axios from 'axios';
import { checkTheNameOfItem } from './checkName';

type TData = [
  data: [], 
  getCategoriesData: Function, 
  loading: Boolean, 
  error: Boolean,
  pages: number[],
];

export default function useCategoriesData(): TData {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState<Boolean>(false);
  const [loading, setLoading] = useState<Boolean>(false);
  const [pages, setPages] = useState<number[]>([]);
  let pagesArray: Array<number> = [];

  const getCategoriesData = async (type: string, page: number, filter = '', limit = 16) => {
    try {
      setLoading(true);
      const result = await axios({
        method: 'POST',
        url: '/api/getCourses',
        data: JSON.stringify({type, page, limit, filter}),
        headers: {'Content-Type': 'application/json'}
      });
      for (let i: number = 0; i < result.data.data.response.length; i++) {
        let name = result.data.data.response[i].name; 
        result.data.data.response[i].name = checkTheNameOfItem(name);
      }
      setData(result.data.data.response);
      for (let i: number = 1; i <= result.data.data.pages; i++) {
        pagesArray.push(i);
      }
      setPages(pagesArray);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  }

  return [data, getCategoriesData, loading, error, pages];
}