import React from "react";
import { Text, View } from "react-native";
import { Link } from "expo-router";

const Page = () => {
  return (
    <View className="flex-1 items-center justify-center bg-pink-100">
      <Link href="/home">Home</Link>
      <Link href="/login">Login</Link>

      <Text className="text-red-600">Aora</Text>
    </View>
  );
};
export default Page;
