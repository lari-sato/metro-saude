import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterPlaces from "../../components/FilterPlaces/FilterPlaces";

const destinations = [
  { id: "1", nome: "Hospital São Lucas" },
  { id: "2", nome: "Hospital Central" },
  { id: "3", nome: "Hospital Vida" },
  { id: "4", nome: "Hospital Esperança" }
];

export default function Navegar() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const filtered = destinations.filter(
    place => place.nome.toLowerCase().includes(query.toLowerCase())
  );

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
      top: 90, // abaixo da barra de busca
      left: 16,
      right: 16,
      zIndex: 11,
      backgroundColor: "#fff",
      borderRadius: 8,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 5, // para sombra no Android
      maxHeight: 300, // limita altura máxima da lista
      paddingVertical: 8,
    },
});