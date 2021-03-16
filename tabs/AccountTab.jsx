import React from 'react';
import {
  StyleSheet, View, Text, Alert,
} from 'react-native';

import Colors from '../constants/Colors';
import Dimensions from '../constants/Dimensions';
import ListItem from '../components/ListItem';
import UserIcon from '../components/UserIcon';
import Firebase from '../constants/FireBaseDb';

export default function AccountTab({ navigation }) {
  // const userName = Firebase.auth().currentUser.displayName;
  // const userEmail = Firebase.auth().currentUser.email;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: Colors.white,
    },
    profileContainer: {
      flexDirection: 'row',
    },
    profileInfo: {
      flexDirection: 'column',
      justifyContent: 'center',
    },

    listContainer: {
      backgroundColor: Colors.white,
      width: '100%',
      borderBottomColor: Colors.darkGray,
      borderBottomWidth: 1,
    },
    logoutContainer: {
      backgroundColor: Colors.white,
      width: '100%',
      borderBottomColor: Colors.darkGray,
      borderBottomWidth: 1,
      marginTop: 35,
    },
    name: {
      fontSize: 22,
      color: Colors.darkGray,
    },
    email: {
      fontSize: 14,
      color: Colors.gray,
    },
  });
  const signOutUser = () => {
    Firebase.auth().signOut().then(() => navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    }));
  };

  const signOutAlert = () => Alert.alert(
    'Sign out',
    'Are you sure you want to sign out of RAKapp?',
    [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Sign out',
        style: 'destructive',
        onPress: signOutUser,
      },
    ],
    { cancelable: true },
  );
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <UserIcon />
        <View style={styles.profileInfo}>
          <Text style={[styles.name, Dimensions.font]}>Username</Text>
          <Text style={[styles.email, Dimensions.font]}>Email</Text>
        </View>
      </View>
      <View style={styles.listContainer}>
        <ListItem title="Preferences" leftIcon="chevron-right" />
        <ListItem title="Terms & Agreements" leftIcon="chevron-right" />
      </View>
      <View style={styles.logoutContainer}>
        <ListItem
          danger
          title="Sign out"
          leftIcon="close-box"
          onPress={signOutAlert}
        />
      </View>
    </View>
  );
}
