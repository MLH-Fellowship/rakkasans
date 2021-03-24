import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function SquareButton({ text, onPress }) {
  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
    },
  });
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
