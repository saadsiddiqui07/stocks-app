import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { setEmailPassword } from '../../redux-store/actions';
import { useDispatch } from 'react-redux';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const handleLogin = () => {
    dispatch(setEmailPassword(email, password));
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <FontAwesome5 name="money-check-alt" size={40} color={'#000'} />
          <View>
            <Text style={styles.headline}>Welcome Back!</Text>
            <Text style={styles.subText}>Please login to continue</Text>
          </View>
        </View>
        <View style={styles.form}>
          <TextInput
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
            placeholderTextColor={'gray'}
            placeholder="Enter email"
          />
          <TextInput
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
            style={styles.input}
            placeholderTextColor={'gray'}
            placeholder="Enter password"
          />
        </View>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.bottomText}>Forgot your password? </Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
