import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer}from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/Home";
import Male from './screens/Male';
import ProductDetails from './screens/ProductDetails';
import Cart from './screens/Cart';
import Checkout from './screens/Checkout';
import Payments from './screens/Payments';
import Login from './screens/Login';
import Register from './screens/Register';
import Account from './screens/Account/Account';
import Notifications from './screens/Account/Notifications';
import Profile from './screens/Account/Profile';
import MyOrders from './screens/Account/MyOrders';
import Dashboard from './screens/Admin/Dashboard';
import GoogleMap from './screens/Account/GoogleMap';
import Females from './screens/Females';
import Jewelry from './screens/Jewelry';
import Desktop from './screens/Desktop';
import Bag from './screens/Bag';
import Accessories from './screens/Accessories';
import Search from './screens/Search';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login'>
        <Stack.Screen name="home" component={Home} options={{headerShown:false,}}/>
        <Stack.Screen name="productDetails" component={ProductDetails} options={{headerShown: false}}/>
        <Stack.Screen name="checkout" component={Checkout}/>
        <Stack.Screen name="profile" component={Profile}/>
        <Stack.Screen name="myorders" component={MyOrders}/>
        <Stack.Screen name="notifications" component={Notifications} options={{headerShown: false}}/>
        <Stack.Screen name="googlemap" component={GoogleMap}/>
        <Stack.Screen name="adminPanel" component={Dashboard}/>
        <Stack.Screen name="search" component={Search} options={{headerShown: false}}/>

        <Stack.Screen 
          name="login" 
          component={Login} 
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="register" 
          component={Register} 
          options={{headerShown: false}}
        />
        <Stack.Screen name="logout" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="account" component={Account} options={{headerShown: false}}/>
        <Stack.Screen name="payment" component={Payments} />
        <Stack.Screen name="cart" component={Cart} options={{headerShown: false}}/>
        <Stack.Screen name="Male" component={Male} options={{headerShown: false}}/>
        <Stack.Screen name="Females" component={Females} options={{headerShown: false}}/>
        <Stack.Screen name="Jewelry" component={Jewelry} options={{headerShown: false}}/>
        <Stack.Screen name="Computer Monitor" component={Desktop} options={{headerShown: false}}/>
        <Stack.Screen name="Bag" component={Bag} options={{headerShown: false}}/>
        <Stack.Screen name="Accessories" component={Accessories} options={{headerShown: false}}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
}

//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: 'white',
//    alignItems: 'center',
//    justifyContent: 'center',
//  },
//});
