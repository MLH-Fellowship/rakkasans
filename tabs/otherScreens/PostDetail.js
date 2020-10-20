import React, { useState, useEffect } from "react";
import { ListItem, Thumbnail, Text, Body } from "native-base";
import { ScrollView, StyleSheet, View } from "react-native";
import { NavigationEvents } from "react-navigation";

import SinglePost from "../../components/SinglePost";
import RectButton from "../../components/RectButton";
import { replyThread } from "../otherScreens/PostClasses/ReplyThread";
import { useIsFocused } from "@react-navigation/native";

var thisThread = replyThread;
export default function PostDetail({ navigation, route }) {
  const isFocused = useIsFocused(); //this auto re renders this component
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  return (
    <ScrollView style={styles.container}>
      <SinglePost data={route.params.data} />

      <View style={styles.buttonView}>
        <RectButton
          text="Reply to this Post"
          onPress={() =>
            navigation.navigate("Reply Post", { post: route.params.data })
          }
        />
      </View>

      <View>
        {thisThread.map((i) => (
          <SinglePost data={i} />
        ))}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  buttonView: {
    width: "100%",
  },
});
