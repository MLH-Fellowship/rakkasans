import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import SquareButton from '../../components/SquareButton';
import Colors from '../../constants/Colors';

export default function SchoolsScreen() {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.white,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonPair: {
      width: '85%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      paddingBottom: 30,
    },
  });
  return (
    <View style={styles.container}>
      <View style={[styles.buttonPair, { paddingTop: 10 }]}>
        <SquareButton
          name="school"
          text="AASLT"
          buttonSize={80}
          textSize={13}
          iconSize={50}
          onPress={() => navigation.navigate('School', {
            name: 'AASLT',
            // image: require("../../assets/images/HHC.png"),
          })}
        />
        <SquareButton
          name="school"
          text="PRC"
          buttonSize={80}
          textSize={13}
          iconSize={50}
          onPress={() => navigation.navigate('School', {
            name: 'PRC',
            // image: require("../../assets/images/HHC.png"),
          })}
        />
      </View>
      <View style={styles.buttonPair}>
        <SquareButton
          name="school"
          text="School 3"
          buttonSize={80}
          textSize={13}
          iconSize={50}
          onPress={() => navigation.navigate('School', {
            name: 'AASLT',
            // image: require("../../assets/images/HHC.png"),
          })}
        />
        <SquareButton
          name="school"
          text="School 4"
          buttonSize={80}
          textSize={13}
          iconSize={50}
          onPress={() => navigation.navigate('School', {
            name: 'AASLT',
            // image: require("../../assets/images/HHC.png"),
          })}
        />
      </View>
      <View style={styles.buttonPair}>
        <SquareButton
          name="school"
          text="School 5"
          buttonSize={80}
          textSize={12}
          iconSize={50}
          onPress={() => navigation.navigate('School', {
            name: 'AASLT',
            // image: require("../../assets/images/HHC.png"),
          })}
        />
        <SquareButton
          name="school"
          text="School 6"
          buttonSize={80}
          textSize={13}
          iconSize={50}
          onPress={() => navigation.navigate('School', {
            name: 'AASLT',
            // image: require("../../assets/images/HHC.png"),
          })}
        />
      </View>
      <View style={[styles.buttonPair, { paddingBottom: 25 }]}>
        <SquareButton
          name="school"
          text="School 7"
          buttonSize={80}
          textSize={13}
          iconSize={50}
          onPress={() => navigation.navigate('School', {
            name: 'AASLT',
            // image: require("../../assets/images/HHC.png"),
          })}
        />
        <SquareButton
          name="school"
          text="School 8"
          buttonSize={80}
          textSize={13}
          iconSize={50}
          onPress={() => navigation.navigate('School', {
            name: 'AASLT',
            // image: require("../../assets/images/HHC.png"),
          })}
        />
      </View>
    </View>
  );
}
