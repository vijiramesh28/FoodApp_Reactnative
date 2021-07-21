
import * as React from 'react';
// import { StyleSheet, View, Text} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Categories from './components/categories';
import Product from './components/product';
import Carts from './components/cart';
import Checkout from './components/checkout';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Stack.Screen name="Categories" component={Categories} options={{ headerShown: false }}/>
      <Stack.Screen name="Product" component={Product} options={{ headerShown: false }}/>
      <Stack.Screen name="Carts" component={Carts} options={{ headerShown: false }}/>
      <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: false }}/>

    </Stack.Navigator>
  </NavigationContainer>
  );
}

