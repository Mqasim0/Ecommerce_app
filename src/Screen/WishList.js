import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Button, FlatList} from 'react-native';
import {height} from '../assets/Constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector, useDispatch} from 'react-redux';
import CardBox from '../Components/CardBox';
import WishBox from '../Components/WishBox';

const WishList = ({navigation}) => {
  // const wishlist = useSelector(state => state.wishlistReducer.wishlist);
  // console.warn('wishlist,,,,', wishlist);
  const products = useSelector(state => state.productReducer.products);

  const wishlist = products.filter(prod => {
    return prod.wish == true;
  });
  // useEffect(() => {
  //     wishlist()
  // }, [])
  return (
    <>
      {wishlist.length <= 0 ? (
        <View style={styles.container}>
          <Icon name="shopping-basket" size={105} />
          <Text style={{padding: 30}}>
            You haven't added anything to your wish list
          </Text>

          <Button
            onPress={() => navigation.goBack()}
            title="Go To Browse"
            style={{marginTop: 10}}
          />
        </View>
      ) : (
        <FlatList
          data={wishlist}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <WishBox
              id={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              image={item.image}
              wish={item.wish}
              icon={item.icon}
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

export default WishList;
