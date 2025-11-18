import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import CloseButton from "../../../components/CloseButton/CloseButton";
import MetroIcon from "../../../assets/icons/subway.svg";

let MapView: any = View;
let Marker: any = () => null;

if (Platform.OS !== "web") {
  const maps = require("react-native-maps");
  MapView = maps.default;
  Marker = maps.Marker;
}

export default function RouteStart() {
  const router = useRouter();
  const params = useLocalSearchParams<{
    fromLat?: string; fromLng?: string; toLat?: string; toLng?: string;
    hospitalName?: string; stationName?: string; selectedTime?: string;
  }>();

  const time = params.selectedTime

  const fromLat = params.fromLat ? Number(params.fromLat) : undefined;
  const fromLng = params.fromLng ? Number(params.fromLng) : undefined;
  const toLat = params.toLat ? Number(params.toLat) : undefined;
  const toLng = params.toLng ? Number(params.toLng) : undefined;

  const mapCenterLat = typeof fromLat === "number" && !isNaN(fromLat)
    ? fromLat
    : -23.55;
  const mapCenterLng = typeof fromLng === "number" && !isNaN(fromLng)
    ? fromLng
    : -46.63;

  return (
    <View style={styles.screen}>
      <MapView
        style={StyleSheet.absoluteFill}
        initialRegion={{
          latitude: mapCenterLat,
          longitude: mapCenterLng,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {(typeof fromLat === "number" && typeof fromLng === "number" && !isNaN(fromLat) && !isNaN(fromLng)) && (
          <Marker coordinate={{ latitude: fromLat, longitude: fromLng }} pinColor="#1C5CA2" />
        )}
        {(typeof toLat === "number" && typeof toLng === "number" && !isNaN(toLat) && !isNaN(toLng)) && (
          <Marker coordinate={{ latitude: toLat, longitude: toLng }} pinColor="#1C5CA2" />
        )}
      </MapView>

      <View style={styles.bottomSheet}>
        <View style={styles.sheetBar} />
        <CloseButton />
        <View style={styles.infoRow}>
          <MetroIcon width={36} height={36} style={styles.icon} />
          <Text style={styles.timeText}>{time}</Text>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.primaryBtn}>
            <Text style={styles.primaryBtnText}>Iniciar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryBtn}>
            <Text style={styles.secondaryBtnText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#fff" },
  bottomSheet: {
    position: "absolute",
    left: 0, right: 0, bottom: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 22, borderTopRightRadius: 22,
    shadowColor: "#000", shadowOpacity: 0.12, shadowRadius: 8, elevation: 9,
    paddingBottom: 27, paddingHorizontal: 22, paddingTop: 18,
    minHeight: 140,
  },
  sheetBar: {
    alignSelf: "center",
    width: 48, height: 5, borderRadius: 2.5,
    backgroundColor: "#ccc", marginBottom: 12,
  },
  closeBtn: {
    position: "absolute",
    right: 18, top: 10,
    zIndex: 10,
    backgroundColor: "#ececec",
    borderRadius: 15,
    width: 28, height: 28, alignItems: "center", justifyContent: "center",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 12
  },
  icon: {
    fontSize: 36, marginRight: 12,
  },
  timeText: {
    fontSize: 30, fontWeight: "600", color: "#222",
  },
  buttonRow: {
    flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 8
  },
  primaryBtn: {
    flex: 1,
    backgroundColor: "#1C5CA2",
    paddingVertical: 12, borderRadius: 10, alignItems: "center",
    marginRight: 10,
  },
  primaryBtnText: { color: "#fff", fontWeight: "700", fontSize: 16 },
  secondaryBtn: {
    flex: 1,
    backgroundColor: "#e9e9e9",
    paddingVertical: 12, borderRadius: 10, alignItems: "center",
  },
  secondaryBtnText: { color: "#555", fontWeight: "600", fontSize: 16 },
});
