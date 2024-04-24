import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigation/stack';
import { getStockSymbol } from '../../utils';
import { StockProps } from '../../interfaces/StockProps';
import Colors from '../../constants/Colors';
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

const OrderStockItem = (item: StockProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onLongPress={() => console.log('Long pressed!')}
      onPress={() => navigation.navigate('Details', { stock: item })}>
      <Text style={styles.logo}>{getStockSymbol(item.symbol)[0]}</Text>
      <View style={styles.details}>
        <View style={styles.topDetails}>
          <Text style={styles.symbol}>{getStockSymbol(item.symbol)}</Text>
          <Text style={styles.exchange}>{item.exchange}</Text>
        </View>
        <Text style={styles.title} numberOfLines={1}>
          {item.name}
        </Text>
        <View style={styles.pricing}>
          <Text style={styles.price}>$ {item.price.toFixed(2)}</Text>
          {renderProfitOrLoss(item)}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OrderStockItem;
