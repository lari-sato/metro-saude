import React from "react";
import { Text as RNText, TextProps as RNTextProps } from "react-native";

export type TextProps = RNTextProps;

export default function Text(props: TextProps) {
  return (
    <RNText
      {...props}
      style={[
        { fontFamily: "Poppins_400Regular" },
        props.style,
      ]}
    />
  );
}

// opcional: variações
export function TextMedium(props: TextProps) {
  return (
    <RNText
      {...props}
      style={[
        { fontFamily: "Poppins_500Medium" },
        props.style,
      ]}
    />
  );
}

export function TextBold(props: TextProps) {
  return (
    <RNText
      {...props}
      style={[
        { fontFamily: "Poppins_700Bold" },
        props.style,
      ]}
    />
  );
}
