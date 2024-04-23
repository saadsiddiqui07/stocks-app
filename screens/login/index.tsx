import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigation/stack';
import styles from './styles';

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.screen}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.headline}>Welcome Back!</Text>
          <Text style={styles.subText}>Please login to continue</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholderTextColor={'gray'}
            placeholder="Enter email"
          />
          <TextInput
            secureTextEntry
            style={styles.input}
            placeholderTextColor={'gray'}
            placeholder="Enter password"
          />
        </View>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.bottomText}>Forgot your password? </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
