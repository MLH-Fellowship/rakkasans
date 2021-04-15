import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyleSheet, SafeAreaView, Text, View, Linking } from "react-native";
import { Card, CardItem } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import getData from "../../assets/Async/getData";

export default function BattPolicyScreen() {
  const [policy, setPolicy] = useState([]);

  useEffect(() => {
    const getPolicy = async () => {
      let { jwt } = getData();
      const request = await axios.get("http://localhost:3001/hhc-policies", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      const response = request.data;
      setPolicy(response);
    };
    getPolicy();
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
      fontSize: 16,
    },
    header: {
      fontSize: 20,
      fontWeight: "700",
      textAlign: "center",
    },
    description: {
      fontSize: 13,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header} />
        {policy.map((type, i) => (
          <View key={i}>
            <Card>
              <CardItem>
                <View>
                  <Text> Document Link:</Text>
                  <Text
                    style={{ color: "blue", fontSize: 13 }}
                    onPress={() => Linking.openURL(`${type.pdf[0].url}`)}
                  >
                    - {type.pdf[0].name}
                  </Text>
                </View>
              </CardItem>
            </Card>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
