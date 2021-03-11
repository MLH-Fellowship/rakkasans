import React from 'react';
import {
  View, Text, Image, StyleSheet,
} from 'react-native';

import Colors from '../../constants/Colors';
import Dimensions from '../../constants/Dimensions';

export default function NewsScreen({ route }) {
  const { title } = route.params;
  const { image } = route.params;
  const { text } = route.params;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    image: {
      width: '100%',
      height: '30%',
    },
    title: {
      fontSize: 20,
      color: Colors.darkGray,
      marginVertical: 15,
    },
    text: {
      marginHorizontal: 35,
      fontSize: 14,
      color: Colors.darkGray,
    },
  });
  return (
    <View style={styles.container}>
      <Image style={styles.image} resizeMode="cover" source={image} />
      <Text style={[styles.title, Dimensions.font]}>{title}</Text>
      <Text style={[styles.text, Dimensions.font]}>
        {' '}
        {text}
      </Text>
    </View>
  );
}
