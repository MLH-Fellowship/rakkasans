import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Table, Rows } from "react-native-table-component";
import { useNavigation } from "@react-navigation/native";

import Colors from "../../constants/Colors";
import RectButton from "../../components/RectButton";
import Dimensions from "../../constants/Dimensions";

export default function BattShopScreen({ route }) {
  const tableData = [
    ["Shop #:", "xxx-xxx-xxxx"],
    ["Location:", "Example address which will be dynamically replaced"],
    ["Hours:", "This is the hour schedule"],
  ];
  const titleWidth = Dimensions.window.width * 0.27;
  const contentWidth = Dimensions.window.width * 0.65;

  // const navigation = useNavigation();
  // const { name } = route.params;
  // const { image } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {/* <Text style={styles.title}> {name} </Text>
        <Image source={image} style={styles.titlePic} /> */}
        <Table borderStyle={{ borderWidth: 1, borderColor: Colors.lightGray }}>
          <Rows
            data={tableData}
            textStyle={[styles.tableText, Dimensions.font]}
            widthArr={[titleWidth, contentWidth]}
          />
        </Table>
        <RectButton text="Contact Info/Details" />
        <RectButton text="Security Clearance" />
        <RectButton text="Regulations" />
        <RectButton text="Function" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  title: {
    fontSize: 36,
    color: Colors.darkGray,

    marginBottom: 10,
  },
  titlePic: {
    width: 130,
    height: 130,
    top: "-5%",
    marginTop: 20,
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 80,
  },
  buttonContainer: {
    marginTop: 20,
    width: "90%",
  },
  buttonView: {
    marginTop: 35,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingBottom: 15,
    width: "100%",
  },
  tableText: {
    fontSize: 16,
    margin: 6,
  },
});
