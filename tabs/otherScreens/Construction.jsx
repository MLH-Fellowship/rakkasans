import React from 'react';
import { Text, View, Image } from 'react-native';
import Button from '../../components/Button';

const Construction = ({ navigation }) => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFF',
      paddingHorizontal: 24,
    }}
  >
    <View style={{ flex: 6, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        style={{
          fontSize: 28,
          marginBottom: 32,
          textAlign: 'center',
          fontWeight: '500',
        }}
      >
        This feature is not available in the alpha version of RAKapp.
      </Text>
      <View>
        <Image
          source={require('../../assets/images/blocked.png')}
          style={{
            width: 400,
            height: 300,
            backgroundColor: 'red',
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 28,
          marginTop: 15,
          textAlign: 'center',
          fontWeight: '500',
        }}
      >
        Check back at a later time.
      </Text>
    </View>

    <View style={{ flex: 1 }}>
      <Button title="Back" onPress={() => console.log(navigation.goBack())} />
    </View>
  </View>
);

export default Construction;
