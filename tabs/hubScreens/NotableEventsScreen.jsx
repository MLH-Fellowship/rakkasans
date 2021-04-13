import React, { useEffect, useState } from 'react';
import {
  StyleSheet, SafeAreaView, View, FlatList, Text,
} from 'react-native';
import { Card, CardItem, Body } from 'native-base';
import axios from 'axios';

export default function NotableEventsScreen() {
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

  const [notables, setNotables] = useState();

  useEffect(() => {
    const getNotables = async () => {
      const request = await axios.get('http://localhost:3001/notable-events');
      const response = request.data;
      console.log(response);
      setNotables(response);
    };
    getNotables();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.main}>
        <Text style={styles.header}>
          History of the 187th Infantry Regiment and the 3d Brigade Combat Team
        </Text>
        <FlatList
          data={notables}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <Card key={item.id}>
                <CardItem>
                  <Text style={styles.title}>{item[0]}</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>
                      Unit:
                      {item.Unit}
                    </Text>
                    <Text>
                      Date:
                      {item.Date}
                      {' '}
                      {item.Year}
                      ,
                      {' '}
                      {item.Description}
                    </Text>
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
