import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import NewsCard from '../components/NewsCard';
import Colors from '../constants/Colors';

export default function NewsTab() {
  const [news, setNews] = useState([]);
  console.log(news)

  useEffect(() => {
    const getNews = async () => {
      const request = await axios.get(
        // 'http://192.168.1.230:3001/news-articles',
        "http://localhost:3001/news-articles"
      );
      const articles = request.data;
      setNews(articles);
    };
    getNews();
  }, []);

  const navigation = useNavigation();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.white,
      width: '100%',
    },
    view: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
  });
  return (
    <>
      <ScrollView style={styles.container}>
        {news.map(({
          Content, Image, Title, id,
        }) => {
          const image_source = (Image);
          return (
            <NewsCard
              key={id}
              title={Title}
              image={image_source}
              onPress={() => navigation.navigate('News Article', {
                Title,
                text: Content,
                image: image_source,
              })}
            />
          );
        })}
      </ScrollView>
    </>
  );
}
