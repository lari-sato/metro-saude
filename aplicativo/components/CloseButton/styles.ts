import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    position: "absolute",
    top: 40,
    right: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    zIndex: 20,
  },
});
