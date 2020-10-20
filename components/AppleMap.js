import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps"; // remove PROVIDER_GOOGLE import if not using Google Maps

export default ({ height }) => (
  <View style={[styles.container, { height: height }]}>
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      region={{
        latitude: 36.6634,
        longitude: -87.4774,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
      height="80%"
    >
      <Marker
        coordinate={{
          latitude: 36.6637,
          longitude: -87.4774,
        }}
        title={"Base"}
        pinColor="blue"
      />
    </MapView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
