import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { styles } from "./styles";

export default function CloseButton() {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => router.replace("/pages/Navigation")}
      accessibilityRole="button"
      accessibilityLabel="Fechar"
    >
      <Ionicons name="close" size={18} color="#00000" />
    </TouchableOpacity>
  );
}
