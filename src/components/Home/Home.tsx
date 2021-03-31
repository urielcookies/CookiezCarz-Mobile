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
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Divider, Text} from 'react-native-elements';

import {isEmpty, map} from 'lodash';
import get from 'axios';

import UserCard from './UserCard';

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

interface users {
  Id: number;
  Username: string;
  Email: string;
}

const URL = 'https://carlistapi.azurewebsites.net/api';
const headers = {
  'Content-Type': 'application/json',
  token:
    // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVyaWVsNjIxQGxpdmUuY29tIiwibmJmIjoxNjE2ODE2MDcxLCJleHAiOjE2NDgzNTIwNzEsImlhdCI6MTYxNjgxNjA3MX0.bptbLwXVIQNF4kNWSnXYoN13JXhHZcKtzqFxT8gQhb8',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVnNjIxQGxpdmUuY29tIiwibmJmIjoxNjE3MTQ4OTIwLCJleHAiOjE2NDg2ODQ5MjAsImlhdCI6MTYxNzE0ODkyMH0.7pr0OvTxOzudJAqCkZG80bMuHKT_LmAO4eZ7LNYyM8M',
};

const getActiveUsername = async (setActiveUser: Function) => {
  const response = await get(`${URL}/useraccounts/getuserinfo`, {
    headers,
  }).catch((error: any) => console.log(error));
  setActiveUser(response.data);
};

const fetchUsers = async (setUsers: Function) => {
  const response = await get(`${URL}/caraccess/getusernames`, {
    headers,
  }).catch((error: any) => console.log(error));
  setUsers(response.data);
};

const Home = (/*{navigation}: Navigation*/) => {
  const [activeUser, setActiveUser] = useState({
    Id: 0,
    Username: '',
    Email: '',
  });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getActiveUsername(setActiveUser);
    fetchUsers(setUsers);
  }, []);

  const onPressHandler = () => {
    console.log('ONPRESS EVENT');
  };

  return (
    <>
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.ScrollView}>
          <View>
            <Text h3>Home</Text>
          </View>

          <View>
            <Divider style={styles.Divider} />
          </View>

          <View style={styles.View}>
            {Boolean(activeUser.Id) && (
              <UserCard
                key={activeUser.Id}
                activeUser={activeUser}
                onPressHandler={onPressHandler}
              />
            )}
            {!isEmpty(users) &&
              map(users, ({Id, Username, Email}: users) => (
                <UserCard
                  key={Id}
                  activeUser={{Username, Email}}
                  onPressHandler={onPressHandler}
                />
              ))}
          </View>
        </View>
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
  View: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

export default Home;
