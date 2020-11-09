import React, { useState, useEffect } from "react";
import {
  TouchableHighlight,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

export default function Posts({ route, navigation }) {
  const topic_id = route.params.topic_id;

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
  }, []);

  const _handleOnPress = (post) => {
    navigation.navigate("Comments", { post });
  };

  const getUserDetails = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/users/${id}`);
      const json = await response.json();
      let user = json.first_name.toString() + " " + json.last_name.toString();
      return user;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableHighlight
            style={styles.item}
            onPress={() => {
              _handleOnPress(item);
            }}
          >
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text>{item.body}</Text>
              <Text>{getUserDetails(item.user_id).toString()}</Text>
              <Text>
                {moment(item.created_at).format("Do MMM YY, HH:mm:ss")}
              </Text>
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
    marginHorizontal: 25,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
});
