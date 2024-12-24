import React from "react";
import { Text, View } from "react-native";
import { Link } from "expo-router";

const Page = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>React native</Text>
      <Link href="/home">Home</Link>
      <Link href="/login">Login</Link>
      <Link href="/test">test</Link>

      <Text className="text-red-600">Aora</Text>
    </View>
  );
};
export default Page;
