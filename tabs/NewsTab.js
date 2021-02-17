import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import NewsCard from "../components/NewsCard";
import Colors from "../constants/Colors";
import { ScrollView } from "react-native-gesture-handler";

export default function NewsTab() {
  const images = [
    require("../assets/article-data/article1.jpg"),
    require("../assets/article-data/article2.jpg"),
    require("../assets/article-data/article3.jpg"),
  ];
  const articles = [
    "Charles Peters, who commanded D Co 126th IN, 32nd DIV throughout the Meuse-Argonne battle was on the firing line when the armistice took effect in 1919. The Meuse - Argonne offensive was a significant part of final Allied offensive of World War I and stretched across the entire Western Front. This led to the demobilization of what is now 3BCT at Camp Lee, VA on this day(June 7th) in 1919. Two years later, the unit was reconstituted in the Organized Reserves as Headquarters and Headquarters Company, 160th IN BDE and assigned to the 80th DIV.#History",
    "On this day in #ScreamingEagle history: June 10, 1943. The 506th Parachute Infantry Regiment “Currahee” is attached to the 101st Airborne Division. #BandofBrothers",
    "A CO’s SGT Fuller directed his IHMEE team (SPC Hamilton, SPC Fritz, PVT LOVE) as they assisted in the establishment of a maintenance tent in front of Blanchfield Army Community Hospital.The tent will be utilized as a drive - thru COVID - 19 screening and treatment area. 21 BEB takes pride in being able to contribute to measures that will benefit the community during this pandemic. A Company, 21st Engineer Battalion, 3rd BCT 101st Airborne Division - AASLT",
  ];

  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <NewsCard
        title="Demobilization of 3BCT"
        image={images[0]}
        onPress={() =>
          navigation.navigate("News Article", {
            title: "Demobilization of 3BCT",
            text: articles[0],
            image: images[0],
          })
        }
      />
      <NewsCard
        title="#ScreamingEagle History"
        image={images[1]}
        onPress={() =>
          navigation.navigate("News Article", {
            title: "#ScreamingEagle History",
            text: articles[1],
            image: images[1],
          })
        }
      />
      <NewsCard
        title="21 BEB - COVID Tent"
        image={images[2]}
        onPress={() =>
          navigation.navigate("News Article", {
            title: "21 BEB - COVID Tent",
            text: articles[2],
            image: images[2],
          })
        }
      />
    </ScrollView>
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
