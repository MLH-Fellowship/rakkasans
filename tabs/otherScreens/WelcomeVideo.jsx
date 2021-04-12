import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Video } from "expo-av";
import Colors from "../../constants/Colors";
import Button from "../../components/Button";

export default function WelcomeVideo({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ecf0f1",
    },
    text: {
      fontSize: 30,
      fontWeight: "bold",
    },
    video: {
      borderWidth: 1,
      borderColor: Colors.primary,
      alignSelf: "center",
      width: 400,
      height: 250,
    },
    buttons: {
      flex: 1,
      justifyContent: "center",
    },
  });
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={styles.text}>Welcome to RAKapp!</Text>
      </View>
      <View style={{ flex: 3, justifyContent: "center" }}>
        <Video
          style={styles.video}
          source={{
            uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          resizeMode="cover"
          useNativeControls
        />
      </View>

      <View style={styles.buttons}>
        <Button
          title="Continue"
          onPress={() => navigation.navigate("Tab Bar")}
        />
      </View>
    </View>
  );
}
