import axios from 'axios';
import URL from './endpoint';

export const login = (data: string) => {
  console.log('URL', `${URL}/useraccounts/login`)
  console.log('data', data)
return   axios.post(
  `${URL}/useraccounts/login`,
  data,
  {headers: {'Content-Type': 'application/json'}}
)
}
