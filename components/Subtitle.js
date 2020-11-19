import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

export default function Subtitle({ content }) {
  return (
    <View>
      <Text>{content}</Text>
    </View>
  );
}

Subtitle.propTypes = {
  content: PropTypes.string,
};
