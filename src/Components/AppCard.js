import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {width, height} from '../assets/Constant/index';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector, useDispatch} from 'react-redux';
import {addCart, Removecart} from '../store/action/cartAction/index';
import {wishList} from '../store/action/productAction';
// import {addwishList, RemoveWishList} from '../store/action/wishlistAction';

const AppCard = ({
  id,
  title,
  description,
  category,
  image,
  price,
  onPress,
  wish,
  icon,
}) => {
  const [heart, setHeart] = useState(icon);
  const products = useSelector(state => state.productReducer.products);
  const cart = useSelector(state => state.cartReducer.cart);

  const dispatch = useDispatch();

  const addValue = data => {
    let val = cart.filter(c => {
      return c.id == data.id;
    });
    if (val.length > 0) {
      dispatch(Removecart(data.id));
      console.warn('alert');
    } else {
      dispatch(addCart(data));
    }
  };

  const addwish = (id, wish, icon) => {
    if (!wish) {
      dispatch(wishList(id, (wish = true), (icon = 'heart')));
    } else {
      dispatch(wishList(id, (wish = false), (icon = 'heart-outline')));
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.card}>
        <Image
          source={{
            uri: image,
          }}
          style={{width: width / 1.2, height: height / 3.9}}
          resizeMode="cover"
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Text style={{color: '#000', fontWeight: 'bold'}}>Category : </Text>
            <Text>{category}</Text>
          </View>

          <Text style={{color: 'red', fontWeight: 'bold', fontSize: 20}}>
            Rs.{price}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginTop: 20,
            paddingRight: 20,
          }}>
          <TouchableOpacity
            style={{paddingRight: 20}}
            onPress={() => addwish(id, wish, icon)}>
            <Icon name={icon} size={30} color="red" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => addValue({id, price, category, quantity: 1})}>
            <Icon name="cart" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
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
    width: width / 1.1,
    height: height / 2.5,
    padding: 10,
  },
  card: {},
});

export default AppCard;
