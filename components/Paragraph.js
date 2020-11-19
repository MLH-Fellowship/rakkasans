import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

export default function Paragraph({ content }) {
  return (
    <View>
      <Text>{content}</Text>
    </View>
  );
}

Paragraph.propTypes = {
  content: PropTypes.string,
};
