import React from "react";
import { ListItem, Thumbnail, Text, Body } from "native-base";
import { View, Image, FlatList, StyleSheet } from "react-native";
//a post instance is necessary to track replies
export default function SinglePost(props) {
  let { user, username, content, date } = props.data;
  return (
    <ListItem>
      <Body>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{user}</Text>
          <Text style={styles.username}>{username}</Text>
        </View>
        <Text style={styles.content}>{content}</Text>
        <Text style={styles.date}>{date}</Text>
      </Body>
    </ListItem>
  );
}

const styles = StyleSheet.create({
  nameContainer: {
    flex: 1,
    flexDirection: "row",
  },
  name: {
    fontWeight: "800",
    fontSize: 12,
  },
  username: {
    fontWeight: "200",
    fontSize: 12,
  },
  content: {
    fontSize: 16,
  },
  date: {
    fontWeight: "200",
    fontSize: 12,
  },
});
