import { View, StyleSheet } from "react-native";
import { SearchBar } from "../components/SearchBar/SearchBar";

export default function Navegar() {
  return (
    <View style={styles.container}>
      <SearchBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#f8f8f8",
  },
});
