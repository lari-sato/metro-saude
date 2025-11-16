import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import HospitalIcon from "../../assets/icons/hospital.svg";
import MetroIcon from "../../assets/icons/subway.svg";

type Place = { id: string; name: string; type: string };
type Props = { places: Place[] };

export default function FilterPlaces({ places }: Props) {
  return places.length === 0 ? (
    <Text style={{ padding: 16, textAlign: "center" }}>
      Nenhum resultado encontrado.
    </Text>
  ) : (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.listItem}>
          <View style={styles.iconContainer}>
            {item.type === "hospital" ? (
              <HospitalIcon width={24} height={24} />
            ) : (
              <MetroIcon width={24} height={24} />
            )}
          </View>
          <Text style={styles.listItemText}>{item.name}</Text>
        </TouchableOpacity>
      )}
      style={styles.list}
    />
  );
}
