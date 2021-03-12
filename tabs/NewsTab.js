import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import NewsCard from "../components/NewsCard";
import Colors from "../constants/Colors";
import { ScrollView } from "react-native-gesture-handler";

export default function NewsTab() {
  let [news, setNews] = useState([]);

  const images = [
    require("../assets/article-data/article1.jpg"),
    require("../assets/article-data/article2.jpg"),
    require("../assets/article-data/article3.jpg"),
  ];
  useEffect(() => {
    const getNews = async () => {
      let news = await axios.get("http://localhost:1337/news-articles");
      news = news.data.map((news, index) => {
        let image = images[index];
        return { ...news, image_location: image };
      });
      setNews(news);
    };
    getNews();
  }, []);

  const navigation = useNavigation();
  return (
    <>
      <ScrollView style={styles.container}>
        {news.map(({ id, title, image_location, content }) => {
          //console.log( image )
          return (
            <NewsCard
              key={id}
              title={title}
              image={image_location}
              onPress={() =>
                navigation.navigate("News Article", {
                  title: title,
                  text: content,
                  image: image_location,
                })
              }
            />
          );
        })}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    width: "100%",
  },
  view: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
