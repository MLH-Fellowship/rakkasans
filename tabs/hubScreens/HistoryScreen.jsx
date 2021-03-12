import React from 'react';
import {
  View, StyleSheet, Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Colors from '../../constants/Colors';
import RectButton from '../../components/RectButton';

import HistoryPic from '../../assets/images/history2.png';
import Flag from '../../assets/images/Flag.jpg';

export default function HistoryScreen() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.white,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    titleText: {
      color: Colors.primary,

      fontSize: 25,
    },
    buttonView: {
      width: '90%',
    },
    image: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
  });
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          source={HistoryPic}
          style={{ width: 120, height: 120 }}
        />
        <Image
          source={Flag}
          style={{ width: 170, height: 120, marginLeft: 20 }}
        />
      </View>
      <View style={styles.buttonView}>
        <RectButton
          text="Notable Events"
          onPress={() => {
            navigation.navigate('Notable Events');
          }}
          icons
        />
        <RectButton
          text="MoH Recipients"
          onPress={() => {
            navigation.navigate('MoH');
          }}
          icons
        />
        <RectButton
          text="Lineage Honors"
          onPress={() => {
            navigation.navigate('Lineage Honors');
          }}
          icons
        />
        <RectButton
          text="Fallen Rakkasans"
          onPress={() => {
            navigation.navigate('Fallen Rakkasans');
          }}
          icons
        />
        <RectButton
          text="DMOR_HMOR"
          onPress={() => {
            navigation.navigate('DMOR_HMOR');
          }}
          icons
        />
        <RectButton
          text="Division History"
          onPress={() => {
            navigation.navigate('Division History');
          }}
          icons
        />
        <RectButton text="BN History" onPress={() => {}} icons />
        <RectButton
          text="3BDE History"
          onPress={() => {
            navigation.navigate('38DE History');
          }}
          icons
        />
      </View>
    </View>
  );
}
