import React, { useState } from "react";
import { homeFeed } from "../otherScreens/PostClasses/DummyPosts";
import Firebase from "../../constants/FireBaseDb";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import Dimensions from "../../constants/Dimensions";
import Colors from "../../constants/Colors";
const { width, height } = Dimensions.window;

export default function NewPost({ navigation }) {
  const [post, setPost] = useState("");
  const userName = Firebase.auth().currentUser.displayName;
  const userEmail = Firebase.auth().currentUser.email;

  const handleSubmit = () => {
    const date = new Date().toUTCString();
    homeFeed.unshift({
      user: userName,
      username: userEmail,
      content: post,
      date: date,
    });
    navigation.navigate("Forums", {
      posted: {
        user: userName,
        username: userEmail,
        content: post,
        date: date,
      },
    });
    alert(`Submitting Post ${post}`);
  };
  return (
    <View>
      <TextInput
        placeholder="Enter Post"
        style={styles.textInput}
        placeholderTextColor={Colors.gray}
        autoCorrect={false}
        autoCapitalize="none"
        value={post}
        onChangeText={(val) => setPost(val)}
        maxLength={300}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          Keyboard.dismiss();
          handleSubmit();
        }}
      >
        <Text style={styles.buttonText}>Post</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue5,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: Colors.primary,
    height: 65,
    marginHorizontal: 30,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "fira-sans",
  },
  textInput: {
    fontFamily: "fira-sans",
    height: 300,
    borderRadius: 25,
    borderWidth: 0.5,
    marginHorizontal: 20,
    paddingLeft: 15,
    marginVertical: 5,
    borderColor: "rgba(0,0,0,0.2)",
  },
});
