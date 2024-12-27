import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import "../global.css";
// screen
import ProductDetailsScreen from "../(others)/detail-product";
import HomeTab from "./home";
import ExploreTab from "./explore";
import AboutTab from "./about";
import AccountTab from "./account";
import CartTab from "./cart";

const Stack = createNativeStackNavigator() as any;
const Tab = createBottomTabNavigator() as any;

const MyHomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="list-product"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="list-product" component={AboutTab} />
      <Stack.Screen name="detail-product" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        // tabBarStyle: Platform.select({
        //   ios: {
        //     // Use a transparent background on iOS to show the blur effect
        //     position: "absolute",
        //   },
        //   default: {},
        // }),
        tabBarStyle: {},
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeTab}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="cart"
        component={CartTab}
        options={{
          title: "Cart",
          tabBarIcon: ({ color }) => (
            <IconSymbol
              size={28}
              name={"paperplane.shopping-cart" as any}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="about"
        component={MyHomeStack}
        options={{
          title: "About",
          tabBarIcon: ({ color }) => (
            <IconSymbol
              size={28}
              name={"house.info-with-circle" as any}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="account"
        component={AccountTab}
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name={"icon.account" as any} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
