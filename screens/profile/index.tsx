import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import { WIDTH } from '../../constants';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigation/stack';
import { setEmailPassword } from '../../redux-store/actions';
import { Ionicons } from '../../components/icons';

const ProfileScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const { email } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(setEmailPassword('', ''));
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={20} color={'white'} />
        </TouchableOpacity>
        <Ionicons name="person-circle" size={WIDTH * 0.6} color={'gray'} />
        <Text style={styles.email}>{email}</Text>
      </View>

      <TouchableOpacity style={styles.btn} onPress={logout}>
        <Text style={styles.btnText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileScreen;
