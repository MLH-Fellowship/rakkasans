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

  const images = [
    // would { article1: require("../assets/article-data/article1.jpg") } work? would be better than index logic, will try later
    require('../assets/article-data/article1.jpg'),
    require('../assets/article-data/article2.jpg'),
    require('../assets/article-data/article3.jpg'),
  ];
  useEffect(() => {
    const getNews = async () => {
      const request = await axios.get('http://localhost:1337/news-articles');
      const articles = request.data.map((article, index) => {
        const image = images[index];
        return { ...article, image_location: image };
      });
      setNews(articles);
    };
    getNews();
  }, []);

  const navigation = useNavigation();
  return (
    <>
      <ScrollView style={styles.container}>
        {news.map(({
          id, title, image_location, content,
        }) =>
          // console.log( image )
          (
            <NewsCard
              key={id}
              title={title}
              image={image_location}
              onPress={() => navigation.navigate('News Article', {
                title,
                text: content,
                image: image_location,
              })}
            />
          ))}
      </ScrollView>
    </>
  );
}

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
