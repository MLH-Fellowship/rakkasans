import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";

export default function FallenList({ content }) {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.container} key={item.id}>
        <View style={styles.textContainer}>
          <Text>Name: </Text>
          <Text>{`${item.first_name} ${item.last_name}`}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>Battalion: </Text>
          <Text>{item.battalion}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>Unit: </Text>
          <Text>{item.unit}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>Rank: </Text>
          <Text>{item.rank}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>Campaign: </Text>
          <Text>{item.campaign}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>Date: </Text>
          <Text>{item.date}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>Location: </Text>
          <Text>{item.location}</Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={content}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
  },
});
