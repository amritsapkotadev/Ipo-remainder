import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons"; // Import icons

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "Blue", // Active icon color (white)
        tabBarInactiveTintColor: "#555", // Inactive icon color (gray)
        tabBarStyle: { 
          backgroundColor: "#ffffff", // Default background color of the tab bar (white for all tabs)
          paddingBottom: 10, // Add padding to the bottom of the tab bar
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold", 
        },
      }}
    >
      {/* 🏠 Home Tab */}
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="home-outline"
              size={size}
              color={focused ? "#007BFF" : "#555"} // Blue for active icon
            />
          ),
          tabBarLabel: "Home",
          headerShown: false,
        }}
      />

      {/* 💼 Jobs Tab */}
      <Tabs.Screen
        name="Jobs"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="briefcase-outline"
              size={size}
              color={focused ? "#007BFF" : "#555"} // Blue for active icon
            />
          ),
          tabBarLabel: "Jobs",
          headerShown: false,
        }}
      />

      {/* 💬 Chat Tab */}
      <Tabs.Screen
        name="Chat"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="chatbubble-outline"
              size={size}
              color={focused ? "#007BFF" : "#555"} // Blue for active icon
            />
          ),
          tabBarLabel: "Chat",
          headerShown: false,
        }}
      />

      {/* 🔔 Saved Tab */}
      <Tabs.Screen
        name="Saved"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="bookmark-outline"
              size={size}
              color={focused ? "#007BFF" : "#555"} // Blue for active icon
            />
          ),
          tabBarLabel: "Saved",
          headerShown: false,
        }}
      />

      {/* ⚙️ Settings Tab */}
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="settings-outline"
              size={size}
              color={focused ? "#007BFF" : "#555"} // Blue for active icon
            />
          ),
          tabBarLabel: "Settings",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
