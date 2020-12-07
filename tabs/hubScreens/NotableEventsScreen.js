import React from "react";
import { StyleSheet, SafeAreaView, View, FlatList, Text} from "react-native";
import {  Card, CardItem, Body } from 'native-base';

import notableEventsData from "../../assets/word_documents/notable_events"

export default function NotableEventsScreen({  }) {
  return (
    <SafeAreaView>
      <View style={styles.main}>
        <Text style={styles.header}>History of the 187th Infantry Regiment and the 3d Brigade Combat Team
        </Text>
        <FlatList
          data={notableEventsData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <Card key={item.id}>
                <CardItem>
                  <Text style={styles.title}>{item[0]}</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>Unit: {item[1]}</Text>
                    <Text>Date: {item[3]} {item[2]}, {item[4]}</Text>
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
    marginBottom: 200
  },
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  title:{
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