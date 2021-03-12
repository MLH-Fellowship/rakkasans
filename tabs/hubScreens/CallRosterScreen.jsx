import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Table, Rows } from 'react-native-table-component';

import { ScrollView } from 'react-native-gesture-handler';

import Colors from '../../constants/Colors';
import Dimensions from '../../constants/Dimensions';

export default function CallRosterScreen() {
  const tableData = [
    ['Person #1'],
    ['Person #2'],
    ['Person #3'],
    ['Person #4'],
    ['Person #5'],
    ['Person #6'],
    ['Person #7'],
    ['Person #8'],
    ['Person #9'],
    ['Person #10'],
    ['Person #11'],
    ['Person #1'],
    ['Person #2'],
    ['Person #3'],
    ['Person #4'],
    ['Person #5'],
    ['Person #6'],
    ['Person #7'],
    ['Person #8'],
    ['Person #9'],
    ['Person #10'],
    ['Person #11'],
    ['Person #1'],
    ['Person #2'],
    ['Person #3'],
    ['Person #4'],
    ['Person #5'],
    ['Person #6'],
    ['Person #7'],
    ['Person #8'],
    ['Person #9'],
    ['Person #10'],
    ['Person #11'],
  ];
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
    },

    tableText: {
      fontSize: 16,
      margin: 6,
    },
  });
  return (
    <ScrollView style={styles.container}>
      {/* <Text style={styles.title}> {name} </Text>
        <Image source={image} style={styles.titlePic} /> */}
      <Table borderStyle={{ borderWidth: 1, borderColor: Colors.gray }}>
        <Rows
          data={tableData}
          textStyle={[styles.tableText, Dimensions.font]}
        />
      </Table>
    </ScrollView>
  );
}
