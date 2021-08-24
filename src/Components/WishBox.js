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
import {useSelector, useDispatch} from 'react-redux';
// import Icon from 'react-native-vector-icons/Entypo';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import {RemoveWishList} from '../store/action/wishlistAction/index';
import {wishList} from '../store/action/productAction';

const WishBox = ({id, image, description, title, price, wish, icon}) => {
  // console.warn('inside component,,,,,,,', wishlist);
  const dispatch = useDispatch();
  const removeList = data => {
    // data.wish = false;
    // data.icon = 'heart-outline';
    // console.warn('delete wish,,,,,,,,', data);
    // dispatch(RemoveWishList(data));
    dispatch(wishList(id, (wish = false), (icon = 'heart-outline')));
  };
  return (
    <>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Image
            source={{uri: image}}
            resizeMode="stretch"
            style={{width: 80, height: 80}}
          />
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              flex: 1,
              padding: 8,
            }}>
            <Text numberOfLines={1}>{title}</Text>
            <Text numberOfLines={1}>{description}</Text>
          </View>
          <View>
            <Text style={styles.price}>{price}</Text>
            <TouchableOpacity
              style={{paddingLeft: 15, paddingTop: 20}}
              onPress={() =>
                removeList({id, image, description, title, price, icon})
              }>
              <Icon name={icon} size={30} color="red" />
              <Text>{wish}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
  price: {
    color: '#fff',
    backgroundColor: 'red',
    height: height / 20,
    borderRadius: 25,
    padding: 10,
  },
});

export default WishBox;
