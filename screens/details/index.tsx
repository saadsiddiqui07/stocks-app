import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  NavigationProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getStockSymbol } from '../../utils';
import Colors from '../../constants/Colors';

import { StockProps } from '../../interfaces/StockProps';
import { useDispatch, useSelector } from 'react-redux';
import { addStock } from '../../redux-store/actions';
import { RootStackParams } from '../../navigation/stack';
import styles from './styles';

const renderProfitOrLoss = (stock: StockProps) => {
  const hasOpenedUpside = stock.price > stock.previous_close;
  if (hasOpenedUpside) {
    return (
      <View style={styles.ticker}>
        <Ionicons name="caret-up-outline" size={22} color={Colors.profit} />
        <Text style={{ ...styles.percentage, color: Colors.profit }}>
          {stock.change_percent.toFixed(1)} %
        </Text>
      </View>
    );
  } else {
    return (
      <View style={styles.ticker}>
        <Ionicons name="caret-down-outline" size={22} color={'red'} />
        <Text style={{ ...styles.percentage, color: Colors.loss }}>
          {stock.change_percent.toFixed(1)} %
        </Text>
      </View>
    );
  }
};

const DetailsScreen = () => {
  const route = useRoute();
  const { stock }: any = route.params;
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const dispatch = useDispatch();
  const addedStocks = useSelector((state: any) => state.stocks);

  const handleAddToOrder = (item: StockProps) => {
    const isAlreadyAdded = addedStocks.some(
      (existingStock: StockProps) => existingStock.symbol === stock.symbol,
    );
    if (isAlreadyAdded) {
      navigation.navigate('Orders');
      return;
    }
    dispatch(addStock(item));
    navigation.navigate('Orders');
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.detailsView}
        showsVerticalScrollIndicator={false}
        style={styles.container}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={20} color={'#000'} />
        </TouchableOpacity>
        <View style={styles.details}>
          <Text style={styles.symbol}>{getStockSymbol(stock.symbol)}</Text>
          <Text style={styles.title}>{stock.name}</Text>
          <Text style={styles.price}>$ {stock.price.toFixed(2)}</Text>
          {renderProfitOrLoss(stock)}
        </View>
        <Text style={styles.headerText}>Lorem ipsum dolor</Text>
        <Text style={styles.subText}>
          Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Text>
        <Text style={styles.headerText}>Lorem ipsum dolor</Text>
        <Text style={styles.subText}>
          Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Text>
      </ScrollView>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => handleAddToOrder(stock)}>
        <Text style={styles.btnText}>Add to order</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DetailsScreen;
