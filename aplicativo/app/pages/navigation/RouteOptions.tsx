import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import {
  View,
  StyleSheet,
  FlatList,
  Platform,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import CloseButton from "../../../components/CloseButton/CloseButton";
import Text from "../../../components/GlobalText";
import ModeButton from "../../../components/ModeButton/ModeButton";
import Separator from "../../../components/Separator/Separator";

import WalkIcon from "../../../assets/icons/walking.svg";
import BusIcon from "../../../assets/icons/bus.svg";
import CarIcon from "../../../assets/icons/car.svg";

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

  const midLat = (hospitalLat + stationLat) / 2;
  const midLng = (hospitalLng + stationLng) / 2;

  const CurrentModeIcon =
    mode === "walk" ? WalkIcon : mode === "bus" ? BusIcon : CarIcon;

  return (
    <View style={styles.screen}>
      <CloseButton />

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
            <Marker
              coordinate={{ latitude: hospitalLat, longitude: hospitalLng }}
              title={params.hospitalName}
              pinColor="#1C5CA2"
            />

            <Marker
              coordinate={{ latitude: stationLat, longitude: stationLng }}
              title={params.stationName}
              pinColor="#e10000ff"
            />

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

        <View style={styles.bottomPanel}>
          <Text style={styles.routeTitle}>
            Rota: {params.stationName} → {params.hospitalName}
          </Text>

          <View style={styles.modeRow}>
            <ModeButton
              label="A pé"
              Icon={WalkIcon}
              active={mode === "walk"}
              onPress={() => setMode("walk")}
            />
            <ModeButton
              label="Ônibus"
              Icon={BusIcon}
              active={mode === "bus"}
              onPress={() => setMode("bus")}
            />
            <ModeButton
              label="Carro"
              Icon={CarIcon}
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
                <TouchableOpacity
                  style={styles.timeRow}
                  onPress={() => {
                    router.push({
                      pathname: "/pages/navigation/RouteStart",
                      params: {
                        fromLat: stationLat,
                        fromLng: stationLng,
                        toLat: hospitalLat,
                        toLng: hospitalLng,
                        hospitalName: params.hospitalName,
                        stationName: params.stationName,
                        selectedTime: item,
                      },
                    });
                  }}
                >
                  <CurrentModeIcon width={24} height={24} />
                  <Text style={styles.timeText}>{item}</Text>
                </TouchableOpacity>
              )}
              ItemSeparatorComponent={() => <Separator />}
            />

          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  mapWrapper: {
    flex: 1, 
    width: "100%",
  },
  bottomPanel: {
    flex: 1, 
    width: "100%",
    paddingHorizontal: 12,
    paddingTop: 8,
    backgroundColor: "#FFFFFF",
  },
  routeTitle: {
    fontSize: 18,
    marginBottom: 8,
    color: "#1C5CA2",
  },
  modeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  sectionTitle: {
    marginTop: 8,
    marginBottom: 4,
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  timesContainer: {
    flex: 1,
    backgroundColor: "#E0E0E0",
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 15,
  },
  timeRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 6,
  },
  timeText: {
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: "#CCC",
  },
});
