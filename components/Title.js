import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default function Title({ content }) {
  return (
    <View>
      <Text style={styles.title}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 30,
    marginVertical: 10,
  },
});

Title.propTypes = {
  content: PropTypes.string,
};
