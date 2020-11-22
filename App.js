import React, { useState } from "react";
import * as Font from "expo-font";
import { StatusBar } from "react-native";
import Navigation from "./Navigation";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
console.disableYellowBox = true;

const _loadResourcesAsync = () => {
  return Promise.all([
    Asset.loadAsync([
      require("./assets/images/Flag.jpg"),
      require("./assets/images/history2.png"),
      require("./assets/images/battalions/1-33.png"),
      require("./assets/images/battalions/1-187.png"),
      require("./assets/images/battalions/2-506.png"),
      require("./assets/images/battalions/3-320th.png"),
      require("./assets/images/battalions/21BEB.png"),
      require("./assets/images/battalions/626BSB.png"),
      require("./assets/images/Background.png"),
      require("./assets/images/COPIC.jpeg"),
      require("./assets/images/battalions/HHC.png"),
      require("./assets/images/SGMPIC.jpeg"),
      require("./assets/images/Torri.png"),
      require("./assets/images/TORRIRAK.png"),
      require("./assets/images/fitness/fitness1.jpg"),
      require("./assets/images/fitness/fitness2.jpg"),
      require("./assets/images/fitness/fitness3.jpg"),
      require("./assets/images/fitness/fitness4.jpg"),
      require("./assets/images/fitness/fitness5.jpg"),
    ]),
    Font.loadAsync({
      "andale-mono": require("./assets/fonts/AndaleMono.ttf"),
      //"crimson-text": require("./assets/fonts/CrimsonText-Regular.ttf"),
      "fira-sans": require("./assets/fonts/FiraSans-Regular.ttf"),
      "torri-custom": require("./assets/icomoon/icomoon.ttf"),
      "navbar-icons": require("./assets/icomoon/navbar-icons/icomoon.ttf"),
      "hub-icons": require("./assets/icomoon/hub-icons/icomoon.ttf"),
    }),
  ]);
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={_loadResourcesAsync}
        onFinish={() => setDataLoaded(true)}
      />
    );
  } else {
    return (
      <NavigationContainer>
        <StatusBar barStyle={"light-content"} />
        <Navigation />
      </NavigationContainer>
    );
  }
}
