import React, { useState, useEffect } from "react";
import {
  TouchableHighlight,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import moment from "moment";
import Colors from "../../constants/Colors";
import { useIsFocused } from "@react-navigation/native";
import Post from "../../components/Post";
import Button from "react-native-button";

export default function Posts({ route, navigation }) {
  const topic_id = route.params.topic_id;
  const topic_title = route.params.topic_title;

  const isFocused = useIsFocused();

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getTopics = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/topics/${topic_id}/posts`
        );
        const json = await response.json();
        setPosts(json);
      } catch (error) {
        console.log(error);
      }
    };

    getTopics();
  }, [isFocused]);

  const _handleOnPress = (post) => {
    navigation.navigate("Comments", { post });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.topicTitle}>{topic_title}</Text>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableHighlight
            style={styles.item}
            onPress={() => {
              _handleOnPress(item);
            }}
          >
            <View>
              <Post
                username={item.first_name + " " + item.last_name}
                title={item.title}
                content={item.body}
                date={moment(item.created_at).format("Do MMM YY, HH:mm:ss")}
              />
            </View>
          </TouchableHighlight>
        )}
      />
      <View style={{ width: "80%", marginBottom: 5 }}>
        <Button
          containerStyle={{
            padding: 10,
            height: 45,
            overflow: "hidden",
            borderRadius: 20,
            backgroundColor: Colors.primary,
          }}
          disabledContainerStyle={{ backgroundColor: "grey" }}
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            fontFamily: "fira-sans",
          }}
          onPress={() =>
            navigation.navigate("New Post", {
              topic_id: topic_id,
              topic_title: topic_title,
            })
          }
        >
          Submit New Post
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  topicTitle: {
    fontSize: 30,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
  },
});
