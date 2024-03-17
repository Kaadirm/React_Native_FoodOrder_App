import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import Button from "@/components/Button";

const CreateProductScreen = () => {
  const onCreate = (): void => {};
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput placeholder="Name" style={styles.input} />

      <Text style={styles.label}>Price ($)</Text>
      <TextInput
        placeholder="9.99"
        style={styles.input}
        keyboardType="numeric"
      />

      <Button onPress={onCreate} text="Create" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
  },
  label: {
    color: "gray",
    fontSize: 16,
  },
});

export default CreateProductScreen;
