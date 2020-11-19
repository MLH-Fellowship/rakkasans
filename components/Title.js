import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

export default function Title({ content }) {
  return (
    <View>
      <Text>{content}</Text>
    </View>
  );
}

Title.propTypes = {
  content: PropTypes.string,
};
