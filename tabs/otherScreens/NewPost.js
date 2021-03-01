import React, { useState } from "react";
import Firebase from "../../constants/FireBaseDb";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableOpacity,
  Alert,
} from "react-native";
import Dimensions from "../../constants/Dimensions";
import Colors from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.window;

export default function NewPost({ route }) {
  const navigation = useNavigation();
  const { topic_id, topic_title } = route.params;

  const [post, setPost] = useState("");
  const [title, setTitle] = useState("");
  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:3000/posts/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          body: post,
          user_id: 1,
          topic_id: topic_id,
        }),
      });
      if (response.status === 200) {
        Alert.alert(
          "Your post has been successfully added!",
          ""[{ text: "OK" }]
        );
        navigation.goBack();
      } else {
        Alert.alert("ERROR: Title & Post required", ""[{ text: "OK" }]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <Text style={styles.header}>{topic_title}</Text>
      <TextInput
        placeholder="Enter title"
        style={styles.titleInput}
        placeholderTextColor={Colors.gray}
        autoCorrect={false}
        autoCapitalize="none"
        value={title}
        onChangeText={(val) => setTitle(val)}
        maxLength={300}
      />
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
  },
  titleInput: {
    height: 50,
    borderRadius: 15,
    borderWidth: 0.5,
    marginHorizontal: 20,
    paddingLeft: 15,
    marginVertical: 5,
    borderColor: "rgba(0,0,0,0.2)",
  },
  textInput: {
    height: 300,
    borderRadius: 25,
    borderWidth: 0.5,
    marginHorizontal: 20,
    paddingLeft: 15,
    marginVertical: 5,
    borderColor: "rgba(0,0,0,0.2)",
  },
  header: {
    textAlign: "center",
    fontSize: 25,
    paddingVertical: 20,
  },
});
