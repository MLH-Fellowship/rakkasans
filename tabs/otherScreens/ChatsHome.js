import React, { useState, useEffect } from "react";
import { View, Image, FlatList, StyleSheet } from "react-native";

import RectButton from "../../components/RectButton";
import SinglePost from "../../components/SinglePost";
import { replyThread } from "../otherScreens/PostClasses/ReplyThread";
export default function ChatHomeScreens({ navigation }) {
  const [threads, setThreads] = useState([]);
  const rooms = [
    "General",
    "Training",
    "Army Schools",
    "Civilian Education",
    "Health and Fitness",
    "Army E-Sports",
    "Events",
  ];
  replyThread.length = 0;
  useEffect(() => {
    const threads = rooms.map((room) => {
      return {
        _id: room,
        name: room,
      };
    });
    setThreads(threads);
    /**
     * unsubscribe listener
     */
    return () => threads;
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("../../assets/images/Torri.png")}
          style={{ width: 30, height: 30, top: "30%", marginBottom: 20 }}
        />
      </View>
      <FlatList
        data={threads}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.buttonView}>
            <RectButton
              text={item.name}
              onPress={() => navigation.navigate("Forums", { thread: item })}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 25,
  },
  buttonView: {
    width: "100%",
  },
});
