import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import { Card, CardItem } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';

export default function DivisionHistoryData() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const getHistory = async () => {
      const request = await axios.get(
        'http://localhost:3001/division-histories',
      );
      const response = request.data;
      setHistory(response);
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
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header} />
        {history.map((lemons, id) => (
          <Card key={id}>
            <CardItem>
              <Text>{lemons.Description}</Text>
            </CardItem>
          </Card>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
