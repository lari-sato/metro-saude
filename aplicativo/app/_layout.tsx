import { Tabs } from "expo-router";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

// Ícones padrão
import MapIcon from "../assets/icons/map.svg";
import UserIcon from "../assets/icons/user.svg";
import SettingsIcon from "../assets/icons/settings.svg";

// Ícones quando selecionados
import MapIconActive from "../assets/icons/map-active.svg";
import UserIconActive from "../assets/icons/user-active.svg";
import SettingsIconActive from "../assets/icons/settings-active.svg";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#1C5CA2",
        tabBarInactiveTintColor: "#000000",

        tabBarStyle: {
          backgroundColor: "#D9D9D9",
          height: 100,
          paddingBottom: 10,
        },

        tabBarLabelStyle: {
          fontSize: 13,
          fontFamily: "Poppins_500Medium",
        },
      }}
    >
      <Tabs.Screen name="index" options={{ href: null }} />
      <Tabs.Screen name="pages/SelectedHospital" options={{ href: null }} />
      <Tabs.Screen name="pages/ChooseStation" options={{ href: null }} />
      <Tabs.Screen name="pages/RouteOptions" options={{ href: null }} />
      <Tabs.Screen name="pages/ChooseHospital" options={{ href: null }} />
      <Tabs.Screen name="pages/Navigation" options={{ href: null }} />

      <Tabs.Screen
        name="pages/navigation"
        options={{
          title: "Navegar",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MapIconActive width={28} height={28} />
            ) : (
              <MapIcon width={28} height={28} />
            ),
        }}
      />

      <Tabs.Screen
        name="pages/Profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <UserIconActive width={28} height={28} />
            ) : (
              <UserIcon width={28} height={28} />
            ),
        }}
      />

      <Tabs.Screen
        name="pages/Settings"
        options={{
          title: "Configurações",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <SettingsIconActive width={28} height={28} />
            ) : (
              <SettingsIcon width={28} height={28} />
            ),
        }}
      />
    </Tabs>
  );
}
