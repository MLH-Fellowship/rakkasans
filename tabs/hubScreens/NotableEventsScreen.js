import React from "react";
import { StyleSheet, SafeAreaView, View, Text, FlatList} from "react-native";
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
              <Text style={styles.title}>{item[0]}</Text>
              <Text style={styles.unit}>Unit: {item[1]}</Text>
              <Text style={styles.date}>Date: {item[3]} {item[2]}, {item[4]}</Text>
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