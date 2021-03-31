import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Icon, Text} from 'react-native-elements';

interface UserCardProps {
  key: number;
  activeUser: {
    Username: string;
    Email: string;
  };
  onPressHandler: (event: GestureResponderEvent) => void;
}

const UserCard = ({activeUser, onPressHandler}: UserCardProps) => (
  <TouchableOpacity style={styles.TouchableOpacity} onPress={onPressHandler}>
    <Icon name="folder-open-o" type="font-awesome" size={30} />
    <Text style={styles.Username}>{activeUser.Username}</Text>
    <Text style={styles.Email}>{activeUser.Email}</Text>
  </TouchableOpacity>
);

export default UserCard;

const styles = StyleSheet.create({
  Username: {
    fontSize: 18,
  },
  Email: {
    color: 'grey',
    fontSize: 14,
  },
  TouchableOpacity: {
    height: 120,
    width: 160,
    borderColor: 'grey',
    borderWidth: 1,
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
    marginTop: 10,
    marginBottom: 10,
  },
});
