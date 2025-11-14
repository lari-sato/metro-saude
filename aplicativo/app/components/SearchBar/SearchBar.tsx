import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

export function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Pesquise por um Hospital..."
        placeholderTextColor="#1c5ca2"
        aria-label="Pesquisar"
        value={query}
        onChangeText={setQuery}
      />

      <Ionicons 
        name="search"
        size={20}
        color="#1c5ca2"
        style={styles.icon} />

    </View>
  );
}
