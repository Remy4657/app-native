import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import Header from "@/components/style/Header";
import { Link, router, useGlobalSearchParams } from "expo-router";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
// import { addToCart } from "../utils/helper";
// import { CartContext } from "../context/CartContext";

const colorsArray = [
  "#91A1B0",
  "#B11D1D",
  "#1F44A3",
  "#9F632A",
  "#1D752B",
  "#000000",
];

const ProductDetailsScreen = () => {
  //const { addToCartItem } = useContext(CartContext);
  const route = useRoute();
  const navigation = useNavigation();
  //const product = route?.params?.item;
  const product = {
    image: require("../../assets/images/style/girl1.png"),
    title: "Winter Coat",
    price: "65.9",
  };
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("#B11D1D");
  const imageUrl =
    "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567613/vulb5bckiruhpzt2v8ec.png";

  const handleAddToCart = () => {
    //   product.color = selectedColor;
    //   product.size = selectedSize;
    //   addToCartItem(product);
    router.replace("/cart");
    //navigation.navigate("cart");
  };
  //console.log("route.params.item: ", route?.params?.item);
  const searchParams = useGlobalSearchParams();
  const { value } = useGlobalSearchParams();
  const item = route?.params?.item;
  console.log("item: ", item);
  return (
    <View className="p-5 justify-between h-full">
      <View>
        <Header isCart={false} />
      </View>
      <View style={styles.imageContainer} className="test">
        <Image source={item.image} style={styles.coverImage} className="test" />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.fontText}>{item.title}</Text>
          <Text style={styles.fontText}>${item.price}</Text>
        </View>
        <Text style={[styles.fontText, styles.sizeText]}>Size</Text>
        {/* size container */}
        <View style={styles.sizeContainer}>
          <TouchableOpacity
            style={styles.sizeValueContainer}
            onPress={() => setSelectedSize("S")}
          >
            <Text
              style={[
                styles.sizeValueText,
                selectedSize === "S" && styles.selectedText,
              ]}
            >
              S
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sizeValueContainer}
            onPress={() => setSelectedSize("M")}
          >
            <Text
              style={[
                styles.sizeValueText,
                selectedSize === "M" && styles.selectedText,
              ]}
            >
              M
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sizeValueContainer}
            onPress={() => setSelectedSize("L")}
          >
            <Text
              style={[
                styles.sizeValueText,
                selectedSize === "L" && styles.selectedText,
              ]}
            >
              L
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sizeValueContainer}
            onPress={() => setSelectedSize("XL")}
          >
            <Text
              style={[
                styles.sizeValueText,
                selectedSize === "XL" && styles.selectedText,
              ]}
            >
              XL
            </Text>
          </TouchableOpacity>
        </View>
        {/* color container */}
        <Text style={[styles.fontText, styles.sizeText]}>Color</Text>
        <View style={styles.colorContainer}>
          {colorsArray.map((color, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedColor(color)}
              >
                <View
                  style={[
                    styles.borderColorCircle,
                    selectedColor === color && {
                      borderColor: color,
                      borderWidth: 2,
                      borderRadius: 24,
                    },
                  ]}
                >
                  <View
                    style={[styles.colorCircle, { backgroundColor: color }]}
                  ></View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        {/* cart button */}
        <View>
          <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 15,
  },
  imageContainer: {
    height: 420,
    width: "100%",
  },
  coverImage: {
    resizeMode: "cover",
    flex: 1,
    width: "100% !importent" as any,
    padding: "-15px" as any,
  },
  contentContainer: {
    padding: 20,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  fontText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#444444",
  },
  sizeText: {
    marginTop: 20,
  },
  sizeContainer: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5,
  },
  sizeValueContainer: {
    backgroundColor: "#FFFFFF",
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  sizeValueText: {
    fontSize: 18,
    fontWeight: "700",
  },
  selectedText: {
    color: "#E55B5B",
  },
  colorContainer: {
    flexDirection: "row",
  },
  borderColorCircle: {
    height: 48,
    width: 48,
    padding: 5,
    marginHorizontal: 5,
  },
  colorCircle: {
    flex: 1,
    borderRadius: 18,
  },
  button: {
    backgroundColor: "#E96E6E",
    height: 62,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "700",
  },
});
