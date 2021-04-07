import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Linking,
  Image,
} from 'react-native';
import { Card, CardItem } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

export default function BattScreen() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getHistory = async () => {
      const request = await axios.get('http://localhost:3001/blue-books');
      const response = request.data;
      setBook(response);
    };
    getHistory();
  }, []);

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      paddingHorizontal: 15,
      paddingVertical: 10,
    },
    pdf: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 16,
      fontWeight: '500',
      textAlign: 'center',
      margin: 6,
    },
    description: {
      fontSize: 14,
      textAlign: 'center',
      margin: 6,
    },
    header: {
      fontSize: 20,
      fontWeight: '700',
      textAlign: 'center',
    },
    image: {
      width: '100%',
      height: '60%',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header} />
        {book.map((type, id) => (
          <View>
            <Card key={id}>
              <CardItem>
                <Text style={styles.title}>{type.title}</Text>
              </CardItem>
              <Image style={styles.image} source={type.image} />
              <CardItem>
                <Text style={styles.description}>{type.description}</Text>
              </CardItem>
              <CardItem>
                <View style={styles.pdf}>
                  <Text>Blue Book Link:</Text>
                  <Text
                    style={{ color: 'blue', fontSize: 13 }}
                    onPress={() => Linking.openURL(`${type.pdf[0].url}`)}
                  >
                    -
                    {' '}
                    {type.pdf[0].name}
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
