import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../../constants/Colors";

export default function BattScreen() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
