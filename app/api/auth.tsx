import axios from 'axios';
import URL from './endpoint';

export const login = (data: string) => 
  axios.post(
    `${URL}/useraccounts/login`,
    data,
    {headers: {'Content-Type': 'application/json'}}
  )
