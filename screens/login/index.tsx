import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigation/stack';

import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { setEmailPassword } from '../../redux-store/actions';
import { useDispatch } from 'react-redux';
import { isValidEmail } from '../../utils';
import { FontAwesome5, Ionicons } from '../../components/icons';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [valid, setIsValid] = useState<boolean>(false);
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const handleEmailChange = (text: string) => {
    setEmail(text);
    setIsValid(isValidEmail(text));
  };

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Please enter the credentials');
      return;
    }
    if (!valid) {
      Alert.alert('Please enter a valid email.');
      return;
    }
    dispatch(setEmailPassword(email, password));
    navigation.navigate('Home');
    setEmail('');
    setPassword('');
  };

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <FontAwesome5 name="money-check-alt" size={40} color={'#000'} />
          <View>
            <Text style={styles.headline}>Welcome Back!</Text>
            <Text style={styles.subText}>Please login to continue</Text>
          </View>
        </View>
        <View style={styles.form}>
          <View style={styles.row}>
            <Ionicons
              name="mail-outline"
              size={20}
              color={email && !valid ? 'red' : '#000'}
            />
            <TextInput
              value={email}
              onChangeText={text => handleEmailChange(text)}
              style={styles.input}
              placeholderTextColor={'gray'}
              placeholder="Enter email"
            />
          </View>
          <View style={styles.row}>
            <Ionicons name="lock-closed-outline" size={20} color={'#000'} />
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
