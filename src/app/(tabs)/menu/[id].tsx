import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import products from "@assets/data/products";
import { defaultPizzaImage } from "@/components/ProductListItem";
import Button from "@/components/Button";

const sizes = ["S", "M", "L", "XL"];

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = useState("M");
  const product = products.find((product) => product.id.toString() === id);

  if (!product) {
    return <Text>Product Not found</Text>;
  }

  const addToCart = () => {
    console.log("Adding to cart", selectedSize);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name }} />
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text>Select size</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable
            onPress={() => setSelectedSize(size)}
            style={[
              styles.size,
              {
                backgroundColor: selectedSize === size ? "gainsboro" : "white",
              },
            ]}
            key={size}
          >
            <Text
              style={[
                styles.sizeText,
                { color: selectedSize === size ? "black" : "gray" },
              ]}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.price}>{product.price}</Text>
      <Button onPress={addToCart} text="Add to cart" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  size: {
    backgroundColor: "gainsboro",
    width: 50,
    aspectRatio: 1,
    padding: 10,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedSize: {
    backgroundColor: "orange",
  },
  sizeText: {
    fontSize: 20,
    fontWeight: "500",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: "auto",
  },
});

export default ProductDetailsScreen;
