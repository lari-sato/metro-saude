import { Tabs } from "expo-router";
import MapIcon from "../assets/icons/map.svg";
import UserIcon from "../assets/icons/user.svg";
import SettingsIcon from "../assets/icons/settings.svg";

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
      <Tabs.Screen
        name="index"
        options={{ href: null 
        }} 
      />

      <Tabs.Screen
        name="pages/Navigation"
        options={{
          title: "Navegar",
          tabBarIcon: ({ color }) => (
            <MapIcon width={28} height={28} stroke={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pages/Profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => (
            <UserIcon width={28} height={28} stroke={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pages/Settings"
        options={{
          title: "Configurações",
          tabBarIcon: ({ color }) => (
            <SettingsIcon width={28} height={28} stroke={color} />
          ),
        }}
      />
    </Tabs>
  );
}
