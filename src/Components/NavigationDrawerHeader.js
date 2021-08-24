import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const NavigationDrawerHeader = props => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Icon name="reorder-three-sharp" size={45} />
      </TouchableOpacity>
    </View>
  );
};
export default NavigationDrawerHeader;
