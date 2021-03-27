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

import HomeStyle from './HomeStyle';

import {get} from 'axios';


interface Route {
  params: {
    itemId: String;
    otherParam: String;
    name: String;
  };
}

interface Navigation {
  navigation: {
    navigate: Function;
    push: Function;
    goBack: Function;
    popToTop: Function;
    setOptions: Function;
  };
  route: Route;
}

const getActiveUsername = async (setActiveUser) => {
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

const Home = ({navigation}: Navigation) => {
  const [activeUser, setActiveUser] = useState({});
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

          <View>
            <Tile
              featured
              onPress={onPressHandler}
              title={activeUser.Username}
              titleStyle={{
                color: 'black',
                fontSize: 18,
                paddingLeft: 0,
                paddingRight: 0,
              }}
              caption={activeUser.Email}
              captionStyle={{
                color: 'grey',
                marginTop: -10,
                fontSize: 13,
                paddingLeft: 0,
                paddingRight: 0,
              }}
              overlayContainerStyle={{
                backgroundColor: 'white',
                borderColor: 'grey',
                borderRadius: 3,
                borderWidth: 0.5,
                paddingLeft: 0,
                paddingRight: 0,
              }}
              icon={{name: 'folder-open-o', type: 'font-awesome', size: 35}}
              height={120}
              width={160}
            />
          </View>
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
