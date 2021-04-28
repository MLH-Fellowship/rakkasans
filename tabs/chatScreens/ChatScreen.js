import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Dimensions,
} from "react-native";
import { Avatar } from "react-native-elements";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import * as ImagePicker from "expo-image-picker";
import * as Firebase from "firebase";
import * as Permissions from "expo-permissions";
import uuid from "uuid";
import PropTypes from "prop-types";
import Login from "../Login";
//import CryptoJS from 'crypto-js';
import { NativeModules } from "react-native";
import { doc } from "prettier";
import AutoHeightImage from "react-native-auto-height-image";
import { moderateScale } from "react-native-size-matters";

/*CHAT SCREEN
This page contains the functions to send
and recieve messages within a conversation 
group. Functions commented out were attempts
at things like image sending and encryption */
const ChatScreen = ({ navigation, route }) => {
  const [input, setInput] = useState(""); //collects the input of the text
  const [image, setImage] = useState(null); //image functionality currently not working
  const [messages, setMessages] = useState([]); //the collection of messages sent
  //const ciphertext = CryptoJS.AES.encrypt(input, 'secret key 123').toString();
  //const realMessage = input;

  /** useLayoutEffect function sets up the header and navigation */
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chat",
      headerBackTitleVisible: false,
      headerTitleAlign: "center",
      headerTitle: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {/*  <Avatar //removed this because it was not the best style
                        rounded 
                        source={{ uri: messages[0]?.data.photoURL || "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png" }} /> */}
          <Text
            style={{
              color: "white",
              marginLeft: 10,
              fontSize: 25,
              fontFamily: "fira-sans",
            }}
          >
            {" "}
            {route.params.chatName}{" "}
          </Text>
        </View>
      ),
      headerLeft: () => (
        <TouchableOpacity
          style={{ marginLeft: 10 }}
          onPress={navigation.goBack}
        >
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
      ), //back button
      headerRight: null,
    });
  }, [navigation, messages]);

  /** useEffect function to request permission to ascess
   * photos, currently in use but unimportant because
   * image sending does not work.
   */
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
        /* const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            } */
      }
    })();
  }, []);

  /** pickImage function used to pick an image from the
   * phone library.
   */
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      uploadImageAsync(result.uri);
      setImage(result.uri);
    }
  };

  /**uploadImageAsync function to upload the image to firebase storage */
  async function uploadImageAsync(uri) {
    // Why are we using XMLHttpRequest? See:
    // https://github.com/expo/expo/issues/2402#issuecomment-443726662
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });

    const ref = Firebase.storage().ref().child(uuid.v4());
    const snapshot = await ref.put(blob);

    // We're done with the blob, close and release it
    blob.close();

    const image = await snapshot.ref.getDownloadURL();
    Keyboard.dismiss();

    return image;
  }

  /**sendMessage function sends the text input to the collection in firebase */
  const sendMessage = function sendContent() {
    Keyboard.dismiss();
    Firebase.app()
      .firestore()
      .collection("chats")
      .doc(route.params.id)
      .collection("messages")
      .add({
        timestamp: Firebase.firestore.FieldValue.serverTimestamp(),
        message: input,
        displayName: Firebase.auth().currentUser.displayName,
        email: Firebase.auth().currentUser.email,
        //photoURL: Firebase.auth().currentUser.photoURL
        //imageMessage: image,
        photoURL:
          "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png", //just sets photo to a default, need to write function to set this in profile screen
      });

    setInput("");
  }; //function to add to the database

  /** useLayoutEffect function gets the messages from firebase in the correct order */
  useLayoutEffect(() => {
    const unsubscribe = Firebase.app()
      .firestore() //db
      .collection("chats")
      .doc(route.params.id)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );

    return unsubscribe;
  }, [route]); //function to add the messages to the screen
  //const bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
  //const originalText = bytes.toString(CryptoJS.enc.Utf8);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="light" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={90}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <ScrollView contentContainerStyle={{ paddingTop: 15 }}>
              {messages.map(
                ({ id, data }) => (
                  console.log(data.imageMessage),
                  data.email === Firebase.auth().currentUser.email ? (
                    <View key={id} style={styles.reciever}>
                      <Avatar
                        position="absolute"
                        rounded
                        // WEB
                        containerStyle={{
                          position: "absolute",
                          bottom: -15,
                          right: -5,
                        }}
                        bottom={-15}
                        right={-5}
                        size={30}
                        source={{
                          uri:
                            data.photoURL ||
                            "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
                        }}
                      />
                      {/* <Text style={styles.recieverText}>{CryptoJS.AES.decrypt(data.message, 'secret key 123').toString(CryptoJS.enc.Utf8)}</Text>  */}
                      <Text style={styles.recieverText}>{data.message}</Text>
                      {/* <Image width={100} height={100} source={{uri:data.message}}/>  */}
                    </View>
                  ) : (
                    //sender and reciever are switched I think
                    <View key={id} style={styles.sender}>
                      <Avatar //image attached to the message, not functioning right now
                        position="absolute"
                        rounded
                        // WEB
                        containerStyle={{
                          position: "absolute",
                          bottom: -15,
                          left: -5,
                        }}
                        bottom={-15}
                        left={-5}
                        size={30}
                        source={{
                          uri:
                            data.photoURL ||
                            "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
                        }}
                      />
                      <Text style={styles.senderText}>{data.message}</Text>
                      {/* <Image source={{uri: data.message}} style={{ width: 200, height: 200 }} /> */}
                      <Text style={styles.senderName}>{data.displayName}</Text>
                    </View>
                  )
                )
              )}
            </ScrollView>
            <View style={styles.footer}>
              {/*  <TouchableOpacity onPress={pickImage} activeOpacity={0.5}>
                            <Ionicons name="ios-add-circle-outline" size={50} color="#020a41" />
                        </TouchableOpacity> BUTTON FOR IMAGE MESSAGING*/}

              <TextInput
                value={input}
                onChangeText={(text) => setInput(text)}
                onSubmitEditing={sendMessage}
                placeholder="Send Message"
                style={styles.textInput}
              />
              <TouchableOpacity onPress={sendMessage} activeOpacity={0.5}>
                <Ionicons name="md-send" size={24} color="#020a41" />
              </TouchableOpacity>
            </View>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cloud: {
    maxWidth: moderateScale(250, 2),
    paddingHorizontal: moderateScale(10, 2),
    paddingTop: moderateScale(5, 2),
    paddingBottom: moderateScale(7, 2),
    borderRadius: 20,
  },
  reciever: {
    padding: 15,
    backgroundColor: "#ECECEC",
    alignSelf: "flex-end",
    borderRadius: 20,
    marginRight: 15,
    marginBottom: 20,
    maxWidth: "80%",
    position: "relative",
  },
  sender: {
    padding: 15,
    backgroundColor: "#020a41",
    alignSelf: "flex-start",
    borderRadius: 20,
    margin: 15,
    maxWidth: "80%",
    position: "relative",
  },
  senderText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
    marginLeft: 3,
    marginBottom: 15,
  },
  recieverText: {
    color: "black",
    fontWeight: "500",
    fontSize: 16,
    marginLeft: 3,
  },
  recieverImage: {},
  imgContainer: {
    flexDirection: "row",
  },
  image: {
    resizeMode: "contain",
    flex: 1,
    aspectRatio: 1, // Your aspect ratio
  },

  senderName: {
    left: 10,
    paddingRight: 10,
    fontSize: 10,
    color: "white",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
  },
  textInput: {
    bottom: 0,
    height: 40,
    flex: 1,
    marginRight: 15,
    borderColor: "transparent",
    backgroundColor: "#ECECEC",
    padding: 10,
    color: "grey",
    borderRadius: 30,
  },
});
