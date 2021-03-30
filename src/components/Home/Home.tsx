/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Divider, Text, Tile} from 'react-native-elements';

import UserCard from './UserCard';
import HomeStyle from './HomeStyle';

import {get} from 'axios';

// interface Route {
//   params: {
//     itemId: string;
//     otherParam: string;
//     name: string;
//   };
// }

// interface Navigation {
//   navigation: {
//     navigate: Function;
//     push: Function;
//     goBack: Function;
//     popToTop: Function;
//     setOptions: Function;
//   };
//   route: Route;
// }

const getActiveUsername = async (setActiveUser: Function) => {
  const URL =
    'https://carlistapi.azurewebsites.net/api/useraccounts/getuserinfo';
  const headers = {
    'Content-Type': 'application/json',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVyaWVsNjIxQGxpdmUuY29tIiwibmJmIjoxNjE2ODE2MDcxLCJleHAiOjE2NDgzNTIwNzEsImlhdCI6MTYxNjgxNjA3MX0.bptbLwXVIQNF4kNWSnXYoN13JXhHZcKtzqFxT8gQhb8',
  };
  const response = await get(URL, {headers}).catch((error: any) =>
    console.log(error),
  );
  setActiveUser(response.data);
};

const Home = (/*{navigation}: Navigation*/) => {
  const [activeUser, setActiveUser] = useState({Username: '', Email: ''});
  useEffect(() => {
    getActiveUsername(setActiveUser);
  }, []);

  const onPressHandler = () => {
    console.log('ONPRESS EVENT');
  };

  return (
    <>
      <SafeAreaView style={styles.SafeAreaView}>
        <ScrollView
          style={styles.ScrollView}
          contentInsetAdjustmentBehavior="automatic">
          <View>
            <Text h3>Home</Text>
          </View>

          <View>
            <Divider style={styles.Divider} />
          </View>

          <UserCard activeUser={activeUser} onPressHandler={onPressHandler} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  Divider: {
    marginTop: 5,
    marginBottom: 5,
  },
  SafeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
  ScrollView: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default Home;
