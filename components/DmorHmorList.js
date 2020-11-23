import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";

export default function FallenList({ content }) {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.container}  key={item.id}>
        <Text style={styles.name}>{item.last_name}, {item.first_name}</Text>
        <Text>Rank: {item.rank}</Text>
        <Text>Date Accepted: {item.date_accepted}</Text>
        {item.notes &&
          <Text>Notes: {item.notes}</Text>
        }
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={content}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  name:{
    fontSize: 15,
    fontWeight: "500",
  },
  header: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center"
  }
});
