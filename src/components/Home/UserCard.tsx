import React from 'react';
import {GestureResponderEvent} from 'react-native';
import {StyleSheet, View} from 'react-native';

import {Tile} from 'react-native-elements';

interface UserCardProps {
  activeUser: {
    Username: string;
    Email: string;
  };
  onPressHandler: (event: GestureResponderEvent) => void;
}

const UserCard = (props: UserCardProps) => {
  const {activeUser, onPressHandler} = props;
  return (
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
  );
};

export default UserCard;

const styles = StyleSheet.create({});
