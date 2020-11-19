import React from "react";
import { View, Image } from "react-native";
import PropTypes from "prop-types";

export default function DocumentImage({ uri }) {
  return (
    <View>
      <Image source={{ uri }} />
    </View>
  );
}

DocumentImage.propTypes = {
  uri: PropTypes.string,
};
