import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {width, height} from '../assets/Constant/index';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {useSelector, useDispatch} from 'react-redux';
import {
  addCart,
  Removecart,
  updateCart,
} from '../store/action/cartAction/index';

const CardBox = ({id, category, price, quantity}) => {
  // const [quantity, setQuantity] = useState(1);
  const [amount, setAmount] = useState(price);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cartReducer.cart);
  console.warn('quantity ,,,,', cart);

  let removeCart = id => {
    dispatch(Removecart(id));
  };

  // let totalAmount = () => {
  //   let totalValue = amount + amount;
  //   setTotal(totalValue);
  // };

  const incrementCounter = () => {
    dispatch(updateCart(id, ++quantity));
  };
  const decrementCounter = () => {
    if (quantity > 1) {
      // setQuantity(quantity - 1);
      dispatch(updateCart(id, --quantity));
    } else {
      dispatch(Removecart(id));
      // alert('Quantity can not be less than one');
    }
  };
  // const countAmount = () => {
  //   let result = price * quantity;
  //   result = result.toFixed(2);
  //   //let totalValue = result + result;

  //   setAmount(result);
  // };
  const countTotalAmount = () => {
    let value = cart.reduce((total, c) => {
      return total + c.price * c.quantity;
    }, 0);
    setAmount(value);
    // console.warn('total amount,,,,,,', value);
  };

  useEffect(() => {
    //countAmount();
    countTotalAmount();
    // totalAmount();
  }, [quantity]);
  return (
    <>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.text}>Category : </Text>
            <Text>{category.toUpperCase()}</Text>
            <Text style={styles.text}>Price :</Text>
            <Text>Rs.{price}</Text>
            <View style={{flexDirection: 'row', marginTop: 12}}>
              <Text style={styles.text}>Quantity: </Text>
              <TouchableOpacity onPress={incrementCounter}>
                <Icon name="plus" size={20} style={styles.icon} />
              </TouchableOpacity>
              <Text style={styles.amount}>{quantity}</Text>
              <TouchableOpacity onPress={decrementCounter}>
                <Icon name="minus" size={20} style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity onPress={() => removeCart(id)}>
            <Icon name="delete" size={30} />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.text}>Amount : </Text>
        <Text>{amount}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    borderWidth: 2,
    borderColor: '#fff',
    width: width / 1,
    height: height / 6,
    padding: 10,
  },
  text: {
    fontWeight: 'bold',
    color: '#000',
  },
  icon: {
    backgroundColor: '#000',
    color: '#fff',
    marginLeft: 10,
  },
  amount: {
    marginLeft: 10,
  },
});

export default CardBox;
