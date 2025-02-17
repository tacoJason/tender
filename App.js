import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Screens/HomeScreen.js";
import CameraScreen from "./Screens/CameraScreen.js";
import MapScreen from "./Screens/MapScreen.js";
import FeedScreen from "./Screens/FeedScreen.js";
import SwipeScreen from "./Screens/SwipeScreen.js";
import CameraIcon from "./assets/icons/camera-outline.png";
import MapIcon from "./assets/icons/map-outline.png";
import FeedIcon from "./assets/icons/cat.png";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarStyle: { backgroundColor: "#fff" },
        }}
      >
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                source={MapIcon}
                style={{
                  width: size * 0.55,
                  height: size * 0.8,
                  tintColor: color,
                }}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Feed"
          component={SwipeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                source={FeedIcon}
                style={{ width: size * 1.5, height: size, tintColor: color }}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Camera"
          component={CameraScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                source={CameraIcon}
                style={{ width: size * 1.65, height: size, tintColor: color }}
              />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
