import { View, Text, StyleSheet } from "react-native";
import React from "react";

const CreateProductScreen = () => {
  return (
    <View style={styles.container}>
      <Text>create</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
});

export default CreateProductScreen;
