import React from 'react';
import {View, StyleSheet, Text, Button, FlatList} from 'react-native';
import {height} from '../assets/Constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector, useDispatch} from 'react-redux';
import CardBox from '../Components/CardBox';

const CartScreen = ({navigation}) => {
  const cart = useSelector(state => state.cartReducer.cart);
  console.warn('cart,,,,', cart);
  return (
    <>
      {cart.length <= 0 ? (
        <View style={styles.container}>
          <Icon name="shopping-basket" size={105} />
          <Text style={{padding: 30}}>
            You haven't added anything to your cart
          </Text>

          <Button
            onPress={() => navigation.goBack()}
            title="Go To Browse"
            style={{marginTop: 10}}
          />
        </View>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <CardBox
              id={item.id}
              category={item.category}
              price={item.price}
              quantity={item.quantity}
            />
          )}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: height / 1,
  },
  text: {
    padding: 20,
    fontWeight: 'bold',
    fontSize: 25,
    color: '#000',
  },
});

export default CartScreen;
