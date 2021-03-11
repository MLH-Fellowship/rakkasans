import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default function Subtitle({ content }) {
  return (
    <View>
      <Text style={styles.subtitle}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    textAlign: 'center',
    fontSize: 24,
    marginVertical: 10,
  },
});

Subtitle.propTypes = {
  content: PropTypes.string,
};
