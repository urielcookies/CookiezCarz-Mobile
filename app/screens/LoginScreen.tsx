import React, {useState} from 'react'
import {Text, TextInput, TouchableOpacity, View} from 'react-native'
import axios from 'axios';
import {login} from '../api/auth';

const URL = 'https://carlistapi.azurewebsites.net/api';
const Login = (props: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const data = JSON.stringify({email, password})
  // const LoginHandler = () => props.navigation.navigate('Home'); //getuserinfo
  const LoginHandler = () => axios.post(`${URL}/useraccounts/login`, data, {headers: {'Content-Type': 'application/json'}})
    .then((response: {data: any}) => {
      // handle success
      console.log('--->', response.data);
    })
    .catch((error: object) => console.log('ERRORZ', error, JSON.stringify({
      email,
      password,
    }), ));

  // const LoginHandler = () => {

  //   const data = JSON.stringify({email, password})
  //   return login(data)
  //     .then((response: {data: string}) => {
  //       console.log('--->', response.data);
  //     })
  //     .catch((error: object) => console.log('ERRORZ', error, data));
  // }

  return (
    <>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setEmail(text)}
        value={email}
      />

      <TextInput
        secureTextEntry={true}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setPassword(text)}
        value={password}
      />
      
      <TouchableOpacity
        style={{height: 70, backgroundColor: "grey", display: "flex", justifyContent: "center", alignItems: "center"}}
        onPress={LoginHandler}>
        <Text style={{fontSize: 20}}>Login</Text>
      </TouchableOpacity> 
      
    </>
  )
}

export default Login
