import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import CloseButton from "../../components/CloseButton/CloseButton";
import FilterPlaces from "../../components/FilterPlaces/FilterPlaces";

type Station = {
  id: string;
  name: string;
  type: string;
  latitude: number;
  longitude: number;
};

const stations: Station[] = [
  { id: "se",       name: "Sé",        type: "station", latitude: -23.550309, longitude: -46.6342 },
  { id: "paraiso",  name: "Paraíso",   type: "station", latitude: -23.574503, longitude: -46.640739 },
  { id: "ana_rosa", name: "Ana Rosa",  type: "station", latitude: -23.585522, longitude: -46.640471 },
  { id: "vergueiro",name: "Vergueiro", type: "station", latitude: -23.570215, longitude: -46.636077 },
];

export default function ChooseStation() {
  const router = useRouter();

  const params = useLocalSearchParams<{
    hospitalId: string;
    hospitalName: string;
    hospitalLatitude: string;
    hospitalLongitude: string;
  }>();

  const [query, setQuery] = useState("");

  const filteredStations = stations.filter((s) =>
    s.name.toLowerCase().includes(query.toLowerCase())
  );

  function handleSelectStation(station: Station) {
    router.push({
      pathname: "pages/RouteOptions",
      params: {
        hospitalId: params.hospitalId,
        hospitalName: params.hospitalName,
        hospitalLatitude: params.hospitalLatitude,
        hospitalLongitude: params.hospitalLongitude,

        stationId: station.id,
        stationName: station.name,
        stationLatitude: String(station.latitude),
        stationLongitude: String(station.longitude),
      },
    });
  }

  return (
    <View style={styles.container}>
      <CloseButton />

      <Text style={styles.title}>Escolha sua Estação de Partida</Text>

      <View style={styles.searchBox}>
        <TextInput
          placeholder="Buscar estação..."
          placeholderTextColor="#1c5ca2"
          style={styles.input}
          value={query}
          onChangeText={setQuery}
        />
      </View>

      <FilterPlaces
        places={filteredStations}
        onSelect={handleSelectStation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 16,
  },
  searchBox: {
    backgroundColor: "#D9D9D9",
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 14,
  },
  input: {
    fontSize: 15,
    color: "#000",
  },
});
