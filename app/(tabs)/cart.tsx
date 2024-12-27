import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import Header from "@/components/style/Header";
import CartCard from "@/components/style/CartCard";
//import { CartContext } from "../context/CartContext";

const CartTab = () => {
  //const { cartItems, deleteCartItem, totalPrice } = useContext(CartContext);
  const [cartItems, setCartItems] = useState([
    {
      image: require("../../assets/images/style/girl1.png"),
      title: "Winter Coat",
      price: "543",
      size: "L",
      color: "#3258a8",
    },
    {
      image: require("../../assets/images/style/girl2.png"),
      title: "Winter Coat",
      price: "543",
      size: "XL",
      color: "#7d1e41",
    },
    {
      image: require("../../assets/images/style/girl1.png"),
      title: "Winter Coat",
      price: "543",
      size: "L",
      color: "#3258a8",
    },
  ]);

  //   const handleDeleteItem = async (id:string) => {
  //     await deleteCartItem(id);
  //   };
  const handleDeleteItem = () => {};
  return (
    <View className="p-5">
      <View style={styles.header}>
        <Header isCart={true} />
      </View>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <CartCard item={item} handleDelete={handleDeleteItem} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 40, paddingBottom: 200 }}
        ListFooterComponent={
          <>
            <View style={styles.bottomContentContainer}>
              <View style={styles.flexRowContainer}>
                <Text style={styles.titleText}>Total:</Text>
                <Text style={styles.priceText}>$55</Text>
              </View>
              <View style={styles.flexRowContainer}>
                <Text style={styles.titleText}>Shpping:</Text>
                <Text style={styles.priceText}>$0.0</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.flexRowContainer}>
                <Text style={styles.titleText}>Grand Total:</Text>
                <Text style={[styles.priceText, styles.grandPriceText]}>
                  $55
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Checkout</Text>
            </TouchableOpacity>
          </>
        }
      />
    </View>
  );
};

export default CartTab;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  header: {},
  flexRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  bottomContentContainer: {
    marginHorizontal: 10,
    marginTop: 30,
  },
  titleText: {
    fontSize: 18,
    color: "#757575",
    fontWeight: "500",
  },
  priceText: {
    fontSize: 18,
    color: "#757575",
    fontWeight: "600",
  },
  divider: {
    borderWidth: 1,
    borderColor: "#C0C0C0",
    marginTop: 10,
    marginBottom: 5,
  },
  grandPriceText: {
    color: "#3C3C3C",
    fontWeight: "700",
  },
  button: {
    backgroundColor: "#E96E6E",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginTop: 30,
  },
  buttonText: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "700",
  },
});
