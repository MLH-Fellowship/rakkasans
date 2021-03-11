import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../constants/Colors';
import BattalionButton from '../../components/BattalionButton';

import HHCPic from '../../assets/images/battalions/HHC.png';
import Batt1187Pic from '../../assets/images/battalions/1-187.png';
import Batt2506Pic from '../../assets/images/battalions/2-506.png';
import Batt133Pic from '../../assets/images/battalions/1-33.png';
import Batt3320Pic from '../../assets/images/battalions/3-320th.png';
import Batt21Pic from '../../assets/images/battalions/21BEB.png';
import Batt626Pic from '../../assets/images/battalions/626BSB.png';

export default function BattScreen() {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 5,
      backgroundColor: Colors.white,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonPair: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      paddingBottom: 20,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.buttonPair}>
        <BattalionButton
          onPress={() => navigation.navigate('Battalion', {
            name: 'HHC',
            image: HHCPic,
          })}
          image={HHCPic}
          iconWidth={65}
          iconHeight={70}
          text="HHC"
        />
        <BattalionButton
          onPress={() => navigation.navigate('Battalion', {
            name: '1-187 Leader BN',
            image: Batt1187Pic,
          })}
          image={Batt1187Pic}
          iconWidth={65}
          iconHeight={65}
          text="1-187"
        />
      </View>

      <View style={styles.buttonPair}>
        <BattalionButton
          onPress={() => navigation.navigate('Battalion', {
            name: '2-506 White Curahee',
            image: Batt2506Pic,
          })}
          image={Batt2506Pic}
          iconWidth={65}
          iconHeight={65}
          text="2-506"
        />
        <BattalionButton
          onPress={() => navigation.navigate('Battalion', {
            name: '3-187 Iron BN',
            image: Batt1187Pic,
          })}
          image={Batt1187Pic}
          iconWidth={65}
          iconHeight={65}
          text="3-387"
        />
      </View>

      <View style={styles.buttonPair}>
        <BattalionButton
          onPress={() => navigation.navigate('Battalion', {
            name: '1-33 War',
            image: Batt133Pic,
          })}
          image={Batt133Pic}
          iconWidth={70}
          iconHeight={70}
          text="1-33"
        />
        <BattalionButton
          onPress={() => navigation.navigate('Battalion', {
            name: '3-320th FA BN',
            image: Batt3320Pic,
          })}
          image={Batt3320Pic}
          iconWidth={65}
          iconHeight={65}
          text="3-320th"
        />
      </View>

      <View style={styles.buttonPair}>
        <BattalionButton
          onPress={() => navigation.navigate('Battalion', {
            name: '21 BEB',
            image: Batt21Pic,
          })}
          image={Batt21Pic}
          iconWidth={65}
          iconHeight={65}
          text="21 BEB"
        />
        <BattalionButton
          onPress={() => navigation.navigate('Battalion', {
            name: '626 BSB',
            image: Batt626Pic,
          })}
          image={Batt626Pic}
          iconWidth={65}
          iconHeight={65}
          text="626 BSB"
        />
      </View>
    </View>
  );
}
