import React from 'react'
import {Text, TouchableOpacity} from 'react-native'


const Login = (props: any) => {
  const LoginHandler = () => props.navigation.navigate('Home');
  // const LoginHandler = () => props.navigation.push('Home');
  return (
    <>
      <TouchableOpacity onPress={LoginHandler}>
        <Text>Login</Text>
      </TouchableOpacity> 
      
    </>
  )
}

export default Login
