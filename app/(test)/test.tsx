import { Link, router } from "expo-router";
import { useCallback, useState } from "react";
import { Alert, Image, ScrollView, Text, View } from "react-native";

import CustomButton from "@/components/car/CustomButton";
import InputField from "@/components/car/InputField";
import icons from "@/constants/icons";
import images from "@/constants/images"

const SignIn = () => {

    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");




    return (
        <ScrollView className="flex-1 bg-white">
            <View className="flex-1 bg-white">
                <View className="relative w-full h-[250px]" style={{ height: "250px !important" as any }}>
                    <Image source={
                        images.signUpCar
                    }
                        className="z-0 w-full h-[250px]" style={{ height: "250px !important" as any }} />

                    <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
                        Welcome 👋
                    </Text>
                </View>

                <View className="p-5">
                    <InputField
                        label="Email"
                        placeholder="Enter email"
                        textContentType="emailAddress"
                        value={form.email}
                        onChangeText={(value) => setForm({ ...form, email: value })}
                    />

                    <InputField
                        label="Password"
                        placeholder="Enter password"
                        secureTextEntry={true}
                        textContentType="password"
                        value={password}
                        onChangeText={(value) => setPassword(value)}
                    />

                    <CustomButton
                        title="Sign In"
                        className="mt-6"
                    />
                    {/* 
                    <OAuth /> */}

                    <Link
                        href="/register"
                        className="text-lg text-center text-general-200 mt-10"
                    >
                        Don't have an account?{" "}
                        <Text className="text-primary-500">Sign Up</Text>
                    </Link>
                </View>
            </View>
        </ScrollView>
    );
};

export default SignIn;
