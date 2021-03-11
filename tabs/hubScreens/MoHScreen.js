import React from "react";
import { StyleSheet, SafeAreaView, View, FlatList, Text } from "react-native";
import { Card, CardItem, Body } from "native-base";

import MOHData from "../../assets/word_documents/MoH";

export default function MoHDocument() {
  return (
    <SafeAreaView>
      <View style={styles.main}>
        <Text style={styles.header}>Medal of Honor Recipients</Text>
        <FlatList
          data={MOHData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <Card key={item.id}>

                <CardItem>
                  <Text style={styles.title}>{item.name}</Text>
                </CardItem>
                
                <CardItem>
                  <Body>
                    <Text>{item.regiment}</Text>
                    <Text>{item.conflict}</Text>
                    <Text>{item.year}</Text>
                    <Text>{item.medal}</Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>{item.description}</Text>
                  </Body>
                </CardItem>
              </Card>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    marginBottom: 200,
  },
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "500",
  },
  header: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
  },
});
