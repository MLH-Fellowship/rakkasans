import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Linking,
  Image
} from "react-native";
import { Card, CardItem } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import Dimensions from "../../constants/Dimensions";

export default function DMOR_HMOR_Screen() {
  const [dmor, setDmor] = useState([]);

  
  useEffect(() => {
    const getDmor = async () => {
      const request = await axios.get("http://localhost:3001/DMOR-HMORS");
      const response = request.data;
      setDmor(response);
    };
    getDmor();
  }, []);

    const url = { uri: "https://picsum.photos/300/300" };
    const titleWidth = Dimensions.window.width * 0.27;
    const contentWidth = Dimensions.window.width * 0.65;

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
        {dmor.map((type, id) => (
          <View>
            <Card key={id}>
              <Image style={styles.image} source={url} />
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
                </View>
              </CardItem>
            </Card>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
