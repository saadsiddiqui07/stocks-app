import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import styles from './styles';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigation/stack';

const OrdersScreen = () => {
  const stocks = useSelector((state: any) => state.stocks);
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.navigate('Home')}>
            <MaterialIcons name="arrow-back" size={20} color={'#000'} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Open Orders</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrdersScreen;
