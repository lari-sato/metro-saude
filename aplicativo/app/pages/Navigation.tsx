import React, { useState } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { useRouter } from "expo-router";
import SearchBar from "../../components/SearchBar/SearchBar";

let MapView: any = View;

if (Platform.OS !== "web") {
  MapView = require("react-native-maps").default;
}

export default function Navegar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.55052,
          longitude: -46.633308,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        showsUserLocation
        showsMyLocationButton={false}
      />

      <View style={styles.searchContainer}>
        <SearchBar
          value={query}
          onChange={setQuery}
          onFocus={() => router.push("pages/ChooseHospital")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  searchContainer: {
  position: "absolute",
  top: 40,
  left: 0,
  right: 0,
  alignItems: "center",   // CENTRALIZADO
  zIndex: 10,
},
});

