import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PDFReader from 'rn-pdf-reader-js';
import { Asset } from 'expo-asset';

import Colors from '../../constants/Colors';
import RectButton from '../../components/RectButton';
import Dimensions from '../../constants/Dimensions';

export default function PolicyLettersScreen() {
  // let absolute_path = Asset.fromModule(
  //   require("../../assets/pdfs/POLICY_1.pdf")
  // ).uri;
  return (
    <View style={styles.container}>
      <RectButton text="Policy Letter 1" />
      <RectButton text="Policy Letter 2" />
      <RectButton text="Policy Letter 3" />
      <RectButton text="Policy Letter 4" />
      <RectButton text="Policy Letter 5" />
      <RectButton text="Policy Letter 6" />
      <RectButton text="Policy Letter 7" />
    </View>
    // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //   <PDFReader
    //     style={styles.pdf}
    //     source={{
    //       uri: "http://gahp.net/wp-content/uploads/2017/09/sample.pdf",
    //     }}
    //   />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  // pdf: {
  //   width: "100%",
  //   height: "100%",
  // },
});
