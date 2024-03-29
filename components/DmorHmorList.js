import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { Card, CardItem, Body } from 'native-base';

export default function FallenList({ content }) {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <Card key={item.id}>
          <CardItem>
            <Body>
              <Text style={styles.title}>{item.last_name}, {item.first_name}</Text>
              <Text>Rank: {item.rank}</Text>
              <Text>Date Accepted: {item.date_accepted}</Text>
              {item.notes &&
                <Text>
                  Notes: {item.notes}
                </Text>
              }
          </Body>
          </CardItem>
        </Card>
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
    paddingHorizontal: 30
  },
  header: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center"
  },
  title:{
    fontSize: 15,
    fontWeight: "500",
    paddingBottom: 10
  },
});
