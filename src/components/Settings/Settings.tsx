import React from 'react';
import {Button, View, Text} from 'react-native';

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

function DetailsScreen({route, navigation}: Navigation) {
  const {itemId, otherParam} = route.params;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>

      {/* <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      /> */}
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
      {/* <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      /> */}
    </View>
  );
}

export default DetailsScreen;
