import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import SquareButton from "../../components/SquareButton";
import Colors from "../../constants/Colors";

export default function ProgramsScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/Torri.png")}
        style={{ width: 30, height: 30, top: "-8%" }}
      />
      <View style={[styles.buttonView, { paddingTop: 10 }]}>
        <SquareButton
          name="ribbon"
          text="SHARP"
          buttonSize={65}
          textSize={12}
          iconSize={38}
          onPress={() =>
            navigation.navigate("Resource", {
              name: "SHARP",
              // image: require("../../assets/images/HHC.png"),
            })
          }
        />
        <SquareButton
          name="bank"
          text="EO"
          buttonSize={65}
          textSize={12}
          iconSize={38}
          onPress={() =>
            navigation.navigate("Resource", {
              name: "EO",
              // image: require("../../assets/images/HHC.png"),
            })
          }
        />
      </View>
      <View style={styles.buttonView}>
        <SquareButton
          name="home-group"
          text="FRG"
          buttonSize={65}
          textSize={12}
          iconSize={38}
          onPress={() =>
            navigation.navigate("Resource", {
              name: "FRG",
              // image: require("../../assets/images/HHC.png"),
            })
          }
        />
        <SquareButton
          name="basketball"
          text="MWR"
          buttonSize={65}
          textSize={12}
          iconSize={38}
          onPress={() =>
            navigation.navigate("Resource", {
              name: "MWR",
              // image: require("../../assets/images/HHC.png"),
            })
          }
        />
      </View>
      <View style={styles.buttonView}>
        <SquareButton
          name="human-handsup"
          text="BOSS"
          buttonSize={65}
          textSize={12}
          iconSize={38}
          onPress={() =>
            navigation.navigate("Resource", {
              name: "BOSS",
              // image: require("../../assets/images/HHC.png"),
            })
          }
        />
        <SquareButton
          name="school"
          text="Education"
          buttonSize={65}
          textSize={11}
          iconSize={38}
          onPress={() =>
            navigation.navigate("Resource", {
              name: "Education",
              // image: require("../../assets/images/HHC.png"),
            })
          }
        />
      </View>
      <View style={[styles.buttonView, { paddingBottom: 25 }]}>
        <SquareButton
          name="flower"
          text="ACS"
          buttonSize={65}
          textSize={12}
          iconSize={38}
          onPress={() =>
            navigation.navigate("Resource", {
              name: "ACS",
              // image: require("../../assets/images/HHC.png"),
            })
          }
        />
        <SquareButton
          name="account-group"
          text="PMO"
          buttonSize={65}
          textSize={13}
          iconSize={38}
          onPress={() =>
            navigation.navigate("Resource", {
              name: "PMO",
              // image: require("../../assets/images/HHC.png"),
            })
          }
        />
      </View>
      <View style={[styles.buttonView, { paddingBottom: 25 }]}>
        <SquareButton
          name="calendar-clock"
          text="Retention"
          buttonSize={65}
          textSize={11}
          iconSize={38}
          onPress={() =>
            navigation.navigate("Resource", {
              name: "Retention",
              // image: require("../../assets/images/HHC.png"),
            })
          }
        />
        <SquareButton
          name="christianity-outline"
          text="Religious"
          buttonSize={65}
          textSize={11}
          iconSize={38}
          onPress={() =>
            navigation.navigate("Resource", {
              name: "Religious Services",
              // image: require("../../assets/images/HHC.png"),
            })
          }
        />
      </View>
      <View style={[styles.buttonView, { paddingBottom: 25 }]}>
        <SquareButton
          name="select-group"
          text="ADAM BAE"
          buttonSize={65}
          textSize={11}
          iconSize={38}
          onPress={() =>
            navigation.navigate("Resource", {
              name: "ADAM BAE",
              // image: require("../../assets/images/HHC.png"),
            })
          }
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonView: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingBottom: 20,
  },
});
