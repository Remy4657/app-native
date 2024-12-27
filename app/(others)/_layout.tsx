// import { Redirect } from "expo-router";
// import { StatusBar } from "expo-status-bar";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import CartScreen from "../(tabs)/cart";

// const Stack = createNativeStackNavigator() as any;
// const Tab = createBottomTabNavigator() as any;
// import { Text } from "react-native";
// import "../global.css";
// const CartStack = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       <Stack.Screen name="cart" component={CartScreen} />
//     </Stack.Navigator>
//   );
// };

// const CartLayout = () => {
//   return (
//     <>
//       <Stack.Navigator
//         screenOptions={{
//           headerShown: false,
//         }}
//       >
//         <Stack.Screen
//           name="cart"
//           component={CartStack}
//         />
//       </Stack.Navigator>
//     </>
//   );
// };

// export default CartLayout;

import { Redirect, Stack } from "expo-router";
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
        {/* <Stack.Screen
          name="cart"
          options={{
            headerShown: false,
          }}
        /> */}
      </Stack>
    </>
  );
};

export default CartLayout;
