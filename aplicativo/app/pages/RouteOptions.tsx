import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Platform } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import CloseButton from "../../components/CloseButton/CloseButton";
import { Ionicons } from "@expo/vector-icons";

let MapView: any = View;
let Marker: any = () => null;
let Polyline: any = () => null;

if (Platform.OS !== "web") {
  const maps = require("react-native-maps");
  MapView = maps.default;
  Marker = maps.Marker;
  Polyline = maps.Polyline;
}

type Mode = "walk" | "bus" | "car";

const TIMES_BY_MODE: Record<Mode, string[]> = {
  walk: ["40 min", "42 min", "46 min", "50 min"],
  bus: ["25 min", "28 min", "30 min", "35 min"],
  car: ["15 min", "18 min", "20 min", "22 min"],
};

export default function RouteOptions() {
  const router = useRouter();

  const params = useLocalSearchParams<{
    hospitalName: string;
    hospitalLatitude: string;
    hospitalLongitude: string;

    stationName: string;
    stationLatitude: string;
    stationLongitude: string;
  }>();

  const hospitalLat = Number(params.hospitalLatitude);
  const hospitalLng = Number(params.hospitalLongitude);
  const stationLat = Number(params.stationLatitude);
  const stationLng = Number(params.stationLongitude);

  const [mode, setMode] = useState<Mode>("walk");

  const times = TIMES_BY_MODE[mode];

  // Região centralizada entre os dois marcadores
  const midLat = (hospitalLat + stationLat) / 2;
  const midLng = (hospitalLng + stationLng) / 2;

  return (
    <View style={styles.screen}>
        
      <View style={styles.phoneContainer}>
        {/* HEADER */}
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.backText}>{"<"}</Text>
          </TouchableOpacity>
          <Text style={styles.topBarText}>
            {params.stationName ?? "Estação"}
          </Text>
        </View>

        {/* MAPA SUPERIOR */}
        <View style={styles.mapWrapper}>
          <MapView
            style={StyleSheet.absoluteFill}
            initialRegion={{
              latitude: midLat,
              longitude: midLng,
              latitudeDelta: 0.03,
              longitudeDelta: 0.03,
            }}
          >
            {/* Marcador do hospital */}
            <Marker
              coordinate={{ latitude: hospitalLat, longitude: hospitalLng }}
              title={params.hospitalName}
              pinColor="#1C5CA2"
            />

            {/* Marcador da estação */}
            <Marker
              coordinate={{ latitude: stationLat, longitude: stationLng }}
              title={params.stationName}
              pinColor="#098553"
            />

            {/* Linha entre eles */}
            <Polyline
              coordinates={[
                { latitude: hospitalLat, longitude: hospitalLng },
                { latitude: stationLat, longitude: stationLng },
              ]}
              strokeColor="#1C5CA2"
              strokeWidth={4}
            />
          </MapView>
        </View>

        {/* PAINEL INFERIOR */}
        <View style={styles.bottomPanel}>
          <Text style={styles.routeTitle}>
            Rota: {params.stationName} → {params.hospitalName}
          </Text>

          {/* Botões de modo */}
          <View style={styles.modeRow}>
            <ModeButton
              label="A pé"
              icon="walk"
              active={mode === "walk"}
              onPress={() => setMode("walk")}
            />
            <ModeButton
              label="Ônibus"
              icon="bus"
              active={mode === "bus"}
              onPress={() => setMode("bus")}
            />
            <ModeButton
              label="Carro"
              icon="car"
              active={mode === "car"}
              onPress={() => setMode("car")}
            />
          </View>

          <Text style={styles.sectionTitle}>Estimativa de Tempo</Text>

          <View style={styles.timesContainer}>
            <FlatList
              data={times}
              keyExtractor={(item, index) => `${mode}-${index}`}
              renderItem={({ item }) => (
                <View style={styles.timeRow}>
                  <Ionicons name="time" size={18} color="#000" />
                  <Text style={styles.timeText}>{item}</Text>
                </View>
              )}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

function ModeButton({
  label,
  icon,
  active,
  onPress,
}: {
  label: string;
  icon: "walk" | "bus" | "car";
  active: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.modeButton, active && styles.modeButtonActive]}
    >
      <Ionicons
        name={icon === "walk" ? "walk" : icon === "bus" ? "bus" : "car"}
        size={18}
        color={active ? "#FFFFFF" : "#000000"}
      />
      <Text
        style={[styles.modeButtonText, active && styles.modeButtonTextActive]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
  phoneContainer: {
    width: "90%",
    aspectRatio: 9 / 16,
    backgroundColor: "#F5F5F5",
    borderRadius: 16,
    overflow: "hidden",
  },
  topBar: {
    height: 36,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    backgroundColor: "#E0E0E0",
  },
  backText: {
    fontSize: 18,
    marginRight: 8,
  },
  topBarText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#1C5CA2",
  },
  mapWrapper: {
    flex: 1.2,
    backgroundColor: "#DDD",
  },
  bottomPanel: {
    flex: 1.3,
    paddingHorizontal: 12,
    paddingTop: 8,
  },
  routeTitle: {
    fontSize: 13,
    marginBottom: 8,
  },
  modeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  modeButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
    marginHorizontal: 4,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#CCC",
    backgroundColor: "#EEE",
  },
  modeButtonActive: {
    backgroundColor: "#1C5CA2",
    borderColor: "#1C5CA2",
  },
  modeButtonText: {
    marginLeft: 4,
    fontSize: 12,
    color: "#000",
  },
  modeButtonTextActive: {
    color: "#FFF",
  },
  sectionTitle: {
    marginTop: 8,
    marginBottom: 4,
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
  },
  timesContainer: {
    flex: 1,
    backgroundColor: "#E0E0E0",
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  timeRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
  },
  timeText: {
    marginLeft: 8,
    fontSize: 13,
  },
  separator: {
    height: 1,
    backgroundColor: "#CCC",
  },
});
