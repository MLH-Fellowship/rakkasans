import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Colors from '../../constants/Colors';
import RectButton from '../../components/RectButton';

export default function BattShopListScreen({ route }) {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: "center",
      alignItems: 'center',
      backgroundColor: Colors.white,
    },
    buttonContainer: {
      marginTop: 20,
      width: '90%',
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {/* <Text style={styles.title}> {name} </Text>
        <Image source={image} style={styles.titlePic} /> */}
        <RectButton
          text="S1"
          onPress={() => navigation.navigate('Batt Shop', route.params)}
          icons
        />
        <RectButton
          text="S2"
          onPress={() => navigation.navigate('Batt Shop', route.params)}
          icons
        />
        <RectButton
          text="S3"
          onPress={() => navigation.navigate('Batt Shop', route.params)}
          icons
        />
        <RectButton
          text="S4"
          onPress={() => navigation.navigate('Batt Shop', route.params)}
          icons
        />
        <RectButton
          text="S6"
          onPress={() => navigation.navigate('Batt Shop', route.params)}
          icons
        />
      </View>
    </View>
  );
}
