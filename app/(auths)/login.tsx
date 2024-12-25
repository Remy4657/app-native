import { Link, router } from "expo-router";
import { useCallback, useState } from "react";
import { Alert, Image, StyleSheet, ScrollView, Text, View } from "react-native";

import CustomButton from "@/components/car/CustomButton";
import InputField from "@/components/car/InputField";
import icons from "@/constants/icons";
import images from "@/constants/images";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <View className="flex-1 bg-pink-100 w-full h-full">
      <View className="relative w-full">
        <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />

        <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
          Welcome 👋
        </Text>
      </View>
      <View className="p-5">
        <InputField
          label="Email"
          icon={icons.email}
          placeholder="Enter email"
          textContentType="emailAddress"
          value={form.email}
          onChangeText={(value) => setForm({ ...form, email: value })}
        />

        <InputField
          label="Password"
          icon={icons.lock}
          placeholder="Enter password"
          secureTextEntry={true}
          textContentType="password"
          value={form.password}
          onChangeText={(value) => setForm({ ...form, password: value })}
        />

        <CustomButton title="Sign In" className="mt-6" />

        <Text className="text-lg text-center text-general-200 mt-10">
          Don't have an account?
          <Link href="/register" className="text-blue-600">
            <Text> Sign Up</Text>
          </Link>
        </Text>
      </View>
    </View>
  );
};
export default SignIn;
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  p_0: {
    padding: "0px" as any,
  },
});
