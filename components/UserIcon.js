import React from "react";
import { View, StyleSheet } from "react-native";

import Colors from "../constants/Colors";
import Icon from "./Icon";

export default function UserIcon() {
  return (
    <View style={styles.icon}>
      <Icon name={"plus"} color={Colors.darkGray} size={50} />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    margin: 20,
    marginBottom: 35,
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.darkGray,
    backgroundColor: Colors.lightGray,
    justifyContent: "center",
    alignItems: "center",
  },
});
