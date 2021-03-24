import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PDFReader from "rn-pdf-reader-js";

const FallenRak19 = () => {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      margin: 1
    },
    pdf: {
      width: "100%",
      height: "100%",
    },
  });

  return(
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <PDFReader
          style={styles.pdf}
          source={{
            uri:
              "https://rakapp.blob.core.windows.net/strapi/strapi/assets/Consolidated_Casualty_Database_May_2017_ed975d78b7.pdf",
          }}
        />
    </View>
  )
}

export default FallenRak19
