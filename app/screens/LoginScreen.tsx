import React, {useState} from 'react'
import {Text, TextInput, TouchableOpacity, View} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import {login} from '../api/auth';

const Login = ({setAuthenticated}: {setAuthenticated: Function}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const LoginHandler = () => {
    const data = JSON.stringify({email, password})
    login(data)
      .then(async ({data}: {data: string}) => {
        await AsyncStorage.setItem('token', data)
        setAuthenticated(true);
      })
      .catch((error: object) => console.log(error));
  }

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
