import React from "react";
import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

type SearchBarProps = {
  value: string;
  onChange: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  mode?: "hospital" | "station";
  placeholder?: string;
};

export default function SearchBar({
  value,
  onChange,
  onFocus,
  onBlur,
  mode,
  placeholder,
}: SearchBarProps) {
  const defaultPlaceholder =
    placeholder ??
    (mode === "station"
      ? "Pesquise por uma estação..."
      : "Pesquise por um hospital...");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={defaultPlaceholder}
        placeholderTextColor="#1c5ca2"
        accessibilityLabel="Pesquisar"
        value={value}
        onChangeText={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <Ionicons name="search" size={20} color="#1c5ca2" style={styles.icon} />
    </View>
  );
}