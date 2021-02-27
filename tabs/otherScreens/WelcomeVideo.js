import * as React from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { Video } from "expo-av";

export default function WelcomeVideo({ navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [didWatch, setDidWatch] = React.useState(false);
  React.useEffect(() => {
    if (status.didJustFinish) {
      setDidWatch(true);
    }
  }, [status]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome!</Text>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        resizeMode="cover"
        useNativeControls
        onPlaybackStatusUpdate={(status) => setStatus(status)}
      />
      <View style={styles.buttons}>
        {didWatch && (
          <Button
            onPress={() => navigation.navigate("Check List")}
            title={"Continue ->"}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  text: {
    textAlign: "center",
  },
  video: {
    alignSelf: "center",
    width: 400,
    height: 250,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
