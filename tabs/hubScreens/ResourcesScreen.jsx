import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import SquareButton from "../../components/SquareButton";
import Colors from "../../constants/Colors";

export default function ResourcesScreen() {
  const navigation = useNavigation();
  let [resources, setResources] = useState([]);

  useEffect(() => {
    const getArmyResources = async () => {
      let request = await axios.get("http://localhost:3001/resources");
      console.log(request.data);
      let armyResources = request.data.filter(
        (data) => data.resource_type === "army"
      );

      setResources(armyResources);
    };

    getArmyResources();
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.white,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
    buttonView: {
      width: "90%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
      paddingBottom: 20,
    },
  });
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/Torri.png")}
        style={{ width: 30, height: 30, top: "-8%" }}
      />
      {resources.map(
        ({
          icon_name,
          resource_title,
          phone_number,
          email,
          grad_times,
          location,
          report_times,
        }) => (
          <View style={[styles.buttonView]}>
            <SquareButton
              name={icon_name}
              text={resource_title}
              buttonSize={65}
              textSize={12}
              iconSize={38}
              onPress={() =>
                navigation.navigate("Resource", {
                  name: resource_title,
                  email: email,
                  location: location,
                  phone: phone_number,
                  grad_times: grad_times,
                  report_times: report_times,
                  // image: require("../../assets/images/HHC.png"),
                })
              }
            />
          </View>
        )
      )}
    </View>
  );
}
