import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { Card, CardItem, Body } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import getData from "../../assets/Async/getData";

export default function LineageHonorsScreen() {
  const [honors, setHonors] = useState([]);

  useEffect(() => {
    const getHonors = async () => {
      let { jwt } = await getData();
      const request = await axios.get("http://localhost:3001/lineage-honors", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      const response = request.data;
      setHonors(response);
    };
    getHonors();
  }, []);

  const styles = StyleSheet.create({
    container: {
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
    description: {
      fontSize: 12,
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>187th Infantry Regiment</Text>
        {honors.map((type) => (
          <Card key={type.id}>
            <CardItem>
              <Text style={styles.title}>{type.type}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.description}>{type.description}</Text>
              </Body>
            </CardItem>
          </Card>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
