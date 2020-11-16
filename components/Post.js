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
        <TouchableOpacity
          onPress={() => {
            alert("user icon");
          }}
        >
          <FontIcon
            name="user"
            size={24}
            color="#5D669A"
            style={{ paddingHorizontal: 10, paddingVertical: 10 }}
          />
        </TouchableOpacity>
        <View style={{ flex: 1, textAlign: "center" }}>
          <Text style={styles.username}>{username}</Text>
        </View>
        {/* <TouchableOpacity
          onPress={() => {
            alert("question icon");
          }}
        >
          <AntIcon
            name="questioncircle"
            size={24}
            color="#5D669A"
            style={{ paddingHorizontal: 10, paddingVertical: 10 }}
          />
        </TouchableOpacity> */}
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content_text}>{content}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View style={styles.footer}>
        {/* <View
          style={{
            flex: 1.5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              alert("like icon");
            }}
          >
            <AntIcon
              name="like2"
              size={22}
              color="black"
              style={{ paddingRight: 3 }}
            />
          </TouchableOpacity>
          <Text>255</Text>
        </View> */}
        {/* <TouchableOpacity
          style={{
            flex: 1,
            textAlign: "center",
          }}
          onPress={() => alert("comment icon")}
        >
          <FontIcon name="commenting-o" size={24} color="black" />
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          style={{
            flex: 1,
            textAlign: "center",
          }}
          onPress={() => alert("bookmark icon")}
        >
          <EnIcon name="bookmark" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            textAlign: "center",
          }}
          onPress={() => alert("more icon")}
        >
          <FIcon name="more-horizontal" size={24} color="black" />
        </TouchableOpacity> */}
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
  header: {
    flexDirection: "row",
    backgroundColor: "#EFEFEF",
    alignItems: "center",
  },
  content: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EFEFEF",
    paddingVertical: 10,
  },
  username: {
    fontSize: 20,
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
