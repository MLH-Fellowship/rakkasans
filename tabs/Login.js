// components/login.js
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import Firebase from "../constants/FireBaseDb";
import Animated, { Easing } from "react-native-reanimated";
import { TapGestureHandler, State } from "react-native-gesture-handler";
import Svg, { Image, Circle, ClipPath } from "react-native-svg";

import Dimensions from "../constants/Dimensions";
import Colors from "../constants/Colors";

const { width, height } = Dimensions.window;
const {
  Value,
  event,
  block,
  cond,
  eq,
  set,
  Clock,
  startClock,
  stopClock,
  debug,
  timing,
  clockRunning,
  interpolate,
  Extrapolate,
  concat,
} = Animated;

function runTiming(clock, value, dest) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    duration: 1000,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease),
  };

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock),
    ]),
    timing(clock, state, config),
    cond(state.finished, debug("stop clock", stopClock(clock))),
    state.position,
  ]);
}

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isLoading: false,
    };

    this.buttonOpacity = new Value(1);
    this.onStateChange = event([
      {
        nativeEvent: ({ state }) =>
          block([
            cond(
              eq(state, State.END),
              set(this.buttonOpacity, runTiming(new Clock(), 1, 0))
            ),
          ]),
      },
    ]);
    this.onCloseState = event([
      {
        nativeEvent: ({ state }) =>
          block([
            cond(
              eq(state, State.END),
              set(this.buttonOpacity, runTiming(new Clock(), 0, 1))
            ),
          ]),
      },
    ]);
    this.buttonY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [100, 0],
      extrapolate: Extrapolate.CLAMP,
    });
    this.bgY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [-height / 3 - 50, 0],
      extrapolate: Extrapolate.CLAMP,
    });
    this.textInputZindex = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [1, -1],
      extrapolate: Extrapolate.CLAMP,
    });
    this.textInputY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [0, 100],
      extrapolate: Extrapolate.CLAMP,
    });
    this.textInputOpacity = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [1, 0],
      extrapolate: Extrapolate.CLAMP,
    });
    this.rotateCross = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [180, 360],
      extrapolate: Extrapolate.CLAMP,
    });
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  userLogin = () => {
    if (this.state.email === "" && this.state.password === "") {
      Alert.alert("Enter details to signin!");
    } else {
      this.setState({
        isLoading: true,
      });
      Firebase.auth()
        .setPersistence(Firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
          Firebase.auth()
            .signInWithEmailAndPassword("mattdillabough@gmail.com", "password")
            .then((res) => {
              console.log(res);
              console.log("User logged-in successfully!");
              this.setState({
                isLoading: false,
                email: "",
                password: "",
              });
              this.props.navigation.navigate("Tab Bar");
            })
            .catch((error) => this.setState({ errorMessage: error.message }));
        });
    }
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      );
    }
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.white,
          }}
        >
          {/*<StatusBar barStyle={"dark-content"} />*/}
          <KeyboardAvoidingView
            behavior="padding"
            style={{
              flex: 1,
              backgroundColor: Colors.white,
              justifyContent: "flex-end",
              marginTop: 260,
              marginBottom: 10,
            }}
          >
            <Animated.View
              style={{
                ...StyleSheet.absoluteFill,
                transform: [{ translateY: this.bgY }],
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  left: "7%",
                }}
              >
                <Svg height={height + 50} width={width}>
                  <ClipPath id="clip">
                    <Circle r={height + 50} cx={width / 2} />
                  </ClipPath>

                  <Image
                    href={require("../assets/images/Torri.png")}
                    height={350}
                    width={350}
                    preserveAspectRatio="xMidYMid slice"
                    clipPath="url(#clip)"
                  />
                  <Text style={styles.logoText}>RAKKASANS</Text>
                </Svg>
              </View>
            </Animated.View>
            <View style={{ height: height / 3, justifyContent: "center" }}>
              <TapGestureHandler onHandlerStateChange={this.onStateChange}>
                <Animated.View
                  style={{
                    ...styles.button,
                    backgroundColor: Colors.primary,
                    opacity: this.buttonOpacity,
                    transform: [{ translateY: this.buttonY }],
                  }}
                >
                  <Text style={styles.buttonText}>SIGN IN</Text>
                </Animated.View>
              </TapGestureHandler>

              <Animated.View
                style={{
                  zIndex: this.textInputZindex,
                  opacity: this.textInputOpacity,
                  transform: [{ translateY: this.textInputY }],
                  height: height / 3,
                  ...StyleSheet.absoluteFill,
                  top: null,
                  justifyContent: "center",
                }}
              >
                <TapGestureHandler
                  onGestureEvent={() => {
                    Keyboard.dismiss();
                  }}
                  onHandlerStateChange={this.onCloseState}
                >
                  <Animated.View
                    style={styles.closeButton}
                    onPress={() => {
                      Keyboard.dismiss();
                    }}
                  >
                    <Animated.Text
                      style={{
                        fontSize: 15,
                        transform: [
                          { rotate: concat(this.rotateCross, "deg") },
                        ],
                      }}
                    >
                      X
                    </Animated.Text>
                  </Animated.View>
                </TapGestureHandler>
                <TextInput
                  placeholder="Enter Email"
                  style={styles.textInput}
                  placeholderTextColor={Colors.gray}
                  autoCorrect={false}
                  autoCapitalize="none"
                  value={this.state.email}
                  onChangeText={(val) => this.updateInputVal(val, "email")}
                />
                <TextInput
                  placeholder="Enter Password"
                  style={styles.textInput}
                  placeholderTextColor={Colors.gray}
                  secureTextEntry={true}
                  autoCorrect={false}
                  autoCapitalize="none"
                  value={this.state.password}
                  onChangeText={(val) => this.updateInputVal(val, "password")}
                  maxLength={15}
                />

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    Keyboard.dismiss();
                    this.userLogin();
                  }}
                >
                  <Text style={styles.buttonText}>SIGN IN</Text>
                </TouchableOpacity>
              </Animated.View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    );
  }
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
  closeButton: {
    height: 40,
    width: 40,
    backgroundColor: "white",
    borderRadius: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -10,
    left: width / 2 - 20,
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
  },
  textInput: {
    fontFamily: "fira-sans",
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    marginHorizontal: 20,
    paddingLeft: 15,
    marginVertical: 5,
    borderColor: "rgba(0,0,0,0.2)",
  },
  logoText: {
    fontFamily: "fira-sans",
    fontSize: 60,
    paddingTop: "84%",
    paddingLeft: 25,
  },
});
