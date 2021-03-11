import React from 'react';
import {
  View, Text, Image, StyleSheet,
} from 'react-native';
import { Table, Rows } from 'react-native-table-component';
import { useNavigation } from '@react-navigation/native';

import Colors from '../../constants/Colors';
import Dimensions from '../../constants/Dimensions';
import RectButton from '../../components/RectButton';

export default function SchoolPageScreen({ route }) {
  const { name } = route.params;

  const navigation = useNavigation();

  const tableData = [
    ['Phone:', '(270) 798 - 4410'],
    ['Email:', 'usarmy.campbell.101-abn-div.mbx.air-assault-school@email.mil'],
    ['Location:', '6883 Air Assault St. Fort Cambell, KY 42223'],
    ['Report Times:', '5:00 AM'],
    ['Grad Times:', '10:00 AM'],
  ];
  const url = { uri: 'https://picsum.photos/300/300' };
  const titleWidth = Dimensions.window.width * 0.27;
  const contentWidth = Dimensions.window.width * 0.65;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={url} />

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
        <RectButton text="Documents" onPress={() => console.log('Pressed')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  buttonContainer: {
    marginTop: 20,
    width: '50%',
  },
  table: {
    paddingHorizontal: 10,
  },
  tableText: {
    fontSize: 16,
    margin: 6,
  },
  image: {
    width: '100%',
    height: '30%',
  },
  title: {
    fontSize: 26,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
});
