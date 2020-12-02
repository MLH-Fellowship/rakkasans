import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

// updated icons
import HubConfig from "../assets/icomoon/hub-icons/selection.json";
import HubIcons from "../assets/icomoon/hub-icons/hubConfig";

export default function Icon({ name, size = 40, color = Colors.blue5 }) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {name === "History" || name === "Training" ? (
        <HubIcons name={name} color={color} size={size} config={HubConfig} />
      ) : (
        <MaterialCommunityIcons name={name} color={color} size={size} />
      )}
    </View>
  );
}
