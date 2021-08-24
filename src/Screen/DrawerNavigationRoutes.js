import React, {useState, useEffect} from 'react';
import {Button, TouchableOpacity, Text, StyleSheet} from 'react-native';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Import Screens
import ProductScreen from './ProductScreen';
import ProductDetailsScreen from './ProductDetailsScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import CustomSidebarMenu from '../Components/CustomSidebarMenu';
import NavigationDrawerHeader from '../Components/NavigationDrawerHeader';
import {useSelector, useDispatch} from 'react-redux';
import CartScreen from './CartScreen';
import WishList from './WishList';
import Icon from 'react-native-vector-icons/AntDesign';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const productScreenStack = ({navigation}) => {
  const cart = useSelector(state => state.cartReducer.cart);
  const [quan, setQuan] = useState(0);

  const totalQuantity = () => {
    let update = cart.reduce((t, c) => {
      return (t += c.quantity);
    }, 0);
    console.warn('update alert,,,,,,', update);
    setQuan(update);
  };

  useEffect(() => {
    // const intervalId = setInterval(() => {
    totalQuantity();
    // }, 1000); // in milliseconds
    // return () => clearInterval(intervalId);
  }, [cart]);

  return (
    <Stack.Navigator initialRouteName="ProductScreen">
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{
          title: 'Products',
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
              <Text style={styles.text}>{quan}</Text>
              {/* <Icon name="shoppingcart" size={30} /> */}
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
        options={{
          title: 'Products',
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
              {/* <Icon name="shoppingcart" size={30} /> */}
              <Text style={styles.text}>{quan}</Text>
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const wishListScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="WishList"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
            {/* <Icon name="shoppingcart" size={30} /> */}
            {/* <Text style={styles.text}>{quan}</Text> */}
          </TouchableOpacity>
        ),
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="wishList"
        component={WishList}
        options={{
          title: 'Wish List',
        }}
      />
    </Stack.Navigator>
  );
};

const cartScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="CartScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
            {/* <Icon name="shoppingcart" size={30} /> */}
            {/* <Text style={styles.text}>{quan}</Text> */}
          </TouchableOpacity>
        ),
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          title: 'Cart',
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigatorRoutes = props => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#000',
        color: '#000',
        itemStyle: {marginVertical: 5, color: 'black'},
        labelStyle: {
          color: '#000',
        },
      }}
      screenOptions={{headerShown: false}}
      drawerContent={CustomSidebarMenu}>
      <Drawer.Screen
        name="Products"
        options={{drawerLabel: 'Products'}}
        component={productScreenStack}
      />
      <Drawer.Screen
        name="Cart"
        options={{drawerLabel: 'Cart'}}
        component={cartScreenStack}
      />

      <Drawer.Screen
        name="WishList"
        options={{drawerLabel: 'WishList'}}
        component={wishListScreenStack}
      />
      <Drawer.Screen
        name="Login"
        options={{drawerLabel: 'Login'}}
        component={Auth}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'red',
    borderRadius: 55,
    color: '#fff',
    padding: 10,
    width: 40,
    textAlign: 'center',
  },
});

export default DrawerNavigatorRoutes;
