import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../../constants/Colors";
import { CheckBox } from "react-native-elements";

export default function BattScreen() {
  const [checked, setChecked] = useState(false);
  return <View style={styles.container}>
    <CheckBox title="Click Here" checked={checked} onPress={() => setChecked(!checked)} />
  </View>;
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
