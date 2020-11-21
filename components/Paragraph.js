import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default function Paragraph({ content }) {
  return (
    <View>
      <Text style={styles.paragraph}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 16,
    textAlign: "left",
    marginVertical: 5,
  },
});

Paragraph.propTypes = {
  content: PropTypes.string,
};
