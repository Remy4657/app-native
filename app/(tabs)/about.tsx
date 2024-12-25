import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import Header from "@/components/style/Header";
import Tags from "@/components/style/Tags";
import ProductCard from "@/components/style/ProductCard";
import data from "@/assets/data/data.json";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const [products, setProducts] = useState(data.products);
  const navigation = useNavigation();
  // const handleProductDetails = (item: any) => {
  //   navigation.navigate("PRODUCT_DETAILS", { item });
  // };

  return (
    <View style={styles.container}>
      {/* header */}

      {/* <Tags /> */}

      <FlatList
        ListHeaderComponent={
          <>
            <>
              <Header isCart={false} />
              <View>
                <Text style={styles.headingText}>Match Your Style</Text>
                <View style={styles.inputContainer}>
                  {/* <Image
                    source={require("../assets/search.png")}
                    style={styles.searchIcon}
                  /> */}
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
            //   handleProductClick={handleProductDetails}
            //   toggleFavorite={toggleFavorite}
            //
          />
        )}
        showsVerticalScrollIndicator={false}
      />
      <View>
        {/* <Text>HomeScreen</Text>
        <Text>HomeScreen</Text> */}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
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
});
