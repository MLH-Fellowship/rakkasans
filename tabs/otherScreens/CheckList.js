import { View,Button,Text } from "react-native";
import React from "react";

export default function WelcomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Check List Coming Soon</Text>
      <Button onPress={() => navigation.navigate('Tab Bar')}title={'Continue ->'}></Button>
    </View>
  );
}
