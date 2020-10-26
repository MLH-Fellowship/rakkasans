import { ScrollView, StyleSheet, View } from "react-native";
import React, { useState, useEffect } from "react";
import RectButton from "../../components/RectButton";
import SinglePost from "../../components/SinglePost";
import { homeFeed } from "../otherScreens/PostClasses/DummyPosts";
import NewPost from "../otherScreens/NewPost";
import { TouchableOpacity } from "react-native-gesture-handler";
var thisFeed = homeFeed;

export default function ForumFeed({ navigation, route }) {
  React.useEffect(() => {
    if (route.params?.posted) {
      thisFeed.push(route.params?.posted);
    }
  }, [route.params?.posted]);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.buttonView}>
        <RectButton
          text="Submit New Post"
          onPress={() => navigation.navigate("New Post")}
        />
      </View>
      {thisFeed.map((i) => (
        <TouchableOpacity
          style={{
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
          onPress={() => navigation.navigate("Post Detail", { data: i })}
        >
          <SinglePost data={i} />
        </TouchableOpacity>
      ))}
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
