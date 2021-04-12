import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
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

import Brewer from '../assets/images/BREWER.jpg';
import Copic from '../assets/images/COPIC.jpeg';

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
      width: '90%',
      height: '90%',
      backgroundColor: 'white',
      borderRadius: 20,
      paddingTop: 35,
      paddingBottom: 25,
      paddingLeft: 35,
      paddingRight: 25,
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
      marginBottom: 15,
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
            <ScrollView style={styles.modalBio}>
              <Text style={[Dimensions.font, styles.modalTitle]}>
                COL Brandon Teague
              </Text>
              <Text style={[Dimensions.font, styles.modalBody]}>
                COL Brandon Teague biography here.
              </Text>
            </ScrollView>
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
            <ScrollView style={styles.modalBio}>
              <Text style={[Dimensions.font, styles.modalTitle]}>
                CSM Eddie L. Brewer
              </Text>
              <Text style={[Dimensions.font, styles.modalBody]}>
                Command Sergeant Major Eddie L. Brewer graduated from Vernon
                High School, FL in June 1993. In January 1994, he enlisted in
                the Army as an Infantryman under the Delayed Entry Program and,
                two months later, reported to Fort Benning, GA for One Station
                Unit Training.
                {'\n\n'}
                <Text style={[Dimensions.font, styles.modalBody]}>
                  During his 26 years of service, CSM Brewer has held numerous
                  leadership positions to include: Fire Team Leader, Squad
                  Leader, Scout Team Leader, Platoon Sergeant, Brigade S2 NCOIC,
                  First Sergeant, Division G33 Operations Sergeant Major, and
                  Battalion Command Sergeant Major. Additionally, CSM Brewer has
                  served as a Drill Sergeant, Ranger Instructor, and as an
                  Operations SGT at the Special Warfare Center.
                  {'\n\n'}
                </Text>
                <Text style={[Dimensions.font, styles.modalBody]}>
                  CSM Brewer&apos;s assignments include: 1-9 CAV (1CD); 2-9 INF
                  (2ID); 2-87 INF (10MTN); 2-1 SWTG (SWCS); 5th Ranger Training
                  BN; 2-4 INF (10MTN); 2-54 INF; 4th BSTB (10MTN); 2-30 INF
                  (10MTN); 3-11 INF (OCS); HHBN (101ABN); 1-327 INF (101ABN).
                  {'\n\n'}
                </Text>
                <Text style={[Dimensions.font, styles.modalBody]}>
                  CSM Brewer has more than 40 months of combat and operational
                  deployments in support of Operations in Afghanistan, Iraq, and
                  Kuwait.
                  {'\n\n'}
                </Text>
                <Text style={[Dimensions.font, styles.modalBody]}>
                  CSM Brewer is a graduate of all the Noncommissioned Officers&apos;
                  Education System courses including the United States Army
                  Sergeants Major Academy, Class #67. He has attended numerous
                  military schools and training programs to include: Brigade and
                  Battalion Pre-Command Courses, Airborne School, Air Assault
                  School, Ranger School, Pathfinder School, Military Free-Fall
                  Parachutist Course, Drill Sergeant School, First Sergeants
                  Course, both Basic and Advanced Military Mountaineering
                  Courses, Squad Designated Marksman Course, Combat Applications
                  Trainer Course (CAT-C), Master Resilience Training Course and
                  Combatives Level I and II. CSM Brewer has earned an
                  Associate&apos;s Degree from Troy University and is currently
                  working toward a Bachelor&apos;s Degree.
                  {'\n\n'}
                </Text>
                <Text style={[Dimensions.font, styles.modalBody]}>
                  CSM Brewer&apos;s awards and decorations include: Combat
                  Infantryman&apos;s Badge, Expert Infantryman&apos;s Badge, BSM (3rd
                  Award), MSM (3rd Award), ARCOM w/ &quot;C&quot; Device, ARCOM (7th
                  Award), AAM (12th Award), German Parachutist Badge (Gold), and
                  numerous other awards and decorations. CSM Brewer is married
                  to Hillary Brewer and they have a daughter and two sons.
                  {'\n\n'}
                </Text>
              </Text>
            </ScrollView>
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
          source={Brewer}
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
