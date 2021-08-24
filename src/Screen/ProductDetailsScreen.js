import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native';
import {width, height} from '../assets/Constant';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProductDetailsScreen = ({route, navigation}) => {
  const {id, title, description, image, category, price} = route.params;
  const [wish, setWish] = useState(false);
  const [icon, setIcon] = useState('heart-outline');
  console.log(id, title, description);

  const changeColor = () => {
    if (!wish) {
      setIcon('heart');
      setWish(true);
    } else {
      setIcon('heart-outline');
      setWish(false);
    }
  };
  return (
    <>
      <View style={styles.container}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          showsVerticalScrollIndicator={false}>
          <View style={styles.subContainer}>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.text}>Category </Text>
              <Text>{category.toUpperCase()}</Text>
            </View>
            <Text style={styles.price}>Rs.{price}</Text>
          </View>
          {/* <Text style={styles.price}>{price}</Text> */}
          <Image
            source={{
              uri: image,
            }}
            style={{width: width / 1.2, height: height / 3.2}}
            resizeMode="contain"
          />
          {/* <View style={styles.subContainer}> */}
          <Text style={styles.text}>Title </Text>
          <Text style={styles.subText}>{title}</Text>
          {/* </View> */}

          <Text style={styles.text}>Description </Text>
          <Text style={styles.subText}>{description}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              flex: 1,
              flexWrap: 'wrap',
              marginTop: 20,
              paddingRight: 20,
            }}>
            {/* <TouchableOpacity style={{paddingRight: 20}} onPress={changeColor}>
              <Icon name={icon} size={30} color="red" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => addValue({id, price, category})}>
              <Icon name="cart" size={30} />
            </TouchableOpacity> */}
          </View>
          <Button
            onPress={() => navigation.navigate('ProductScreen')}
            title="back"
            style={styles.button}
          />
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
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
    height: height / 1.3,
    padding: 10,
    position: 'absolute',
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    flex: 0.3,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  price: {
    backgroundColor: 'red',
    color: '#fff',
    // borderRadius: 35,
    padding: 10,
  },
  button: {
    color: '#fff',
    borderRadius: 25,
    width: width / 4,
  },
});

export default ProductDetailsScreen;
