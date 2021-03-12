import React, { useState } from 'react';
import {
  View, StyleSheet,
} from 'react-native';

import { CheckBox } from 'react-native-elements';
import Colors from '../../constants/Colors';

export default function BattScreen() {
  const [checked, setChecked] = useState(false);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.white,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  return (
    <View style={styles.container}>
      <CheckBox title="Click Here" checked={checked} onPress={() => setChecked(!checked)} />
    </View>
  );
}
