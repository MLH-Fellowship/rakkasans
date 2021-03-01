import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import RectButton from "../../components/RectButton";

export default function Topics({ navigation }) {
  const [topics, setTopics] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/topics")
      .then((res) => res.json().then((json) => setTopics(json)))
      .catch((e) => alert(e.message));
  }, []);

  return (
    <View style={styles.container}>
      {topics ? (
        <FlatList
          data={topics}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.buttonView}>
              <RectButton
                text={item.title}
                onPress={() =>
                  navigation.navigate("Posts", {
                    topic_id: item.id,
                    topic_title: item.title,
                  })
                }
              />
            </View>
          )}
        />
      ) : (
        <ActivityIndicator size="large" />
      )}
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
