import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Colors from '../constants/Colors';
import Dimensions from '../constants/Dimensions';
import SquareButton from '../components/SquareButton';
import AppleMap from '../components/AppleMap';

export default function HubTab() {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.white,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonView: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      paddingBottom: 15,
    },

    map: {
      flex: 1,
      elevation: 2, // android
      shadowColor: 'black', // shadow - ios
      shadowRadius: 4,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.26,
      height: '75%',
      width: '90%',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    maptext: {
      fontSize: 20,
      color: Colors.blue3,
      paddingVertical: 16,
    },
  });
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={[styles.maptext, Dimensions.font]}>3rd BDE AO</Text>
      <TouchableOpacity
        onPressIn={() => navigation.navigate('KMZ Map')}
        style={styles.map}
        accessibilityRole="imagebutton"
      >
        <AppleMap />
      </TouchableOpacity>

      <View style={[styles.buttonView, { paddingTop: 5 }]}>
        <SquareButton
          name="Battalions"
          text="Battalions"
          buttonSize={75}
          textSize={10}
          onPress={() => navigation.navigate('Battalions')}
          hubIcon
        />
        <SquareButton
          name="History"
          text="RAK History"
          buttonSize={75}
          textSize={10}
          onPress={() => navigation.navigate('RAK History')}
          hubIcon
        />
      </View>
      <View style={styles.buttonView}>
        <SquareButton
          name="Bluebook"
          text="Bluebook"
          buttonSize={75}
          textSize={10}
          onPress={() => navigation.navigate('Bluebook')}
          hubIcon
        />
        <SquareButton
          name="Training"
          text="Training & Schools"
          buttonSize={75}
          textSize={10}
          onPress={() => navigation.navigate('Training & Schools')}
          hubIcon
        />
      </View>
      <View style={styles.buttonView}>
        <SquareButton
          name="Processing"
          text="In/Out Processing"
          buttonSize={75}
          textSize={10}
          onPress={() => navigation.navigate('Processing')}
          hubIcon
        />
        <SquareButton
          name="Forums"
          text="Forums"
          buttonSize={75}
          textSize={11}
          onPress={() => navigation.navigate('Topics')}
          hubIcon
        />
      </View>
      <View style={[styles.buttonView, { paddingBottom: 25 }]}>
        <SquareButton
          name="Resources"
          text="Army Resources"
          buttonSize={75}
          textSize={10}
          onPress={() => navigation.navigate('Army Resources')}
          hubIcon
        />
        <SquareButton
          name="RAKFIT"
          text="RAKFIT"
          buttonSize={75}
          textSize={11}
          onPress={() => navigation.navigate('RAKFIT')}
          hubIcon
        />
      </View>
    </View>
  );
}
