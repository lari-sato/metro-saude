import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  list: {
    width: "100%",
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#1c5ca2",
    borderRadius: 8,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottomColor: "#1c5ca2",
    borderBottomWidth: 1.5,
    backgroundColor: "#fff",
  },
  iconContainer: {
    marginRight: 12,
  },
  listItemText: {
    fontSize: 16,
    color: "#000000",
  },
});
