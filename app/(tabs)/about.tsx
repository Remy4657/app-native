import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  Animated,
} from "react-native";
import React, { useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import Header from "@/components/style/Header";
import Tags from "@/components/style/Tags";
import ProductCard from "@/components/style/ProductCard";
import data from "@/assets/data/data.json";
import { useNavigation } from "@react-navigation/native";
import { Link, router } from "expo-router";
import { Button } from "@react-navigation/elements";

const AboutTab = () => {
  // const AnimatedLinearGradient =
  //   Animated.createAnimatedComponent(LinearGradient);
  const [products, setProducts] = useState(data.products);
  const navigation = useNavigation();

  const handleProductDetailsClick = (item: any) => {
    console.log(navigation.getState());
    navigation.navigate("detail-product", { item });
    //router.replace("/(others)/detail-product", { item });
  };

  return (
    <View style={styles.container}>
      {/* <AnimatedLinearGradient
        colors={["rgba(255,255,255, 0)", "rgba(255,255,255, 1)"]}
        style={{ height: 30 }}
      >
        jfgjf
      </AnimatedLinearGradient> */}
      {/* header */}

      {/* <Tags /> */}
      {/* <LinearGradient
        colors={["#4c669f", "#3b5998", "#192f6a"]}
        style={styles.linearGradient}
      >
        <Text style={styles.buttonText}>Sign in with Facebook</Text>
      </LinearGradient> */}

      <FlatList
        ListHeaderComponent={
          <>
            <>
              <Header isCart={false} />
              <View>
                <Text style={styles.headingText}>Match Your Style</Text>
                <View style={styles.inputContainer}>
                  <Image
                    source={require("../../assets/images/style/search.png")}
                    style={styles.searchIcon}
                  />
                  <TextInput placeholder="Search" style={styles.textInput} />
                </View>
              </View>
            </>
            <Tags />
          </>
        }
        data={products}
        numColumns={2}
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            handleProductClick={handleProductDetailsClick}
            //   toggleFavorite={toggleFavorite}
            //
          />
        )}
        showsVerticalScrollIndicator={false}
      />
      <View>
        {/* <Text>AboutTab</Text>
        <Text>AboutTab</Text> */}
      </View>
    </View>
  );
};

export default AboutTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  headingText: {
    fontSize: 28,
    color: "#000000",
    marginVertical: 20,
  },
  inputContainer: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    flexDirection: "row",
  },
  searchIcon: {
    height: 26,
    width: 26,
    marginHorizontal: 12,
  },
  textInput: {
    fontSize: 18,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Gill Sans",
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent",
  },
});
