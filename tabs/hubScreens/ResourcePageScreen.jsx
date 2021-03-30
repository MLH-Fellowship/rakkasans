import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Table, Rows } from "react-native-table-component";

import Colors from "../../constants/Colors";
import Dimensions from "../../constants/Dimensions";
import RectButton from "../../components/RectButton";

export default function ResourcePageScreen({ route }) {
  const {
    name,
    email,
    image,
    location,
    phone,
    grad_times,
    report_times,
  } = route.params;

  const tableData = [
    ["Phone:", `${phone}`],
    ["Email:", `${email}`],
    ["Location:", `${location}`],
    ["Report Times:", `${report_times}`],
    ["Grad Times:", `${grad_times}`],
  ];

  const titleWidth = Dimensions.window.width * 0.27;
  const contentWidth = Dimensions.window.width * 0.65;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      alignItems: "center",
      backgroundColor: Colors.white,
    },
    buttonContainer: {
      marginTop: 20,
    },
    table: {
      paddingHorizontal: 10,
    },
    tableText: {
      fontSize: 16,
      margin: 6,
    },
    image: {
      width: "100%",
      height: "30%",
    },
    title: {
      fontSize: 26,
      alignItems: "center",
      marginTop: 20,
      marginBottom: 10,
    },
  });
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />

      <Text style={[styles.title, Dimensions.font]}>{name}</Text>

      <View style={styles.table}>
        <Table borderStyle={{ borderWidth: 1, borderColor: Colors.lightGray }}>
          <Rows
            data={tableData}
            textStyle={[styles.tableText, Dimensions.font]}
            widthArr={[titleWidth, contentWidth]}
          />
        </Table>
      </View>
      <View style={styles.buttonContainer}>
        <RectButton text="Documents" onPress={() => console.log("Pressed")} />
      </View>
    </View>
  );
}
