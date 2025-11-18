import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import Text from "../GlobalText";
import { styles } from "./styles";
import HospitalIcon from "../../assets/icons/hospital.svg";
import MetroIcon from "../../assets/icons/subway.svg";

type Place = {
  id: string;
  name: string;
  type: string;
  latitude: number;
  longitude: number;
};

type Props = {
  places: Place[];
  onSelect: (place: Place) => void;
};

export default function FilterPlaces({ places, onSelect }: Props) {
  if (places.length === 0) {
    return (
      <Text style={{ padding: 16, textAlign: "center" }}>
        Nenhum resultado encontrado.
      </Text>
    );
  }

  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      style={styles.list}
      scrollEnabled={false}
      contentContainerStyle={{ paddingBottom: 8 }}
      keyboardShouldPersistTaps="handled"
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => onSelect(item)}
        >
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
    />
  );
}
