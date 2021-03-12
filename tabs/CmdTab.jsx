import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Modal,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Colors from '../constants/Colors';
import CommandCard from '../components/CommandCard';
import SquareButton from '../components/SquareButton';
import RectButton from '../components/RectButton';
import Dimensions from '../constants/Dimensions';

import Copic from '../assets/images/COPIC.jpeg';
import SgmPic from '../assets/images/SGMPIC.jpeg';

export default function CmdTab() {
  const navigation = useNavigation();
  const [modal1Visible, setModal1Visible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.white,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cmdTeamContainer: {
      justifyContent: 'center',
      width: '100%',
      marginTop: 30,
    },
    buttonTopPair: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      width: '100%',
    },
    buttonBottomPair: {
      marginTop: 35,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      width: '100%',
    },
    buttonsView: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    modalView: {
      margin: 20,
      width: '90%',
      height: '90%',
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      justifyContent: 'space-between',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.6,
      shadowRadius: 3.84,
      elevation: 8,
    },
    modalTitle: {
      fontSize: 20,
      color: Colors.darkGray,
      marginBottom: 10,
    },
    modalBody: {
      fontSize: 16,
      color: Colors.darkGray,
    },
    modalBio: {
      alignItems: 'center',
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',

      // marginTop: 22,
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <Modal animationType="slide" transparent visible={modal1Visible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalBio}>
              <Text style={[Dimensions.font, styles.modalTitle]}>Bio #1</Text>
              <Text style={[Dimensions.font, styles.modalBody]}>
                Here is a sample bio with a fair amount of text which should
                span multiple lines
              </Text>
            </View>
            <RectButton
              text="Dismiss"
              onPress={() => {
                setModal1Visible(!modal1Visible);
              }}
            />
          </View>
        </View>
      </Modal>

      <Modal animationType="slide" transparent visible={modal2Visible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalBio}>
              <Text style={[Dimensions.font, styles.modalTitle]}>Bio #2</Text>
              <Text style={[Dimensions.font, styles.modalBody]}>
                Here is a sample bio with a fair amount of text which should
                span multiple lines
              </Text>
            </View>
            <RectButton
              text="Dismiss"
              onPress={() => {
                setModal2Visible(!modal2Visible);
              }}
            />
          </View>
        </View>
      </Modal>

      <View style={styles.cmdTeamContainer}>
        <CommandCard
          title="COL Brandon Teague"
          source={Copic}
          onPress={() => {
            setModal1Visible(true);
          }}
        />
        <CommandCard
          title="CSM Eddie Brewer"
          source={SgmPic}
          onPress={() => {
            setModal2Visible(true);
          }}
        />
      </View>
      <View style={styles.buttonsView}>
        <View style={[styles.buttonTopPair, { paddingTop: 20 }]}>
          <SquareButton
            name="email-open"
            text="Welcome Letter"
            buttonSize={90}
            textSize={12}
            onPress={() => navigation.navigate('Welcome Letter')}
          />
          <SquareButton
            name="eye-circle"
            text="Vision" // Could change to "Commanders' Vision", but it doesn't fit
            buttonSize={90}
            textSize={13}
            onPress={() => navigation.navigate("Commanders' Vision")}
          />
        </View>
        <View style={[styles.buttonBottomPair, { paddingBottom: 25 }]}>
          <SquareButton
            name="email-multiple"
            text="Policy Letters"
            buttonSize={90}
            textSize={12}
            onPress={() => navigation.navigate('Policy Letters')}
          />
          <SquareButton
            name="home-city"
            text="Off Limits" // Could change to "Off Limit Establishments", but it doesn't fit
            buttonSize={90}
            textSize={12}
            onPress={() => navigation.navigate('Off Limits')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
