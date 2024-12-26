import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import "../global.css";

const CartLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="detail-product"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="cart"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
};

export default CartLayout;
