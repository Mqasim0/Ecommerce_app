import React from 'react';

import {View, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {width} from '../assets/Constant';

const AppTextInput = ({placeholder, icon, onChange}) => {
  return (
    <View style={styles.container}>
      <Icon name={icon} size={25} />
      <TextInput placeholder={placeholder} onChangeText={onChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: 25,
    backgroundColor: '#fff',
    width: width / 1.1,
    margin: 10,
    borderWidth: 2,
    borderColor: 'lightblue',
  },
});

export default AppTextInput;
