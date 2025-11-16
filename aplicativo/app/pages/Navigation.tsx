import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterPlaces from "../../components/FilterPlaces/FilterPlaces";

const hospitals = [
  { id: "1", name: "Hospital São Lucas", type: "hospital" },
  { id: "2", name: "Hospital Central", type: "hospital" },
  { id: "3", name: "Hospital Vida", type: "hospital" },
  { id: "4", name: "Hospital Esperança", type: "hospital" }
];

export default function Navegar() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const filtered = hospitals
    .filter(place => place.type === "hospital")
    .filter(place => place.name.toLowerCase().includes(query.toLowerCase()));

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
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>

      {isFocused && (
        <View style={styles.listContainer}>
          <FilterPlaces places={filtered} />
        </View>
      )}
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
    alignItems: "center",
    zIndex: 10,
  },
  listContainer: {
    position: "absolute",
    top: 90,
    left: 16,
    right: 16,
    zIndex: 11,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
    maxHeight: 300,
    paddingVertical: 8,
  },
});
