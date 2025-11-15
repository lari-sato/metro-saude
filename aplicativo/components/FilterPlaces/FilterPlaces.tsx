import React from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Place = { id: string; nome: string };
type Props = { places: Place[] };

export default function FilterPlaces({ places }: Props) {
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.listItem}>
          <Text style={styles.listItemText}>{item.nome}</Text>
        </TouchableOpacity>
      )}
      style={styles.list}
    />
  );
}