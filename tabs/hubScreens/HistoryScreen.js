import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Colors from "../../constants/Colors";
import RectButton from "../../components/RectButton";

export default function HistoryScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          source={require("../../assets/images/history2.png")}
          style={{ width: 120, height: 120 }}
        />
        <Image
          source={require("../../assets/images/Flag.jpg")}
          style={{ width: 170, height: 120, marginLeft: 20 }}
        />
      </View>
      <View style={styles.buttonView}>
        <RectButton text="Notable Events" onPress={() => {}} icons={true} />
        <RectButton
          text="MoH Recipients"
          onPress={() => {
            navigation.navigate("MoH");
          }}
          icons={true}
        />
        <RectButton
          text="Lineage Honors"
          onPress={() => {
            navigation.navigate("LineageHonors");
          }}
          icons={true}
        />
        <RectButton text="Fallen Rakkasans" onPress={() => {}} icons={true} />
        <RectButton text="DMOR_HMOR" onPress={() => {}} icons={true} />
        <RectButton text="Division History" onPress={() => {}} icons={true} />
        <RectButton text="BN History" onPress={() => {}} icons={true} />
        <RectButton text="3BDE History" onPress={() => {}} icons={true} />
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
    justifyContent: "space-evenly",
  },
  titleText: {
    color: Colors.primary,
    fontFamily: "andale-mono",
    fontSize: 25,
  },
  buttonView: {
    width: "90%",
  },
  image: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
