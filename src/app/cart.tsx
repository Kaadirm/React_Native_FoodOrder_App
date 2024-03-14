import { View, Text, Platform, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useCart } from "@/providers/CartProvider";
import CartListItem from "@/components/CartListItem";

const CartScreen = () => {
  const { items } = useCart();
  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{padding: 10, gap: 10}}
      />

      {/* <View>
        {items.map((item) => (
          <View key={item.id}>
            <Text>{item.product.name}</Text>
            <Text>{item.size}</Text>
            <Text>{item.quantity}</Text>
          </View>
        ))}
      </View> */}
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default CartScreen;
