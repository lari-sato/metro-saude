import { View, StyleSheet } from "react-native";
import Logo from ".././assets/icons/logo.svg";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <Logo/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1c5ca2",
  },
});

export default HomeScreen;