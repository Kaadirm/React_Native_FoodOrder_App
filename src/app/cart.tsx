import React, { useContext } from 'react'
import { View, Text, Platform } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { CartContext } from '@/providers/CartProvider'

const CartScreen = () => {
  const {items} = useContext(CartContext)

  return (
    <View>
      <Text>Cart items length: {items.length}</Text>
       {/* Use a light status bar on iOS to account for the black space above the modal */}
       <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}

export default CartScreen