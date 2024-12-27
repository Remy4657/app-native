import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

type ProductProps = {
  item: any;
  handleProductClick: (item: any) => void; // Xác định kiểu là một function
};
const ProductCard: React.FC<ProductProps> = ({ item, handleProductClick }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        handleProductClick(item);
      }}
    >
      <Image source={{ uri: item.image }} style={styles.coverImage} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <View style={styles.likeContainer}>
        <TouchableOpacity>
          {item.isFavorite ? (
            <Image
              source={require("../../assets/images/style/favoriteFilled.png")}
              style={styles.faviorate}
            />
          ) : (
            <Image
              source={require("../../assets/images/style/favorite.png")}
              style={styles.faviorate}
            />
          )}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  coverImage: {
    height: 256,
    width: "100%",
    borderRadius: 20,
    position: "relative",
  },
  contentContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,

    fontWeight: "700",
    color: "#444444",
  },
  price: {
    fontSize: 18,
  },
  likeContainer: {
    position: "absolute",
    padding: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    right: 10,
    top: 10,
  },
  faviorate: {
    height: 20,
    width: 20,
  },
});
