// https://medium.com/the-react-native-log/organizing-a-react-native-project-9514dfadaa0
import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AsyncStorage from '@react-native-community/async-storage';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      // options={{title: 'Welcome'}}
    />
  </Stack.Navigator>
);

const LoginStack = () => (
  <Stack.Navigator  initialRouteName="Login">
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    (async function anyNameFunction() {
      const token = await AsyncStorage.getItem('token');
      setAuthenticated(Boolean(token));
    })();
  }, []);
  console.log('authenticated--->', authenticated)
  return (
    <NavigationContainer>
      {authenticated
      ? (<HomeStack />)
      : (<LoginStack />)}
    </NavigationContainer>
  );
};

export default App;
