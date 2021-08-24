import React from 'react';
import {View, Text, StyleSheet, ScrollView, Button} from 'react-native';
import {height, width} from '../assets/Constant';

import AppButton from '../Components/AppButton';
import AppTextInput from '../Components/AppTextInput';
import HeaderIcon from '../Components/HeaderIcon';

const RegisterScreen = ({navigation}) => {
  return (
    <>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <HeaderIcon />
        <View style={styles.container}>
          <Text style={styles.text}>REGISTER</Text>
          <AppTextInput
            placeholder="Enter username ...."
            icon="supervised-user-circle"
          />
          <AppTextInput placeholder="Enter Email ...." icon="email" />
          <AppTextInput placeholder="Enter Phone Number  ...." icon="phone" />
          <AppTextInput placeholder="Enter Address  ...." icon="add-location" />
          <AppTextInput placeholder="Enter Password ... " icon="lock" />
          <AppButton icon="login" title="Register" />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{textAlign: 'center'}}>Already have an Account?</Text>
            <Button
              onPress={() => navigation.navigate('LoginScreen')}
              title="LOGIN"
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fff',
    marginTop: height / 15,
    justifyContent: 'center',
  },
  text: {
    padding: 20,
    fontWeight: 'bold',
    fontSize: 25,
    color: '#000',
  },
});

export default RegisterScreen;
