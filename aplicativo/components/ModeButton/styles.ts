import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modeButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
    marginHorizontal: 4,
    borderRadius: 20,
    backgroundColor: "#D9D9D9",
  },
  modeButtonActive: {
    backgroundColor: "#B2B2B2",
  },
  modeButtonText: {
    marginLeft: 4,
    fontSize: 16,
    color: "#000",
  },
});
