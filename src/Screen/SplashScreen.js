import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-community/async-storage';

const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      // AsyncStorage.getItem('user_id').then(value =>
      //   navigation.replace(value === null ? 'Auth' : 'DrawerNavigationRoutes'),
      // );
      navigation.replace('DrawerNavigationRoutes');
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Icon name="shopping-basket" size={105} />
      <Text style={styles.text}>Online Store</Text>
      <ActivityIndicator
        animating={animating}
        color="#000"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
    color: '#000',
  },
});
