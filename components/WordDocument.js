import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, ScrollView, View } from "react-native";
import Paragraph from "./Paragraph";
import Title from "./Title";
import Subtitle from "./Subtitle";

export default function WordDocument({ page }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        {page.map((section) => {
          if (section.type === "Paragraph") {
            return <Paragraph content={section.content} />;
          }

          if (section.type === "Title") {
            return <Title content={section.content} />;
          }

          if (section.type === "Subtitle") {
            return <Subtitle content={section.content} />;
          }
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "column",
  },
});

WordDocument.propTypes = {
  children: PropTypes.object,
  page: PropTypes.Array,
};
