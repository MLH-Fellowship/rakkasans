import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Colors from "../../constants/Colors";
import SquareButton from "../../components/SquareButton";

export default function BattScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/Torri.png")}
        style={{ width: 30, height: 30, top: "2%", paddingBottom: 20 }}
      />
      <View style={[styles.buttonView, { paddingTop: 10 }]}>
        <SquareButton
          name="shield"
          text="Out"
          buttonSize={90}
          textSize={13}
          onPress={() => navigation.navigate("In Processing")}
        />
        <SquareButton
          name="history"
          text="In"
          buttonSize={90}
          textSize={13}
          onPress={() => navigation.navigate("Out Processing")}
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
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingBottom: 15,
  },
});
