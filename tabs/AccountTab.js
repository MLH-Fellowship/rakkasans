import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Colors from "../constants/Colors";
import Dimensions from "../constants/Dimensions";
import ListItem from "../components/ListItem";
import UserIcon from "../components/UserIcon";
import Firebase from "../constants/FireBaseDb";

export default function AccountTab() {
  const navigation = useNavigation();
  const userName = Firebase.auth().currentUser.displayName;
  const userEmail = Firebase.auth().currentUser.email;
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <UserIcon />
        <View style={styles.profileInfo}>
          <Text style={[styles.name, Dimensions.font]}>{userName}</Text>
          <Text style={[styles.email, Dimensions.font]}>{userEmail}</Text>
        </View>
      </View>
      <View style={styles.listContainer}>
        <ListItem title="Preferences" leftIcon="chevron-right" />
        <ListItem title="Terms & Agreements" leftIcon="chevron-right" />
      </View>
      <View style={styles.logoutContainer}>
        <ListItem
          title="Logout"
          leftIcon="close-box"
          onPress={() => navigation.navigate("Log Out")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: Colors.white,
  },
  profileContainer: {
    flexDirection: "row",
  },
  profileInfo: {
    flexDirection: "column",
    justifyContent: "center",
  },

  listContainer: {
    backgroundColor: Colors.white,
    width: "100%",
    borderBottomColor: Colors.darkGray,
    borderBottomWidth: 1,
  },
  logoutContainer: {
    backgroundColor: Colors.white,
    width: "100%",
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
