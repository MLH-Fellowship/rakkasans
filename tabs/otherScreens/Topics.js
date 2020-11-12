import React, { useState, useEffect } from "react";
import { View, Image, FlatList, StyleSheet, Text } from "react-native";
import RectButton from "../../components/RectButton";
import { useNavigation } from "@react-navigation/native";

export default function Topics({ navigation }) {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    const getTopics = async () => {
      try {
        const response = await fetch('http://localhost:3000/topics')
        const json = await response.json();

        setTopics(json.map(topic => {
          return {
            title: topic.title,
            id: topic.id
          }
        }));
      } catch (error) {
        console.log(error);
      }
    }

    getTopics();
  }, [])

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("../../assets/images/Torri.png")}
          style={{ width: 30, height: 30, top: "30%", marginBottom: 20 }}
        />
      </View>
      <FlatList
        data={topics}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.buttonView}>
            <RectButton
              text={item.title}
              onPress={() => navigation.navigate("Posts", { topic_id: item.id, topic_title: item.title })}
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
