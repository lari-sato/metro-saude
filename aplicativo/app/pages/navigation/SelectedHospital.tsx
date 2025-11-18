import { View, StyleSheet, TouchableOpacity, Platform } from "react-native";
import Text from "../../../components/GlobalText";
import { useLocalSearchParams, useRouter } from "expo-router";
import CloseButton from "../../../components/CloseButton/CloseButton";

let MapView: any = View;
let Marker: any = () => null;

if (Platform.OS !== "web") {
  const maps = require("react-native-maps");
  MapView = maps.default;
  Marker = maps.Marker;
}

export default function SelectedHospital() {
  const router = useRouter();
  const params = useLocalSearchParams<{
    id: string;
    name: string;
    latitude: string;
    longitude: string;
  }>();

  const hospitalLat = Number(params.latitude);
  const hospitalLng = Number(params.longitude);

  return (
    <View style={styles.screen}>
      <CloseButton />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.replace("pages/Navigation")}>
          <Text style={styles.backText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          {params.name ?? "Hospital selecionado"}
        </Text>
      </View>

      <View style={styles.mapContainer}>
        <MapView
          style={StyleSheet.absoluteFill}
          initialRegion={{
            latitude: hospitalLat,
            longitude: hospitalLng,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={{ latitude: hospitalLat, longitude: hospitalLng }}
            title={params.name}
            description="Hospital selecionado"
            pinColor="#1C5CA2"
          />
        </MapView>
      </View>

      <TouchableOpacity
        style={styles.bottomCard}
        onPress={() =>
          router.push({
            pathname: "pages/navigation/ChooseStation",
            params: {
              hospitalId: params.id,
              hospitalName: params.name,
              hospitalLatitude: String(hospitalLat),
              hospitalLongitude: String(hospitalLng),
            },
          })
        }
      >
        <Text style={styles.bottomTitle}>Escolha sua Estação de Partida</Text>
        <View style={styles.fakeInput}>
          <Text style={styles.fakeInputText}>Pesquise por uma Estação...</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#111111",
    alignItems: "center",
  },
  header: {
    width: "90%",
    marginTop: 40,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  backText: {
    fontSize: 20,
    marginRight: 8,
    color: "#FFFFFF",
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#C0C0C0",
  },
  mapContainer: {
    width: "90%",
    aspectRatio: 9 / 16,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#EEEEEE",
  },
  bottomCard: {
    position: "absolute",
    bottom: 100,
    width: "80%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  },
  bottomTitle: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 8,
  },
  fakeInput: {
    backgroundColor: "#D9D9D9",
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  fakeInputText: {
    color: "#1C5CA2",
  },
});
