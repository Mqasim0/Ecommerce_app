import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HeaderIcon = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 40}}>
      <Icon
        name="local-grocery-store"
        size={100}
        color="#000"
        style={{textAlign: 'center'}}
      />
      <Text style={{fontWeight: 'bold', fontSize: 30, alignSelf: 'center'}}>
        ONLINE STORE
      </Text>
    </View>
  );
};

export default HeaderIcon;
