import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import AppCard from '../Components/AppCard';
import {useSelector, useDispatch} from 'react-redux';
import {GetProductData} from '../store/action/productAction';
import Loader from '../Components/loader';

const ProductScreen = ({navigation}) => {
  // const [products, setProducts] = useState({});
  const products = useSelector(state => state.productReducer.products);
  console.warn('products', products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetProductData());
  }, []);

  return (
    <View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {!products.length <= 0 ? (
          <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <AppCard
                category={item.category}
                image={item.image}
                id={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                wish={item.wish}
                icon={item.icon}
                onPress={() =>
                  navigation.navigate('ProductDetailsScreen', {
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    image: item.image,
                    category: item.category,
                    price: item.price,
                  })
                }
              />
            )}
          />
        ) : (
          // <Text>'loading '</Text>
          <Loader />
        )}
      </ScrollView>
    </View>
  );
};

export default ProductScreen;
