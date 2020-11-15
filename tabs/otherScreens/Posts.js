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
import RectButton from '../../components/RectButton';

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
  }, [isFocused])

  const _handleOnPress = (post) => {
    navigation.navigate("Comments", { post });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.topicTitle}>{topic_title}</Text>
      </View>
      <RectButton
        text="Submit New Post"
        onPress={() =>
          navigation.navigate(
            "New Post",
            { topic_id: topic_id, topic_title: topic_title }
          )
        }
      />
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
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.postInfo}>{item.first_name + " " + item.last_name} | {moment(item.created_at).format("Do MMM YY, HH:mm:ss")}</Text>
            </View>
          </TouchableHighlight>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 10
  },
  item: {
    marginHorizontal: 16,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingVertical: 10
  },
  title: {
    fontSize: 22,
    fontWeight: '500'
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
  postInfo: {
    color: "grey"
  },
  topicTitle: {
    fontSize: 30,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center"
  }
});
