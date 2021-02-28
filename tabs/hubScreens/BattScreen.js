import React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../constants/Colors";
import BattalionButton from "../../components/BattalionButton";

export default function BattScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.buttonPair}>
        <BattalionButton
          onPress={() =>
            navigation.navigate("Battalion", {
              name: "HHC",
              image: require("../../assets/images/battalions/HHC.png"),
            })
          }
          image={require("../../assets/images/battalions/HHC.png")}
          iconWidth={65}
          iconHeight={70}
          text="HHC"
        />
        <BattalionButton
          onPress={() =>
            navigation.navigate("Battalion", {
              name: "1-187 Leader BN",
              image: require("../../assets/images/battalions/1-187.png"),
            })
          }
          image={require("../../assets/images/battalions/1-187.png")}
          iconWidth={65}
          iconHeight={65}
          text="1-187"
        />
      </View>

      <View style={styles.buttonPair}>
        <BattalionButton
          onPress={() =>
            navigation.navigate("Battalion", {
              name: "2-506 White Curahee",
              image: require("../../assets/images/battalions/2-506.png"),
            })
          }
          image={require("../../assets/images/battalions/2-506.png")}
          iconWidth={65}
          iconHeight={65}
          text="2-506"
        />
        <BattalionButton
          onPress={() =>
            navigation.navigate("Battalion", {
              name: "3-187 Iron BN",
              image: require("../../assets/images/battalions/1-187.png"),
            })
          }
          image={require("../../assets/images/battalions/1-187.png")}
          iconWidth={65}
          iconHeight={65}
          text="3-387"
        />
      </View>

      <View style={styles.buttonPair}>
        <BattalionButton
          onPress={() =>
            navigation.navigate("Battalion", {
              name: "1-33 War",
              image: require("../../assets/images/battalions/1-33.png"),
            })
          }
          image={require("../../assets/images/battalions/1-33.png")}
          iconWidth={70}
          iconHeight={70}
          text="1-33"
        />
        <BattalionButton
          onPress={() =>
            navigation.navigate("Battalion", {
              name: "3-320th FA BN",
              image: require("../../assets/images/battalions/3-320th.png"),
            })
          }
          image={require("../../assets/images/battalions/3-320th.png")}
          iconWidth={65}
          iconHeight={65}
          text="3-320th"
        />
      </View>

      <View style={styles.buttonPair}>
        <BattalionButton
          onPress={() =>
            navigation.navigate("Battalion", {
              name: "21 BEB",
              image: require("../../assets/images/battalions/21BEB.png"),
            })
          }
          image={require("../../assets/images/battalions/21BEB.png")}
          iconWidth={65}
          iconHeight={65}
          text="21 BEB"
        />
        <BattalionButton
          onPress={() =>
            navigation.navigate("Battalion", {
              name: "626 BSB",
              image: require("../../assets/images/battalions/626BSB.png"),
            })
          }
          image={require("../../assets/images/battalions/626BSB.png")}
          iconWidth={65}
          iconHeight={65}
          text="626 BSB"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: Colors.white,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPair: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingBottom: 20,
  },
});
