import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Button,
  ScrollView,
} from 'react-native';
import {height} from '../assets/Constant';
import AppButton from '../Components/AppButton';
import AppTextInput from '../Components/AppTextInput';
import HeaderIcon from '../Components/HeaderIcon';

import {useSelector, useDispatch} from 'react-redux';
import {GetToken} from '../store/action/tokenAction';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const error = useSelector(state => state.tokenReducer.error);
  const Token = useSelector(state => state.tokenReducer.Token);
  const dispatch = useDispatch();
  useEffect(() => {
    console.warn(error);
    console.warn('Token..........', Token);
  }, []);

  const handleSubmit = () => {
    dispatch(GetToken({username, password}));
  };

  return (
    <>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <HeaderIcon />
        <View style={styles.container}>
          <Text style={styles.text}>Login</Text>
          <AppTextInput
            placeholder="Enter Email ...."
            icon="email"
            onChange={text => setUsername(text)}
          />
          <AppTextInput
            placeholder="Enter Password ... "
            icon="lock"
            onChange={text => setPassword(text)}
          />
          <AppButton icon="login" title="LOGIN" onPress={handleSubmit} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{textAlign: 'center'}}>Don't have Account?</Text>
            <Button
              onPress={() => navigation.navigate('RegisterScreen')}
              title="SIGNUP"
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
    marginTop: height / 10,
    justifyContent: 'center',
  },
  text: {
    padding: 20,
    fontWeight: 'bold',
    fontSize: 25,
    color: '#000',
  },
});

export default LoginScreen;
