import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Colors from "../constants/Colors";
import Firebase from "../constants/FireBaseDb";

export default function LogOut({ navigation }) {
  const name = Firebase.auth().currentUser.displayName;
  const [error, setError] = useState("");

  const signOut = () => {
    Firebase.auth()
      .signOut()
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((error) => setError(error.message));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        Are you sure you want to log out {name}?
      </Text>

      <Button
        color={Colors.primary}
        title="Log Out"
        onPress={() => signOut()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 35,
    backgroundColor: "#fff",
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20,
    fontFamily: "fira-sans",
  },
});
