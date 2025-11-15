import { View, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function Navegar() {
  return (
    <View style={styles.container}>
      {/* Mapa */}
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

      {/* Barra de Pesquisa */}
      <View style={styles.searchContainer}>
        <SearchBar />
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
    alignItems: "center",
    zIndex: 10,
  },
});
