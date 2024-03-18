import orders from "@assets/data/orders";
import { Text, FlatList } from "react-native";

export default function OrdersScreen() {
  return (
    <FlatList
        data={orders}
        renderItem={({ item }) => <Text>{item.id}{item.status}</Text> }
    />
  )
}
