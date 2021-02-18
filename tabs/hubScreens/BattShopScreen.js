import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Table, Rows } from "react-native-table-component";
import { useNavigation } from "@react-navigation/native";

import Colors from "../../constants/Colors";
import RectButton from "../../components/RectButton";
import Dimensions from "../../constants/Dimensions";

export default function BattShopScreen ({ route }) {
  const [batt, setBatt] = useState({});
  const { name } = route.params;
  const {shop_number=false, hours=false, location=false} = batt
  useEffect(() => {
    const getBatt = async () => {
      try {
        // TODO Change to localhost for non Mike development
        const response = await fetch(`http://localhost:3000/battalion/${name}`);
        const json = await response.json();
        setBatt(json[0]);
      } catch (error) {
        console.log(error);
      }
    };

    getBatt();
  }, []);

  const tableData = [
    ["Shop #:", `${shop_number ? shop_number : '...loading'}`],
    ["Location:", `${location ? location : '...loading'}`],
    ["Hours:", `${hours ? hours: '...loading'}`]
  ];
  const titleWidth = Dimensions.window.width * 0.27;
  const contentWidth = Dimensions.window.width * 0.65;

  // const navigation = useNavigation();
  // const { name } = route.params;
  // const { image } = route.params;
  return (
    <>
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white
  },
  title: {
    fontSize: 36,
    color: Colors.darkGray,
    fontFamily: "andale-mono",
    marginBottom: 10
  },
  titlePic: {
    width: 130,
    height: 130,
    top: "-5%",
    marginTop: 20
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 80
  },
  buttonContainer: {
    marginTop: 20,
    width: "90%"
  },
  buttonView: {
    marginTop: 35,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingBottom: 15,
    width: "100%"
  },
  tableText: {
    fontSize: 16,
    margin: 6
  }
});
