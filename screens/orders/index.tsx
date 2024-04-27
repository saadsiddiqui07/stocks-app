import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigation/stack';
import OrderStockItem from '../../components/order-item';
import SwipeButton from 'rn-swipe-button';
import { MaterialIcons } from '../../components/icons';
import { sendNotifications } from '../../notifications';
import { clearStocks } from '../../redux-store/actions';

const OrdersScreen = () => {
  const dispatch = useDispatch();
  const stocks = useSelector((state: any) => state.stocks);
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const [text, setText] = useState('Swipe to Buy');
  const [success, setSuccess] = useState<boolean>(false);

  const handleOnSuccess = () => {
    setText('Confirmed!');
    setSuccess(true);
    sendNotifications(stocks);
    setTimeout(() => {
      navigation.navigate('Home');
      setSuccess(false);
      setText('Swipe to Buy');
      dispatch(clearStocks());
    }, 1000);
  };

  const railStyles = {
    backgroundColor: 'transparent',
    borderColor: success ? '#34C759' : '#FFF5D1',
  };

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={20} color={'#000'} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Open Orders ({stocks?.length})</Text>
        </View>

        {stocks.length === 0 ? (
          <Text style={styles.emptyText}>There are no pending orders</Text>
        ) : (
          <>
            <FlatList
              showsVerticalScrollIndicator={false}
              style={styles.stocks}
              data={stocks}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <OrderStockItem index={index} item={item} />
              )}
            />
            <View style={styles.swipeView}>
              <SwipeButton
                onSwipeFail={() => {
                  setText('Swipe to Buy');
                  setSuccess(false);
                }}
                onSwipeSuccess={handleOnSuccess}
                title={text}
                titleStyles={styles.swipeText}
                titleFontSize={14}
                onSwipeStart={() => setText('Release')}
                railBackgroundColor={success ? '#34C759' : '#FFF5D1'}
                railStyles={railStyles}
                containerStyles={styles.swipeContainer}
                thumbIconBorderColor="white"
                thumbIconBackgroundColor="white"
                thumbIconStyles={styles.iconStyles}
                thumbIconComponent={() => (
                  <MaterialIcons
                    name={success ? 'check' : 'chevron-right'}
                    size={20}
                    color={'#000'}
                  />
                )}
              />
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default OrdersScreen;
