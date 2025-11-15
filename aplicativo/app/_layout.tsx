import { Tabs } from "expo-router";

// Ícones padrão
import MapIcon from "../assets/icons/map.svg";
import UserIcon from "../assets/icons/user.svg";
import SettingsIcon from "../assets/icons/settings.svg";

// Ícones quando selecionados
import MapIconActive from "../assets/icons/map-active.svg";
import UserIconActive from "../assets/icons/user-active.svg";
import SettingsIconActive from "../assets/icons/settings-active.svg";

export default function RootLayout() {
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
        },
      }}
    >
      <Tabs.Screen name="index" options={{ href: null }} />

      {/* Navegar */}
      <Tabs.Screen
        name="pages/Navigation"
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

      {/* Perfil */}
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

      {/* Configurações */}
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
