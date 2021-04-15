import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Linking,
  Image,
} from "react-native";
import { Card, CardItem } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import getData from "../../assets/Async/getData";
export default function The38DEHistoryScreen() {
  const [history, setHistory] = useState([]);

  console.log(history);
  useEffect(() => {
    const getHistory = async () => {
      let { jwt } = getData();
      const request = await axios.get("http://localhost:3001/3-bde-histories", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      const response = request.data;
      setHistory(response);
    };
    getHistory();
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
      fontWeight: "500",
    },
    header: {
      fontSize: 20,
      fontWeight: "700",
      textAlign: "center",
    },
    description: {
      fontSize: 13,
    },
    image: {
      width: "100%",
      height: "80%",
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header} />
        {history.map((type) => (
          <View key={type.id}>
            <Card>
              <Image style={styles.image} source={type.image} />
              <CardItem>
                <Text style={styles.title}>{type.title}</Text>
              </CardItem>
              <CardItem>
                <View>
                  <Text>Document Links:</Text>
                  <Text
                    style={{ color: "blue", fontSize: 13 }}
                    onPress={() => Linking.openURL(`${type.pdf[0].url}`)}
                  >
                    - {type.pdf[0].name}
                  </Text>
                  <Text
                    style={{ color: "blue", fontSize: 13 }}
                    onPress={() => Linking.openURL(`${type.pdf[1].url}`)}
                  >
                    - {type.pdf[1].name}
                  </Text>
                  <Text
                    style={{ color: "blue", fontSize: 13 }}
                    onPress={() => Linking.openURL(`${type.pdf[2].url}`)}
                  >
                    - {type.pdf[2].name}
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
