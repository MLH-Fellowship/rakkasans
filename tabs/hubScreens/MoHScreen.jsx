import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  StyleSheet, SafeAreaView, View, FlatList, Text,
} from 'react-native';
import { Card, CardItem, Body } from 'native-base';

export default function MoHDocument() {
  const [moh, setMoh] = useState([]);

  useEffect(() => {
    const getMoh = async () => {
      const request = await axios.get("http://192.168.4.23:3001/fallens");
      const mohData = request.data;
      setMoh(mohData);
    };
    getMoh();
  }, []);

  const styles = StyleSheet.create({
    main: {
      marginBottom: 200,
    },
    container: {
      flex: 1,
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      paddingHorizontal: 15,
      paddingVertical: 10,
    },
    title: {
      fontSize: 15,
      fontWeight: '500',
    },
    header: {
      fontSize: 20,
      fontWeight: '700',
      marginTop: 20,
      marginBottom: 20,
      textAlign: 'center',
    },
  });
  return (
    <SafeAreaView>
      <View style={styles.main}>
        <Text style={styles.header}>Medal of Honor Recipients</Text>
        <FlatList
          data={moh}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <Card key={item.id}>
                <CardItem>
                  <Text style={styles.title}>{item.title}</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>{item.unit}</Text>
                    <Text>{item.conflict}</Text>
                    <Text>{item.year}</Text>
                    <Text>Medal of Honor Citation</Text>
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
