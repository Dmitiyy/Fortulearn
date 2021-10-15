import {useState} from 'react';
import axios from 'axios';

interface ICategories {
  type: string;
  page: number;
  limit?: number;
}

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

  const getCategoriesData = async (type: string, page: number, limit = 10) => {
    try {
      setLoading(true);
      const result = await axios({
        method: 'POST',
        url: '/api/getCourses',
        data: JSON.stringify({type, page, limit}),
        headers: {'Content-Type': 'application/json'}
      });
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