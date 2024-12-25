import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Text style={{ height: "30px" as any }}>sd</Text>
        <Stack.Screen
          name="test-login"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="test-register"
          options={{
            headerShown: false,
          }}
        />
      </Stack>

      {/* <StatusBar backgroundColor="#161622" style="light" /> */}
    </>
  );
};

export default AuthLayout;
