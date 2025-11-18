import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Text from "../../../components/GlobalText";
import { useRouter } from "expo-router";
import SearchBar from "../../../components/SearchBar/SearchBar";
import CloseButton from "../../../components/CloseButton/CloseButton";
import FilterPlaces from "../../../components/FilterPlaces/FilterPlaces";

type Hospital = {
  id: string;
  name: string;
  type: string;
  latitude: number;
  longitude: number;
};

const hospitals: Hospital[] = [
  {
    id: "1",
    name: "Hospital São Lucas",
    type: "hospital",
    latitude: -23.637683617199336,
    longitude: -46.71999335331073,
  },
  {
    id: "2",
    name: "Hospital Central",
    type: "hospital",
    latitude: -23.552,
    longitude: -46.63,
  },
  {
    id: "3",
    name: "Hospital Vida",
    type: "hospital",
    latitude: -23.548,
    longitude: -46.635,
  },
  {
    id: "4",
    name: "Hospital Esperança",
    type: "hospital",
    latitude: -23.546,
    longitude: -46.645,
  },
];

export default function ChooseHospital() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const filteredHospitals = hospitals.filter((h) =>
    h.name.toLowerCase().includes(query.toLowerCase())
  );

  function handleSelectHospital(hospital: Hospital) {
    router.push({
      pathname: "pages/navigation/SelectedHospital",
      params: {
        id: hospital.id,
        name: hospital.name,
        latitude: String(hospital.latitude),
        longitude: String(hospital.longitude),
      },
    });
  }

  return (
    <View style={styles.container}>
      <CloseButton />

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <SearchBar value={query} onChange={setQuery} />
        </View>
      </View>

      <Text style={styles.title}>Hospitais mais próximos:</Text>
      <FilterPlaces places={filteredHospitals} onSelect={handleSelectHospital} />
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
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Poppins", 
    marginBottom: 18,
  },
  searchContainer: {
    marginBottom: 14,
    alignItems: "flex-start", 
  },
  searchWrapper: {
    width: "85%", 
  },
});
