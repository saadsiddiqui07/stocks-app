import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { getStockSymbol } from '../../utils';
import { StockProps } from '../../interfaces/StockProps';
import Colors from '../../constants/Colors';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { removeStock } from '../../redux-store/actions';
import Animated, { SlideInLeft } from 'react-native-reanimated';
import { Ionicons } from '../icons';

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

interface Props {
  index: number;
  item: StockProps;
}

const OrderStockItem = ({ index, item }: Props) => {
  const dispatch = useDispatch();

  const handleRemove = (symbol: string) => {
    dispatch(removeStock(symbol));
  };

  return (
    <Animated.View
      entering={SlideInLeft.delay(index * 1.5)
        .springify()
        .damping(20)}
      style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>{getStockSymbol(item.symbol)[0]}</Text>
      </View>
      <View style={styles.detailsRow}>
        <View style={styles.details}>
          <Text style={styles.symbol}>{getStockSymbol(item.symbol)}</Text>
          <Text style={styles.title} numberOfLines={1}>
            {item.name}
          </Text>
          <View style={styles.pricing}>
            <Text style={styles.price}>$ {item.price.toFixed(2)}</Text>
            {renderProfitOrLoss(item)}
          </View>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => handleRemove(item.symbol)}>
          <Ionicons name="trash-outline" size={25} color={'#000'} />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default OrderStockItem;
