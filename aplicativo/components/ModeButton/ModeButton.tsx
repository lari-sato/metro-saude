import React from "react";
import { TouchableOpacity } from "react-native";
import Text from "../GlobalText";
import { styles } from "./styles";

export default function ModeButton({
  label,
  Icon,
  active,
  onPress,
}: {
  label: string;
  Icon: any;
  active: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.modeButton, active && styles.modeButtonActive]}
    >
      <Icon width={20} height={20} />
      <Text style={[styles.modeButtonText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
