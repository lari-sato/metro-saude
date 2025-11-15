import React from "react";
import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

type SearchBarProps = {
  value: string;
  onChange: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
};

export default function SearchBar({ value, onChange, onFocus, onBlur }: SearchBarProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Pesquise por um Hospital..."
        placeholderTextColor="#1c5ca2"
        aria-label="Pesquisar"
        value={value}
        onChangeText={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <Ionicons name="search" size={20} color="#1c5ca2" style={styles.icon} />
    </View>
  );
}