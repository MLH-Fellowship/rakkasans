import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import {
  FontAwesome as FontIcon,
  MaterialIcons as MatIcon,
  AntDesign as AntIcon,
  Entypo as EnIcon,
  Feather as FIcon,
} from "@expo/vector-icons";

const Post = ({ username, title, content, date }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontIcon
          name="user"
          size={24}
          color="#5D669A"
          style={{ paddingHorizontal: 10, paddingVertical: 10 }}
        />
        <View style={styles.user}>
          <Text style={styles.username}>{username}</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content_text}>{content}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    //width: "90%",
    borderColor: "#D1D1D1",
    borderWidth: 1,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  user: {
    flex: 1,
    textAlign: "center"
  },
  username: {
    fontSize: 20,
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#EFEFEF",
    alignItems: "center",
  },
  content: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    paddingVertical: 3,
  },
  content_text: {
    fontSize: 16,
    marginTop: 10,
  },
  date: {
    fontSize: 14,
    color: "dimgray",
    textAlign: "right",
    marginTop: 15,
  },
});