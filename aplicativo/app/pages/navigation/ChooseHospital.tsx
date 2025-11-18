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
    name: "Hospital das Clínicas – FMUSP",
    type: "hospital",
    latitude: -23.561414,
    longitude: -46.655881
  },
  {
    id: "2",
    name: "Hospital Santa Catarina",
    type: "hospital",
    latitude: -23.557665,
    longitude: -46.648809
  },
  {
    id: "3",
    name: "Hospital São Paulo (UNIFESP)",
    type: "hospital",
    latitude: -23.589793,
    longitude: -46.638571
  },
  {
    id: "4",
    name: "Hospital do Servidor Público Estadual",
    type: "hospital",
    latitude: -23.590408,
    longitude: -46.642682
  },
  {
    id: "5",
    name: "Hospital Beneficência Portuguesa",
    type: "hospital",
    latitude: -23.554370,
    longitude: -46.632315
  },
  {
    id: "6",
    name: "Hospital Mandaqui",
    type: "hospital",
    latitude: -23.488956,
    longitude: -46.634046
  },
  {
    id: "7",
    name: "Hospital Sabará",
    type: "hospital",
    latitude: -23.561540,
    longitude: -46.615146
  },
  {
    id: "8",
    name: "Hospital Ipiranga",
    type: "hospital",
    latitude: -23.602707,
    longitude: -46.609904
  },
  {
    id: "9",
    name: "Hospital do Grajaú",
    type: "hospital",
    latitude: -23.743926,
    longitude: -46.634426
  },
  {
    id: "10",
    name: "Hospital Belém",
    type: "hospital",
    latitude: -23.530105,
    longitude: -46.572047
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
          <SearchBar value={query} onChange={setQuery} mode="hospital" />
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
    fontFamily: "Poppins_500Medium",
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
