import { View, Text, StyleSheet, TouchableOpacity, Platform } from "react-native";
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
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.selectBar}
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
          activeOpacity={0.8}
        >
          <Text style={styles.barText}>Escolha sua Estação de Partida</Text>
          <View style={styles.fakeInput}>
            <Text style={styles.fakeInputText}>Pesquise por uma Estação...</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#D9D9D9",
    alignItems: "center",
  },
  header: {
    width: "90%",
    marginTop: 50,
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
    color: "#1C5CA2",
  },
  mapContainer: {
    width: "100%",
    aspectRatio: 9 / 16,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#EEEEEE",
  },
bottomBar: {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
  zIndex: 20,
},

selectBar: {
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  backgroundColor: "#FFFFFF",
  width: "100%",
  paddingVertical: 16,
  paddingHorizontal: 16,
  elevation: 6,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: -2 },
  shadowOpacity: 0.12,
  shadowRadius: 4,
},

  barText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1C5CA2",
    marginBottom: 8,
  },
  fakeInput: {
    backgroundColor: "#D9D9D9",
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 18,
    width: "100%"
  },
  fakeInputText: {
    color: "#1C5CA2",
    fontSize: 14,
  },

});
