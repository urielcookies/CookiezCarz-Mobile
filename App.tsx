/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';

import React from 'react';
import {Text} from 'react-native';
import { Icon } from 'react-native-elements';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './src/components/Home/Home';
import SettingsScreen from './src/components/Settings/Settings';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          tabBarIcon: ({focused, color, size}) => {
            const iconName = route.name === 'Home' ? 'home' : 'settings';
            return <Icon name={iconName} type="ionicon" color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'teal',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'My home',
            // tabBarBadge: 3,
            // headerStyle: {
            //   // backgroundColor: '#f4511e',
            // },
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{title: 'Settings'}}
          initialParams={{itemId: 42}}
          // options={(navigation: Navigation) => ({
          //   title: navigation.route.params.name,
          // })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
