import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default function Italicized({ content }) {
  return (
    <View>
      <Text style={styles.italicized}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  italicized: {
    fontStyle: 'italic',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'left',
    marginVertical: 5,
  },
});

Italicized.propTypes = {
  content: PropTypes.string,
};
