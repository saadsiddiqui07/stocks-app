import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigation/stack';
import { getStockSymbol } from '../../utils';
import { StockProps } from '../../interfaces/StockProps';
import Colors from '../../constants/Colors';
import styles from './styles';

const StockItem = (item: StockProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onLongPress={() => console.log('Long pressed!')}
      onPress={() => navigation.navigate('Details', { stock: item })}>
      <Text>Logo</Text>
      <View style={styles.details}>
        <Text style={styles.symbol}>{getStockSymbol(item.symbol)}</Text>
        <Text style={styles.title} numberOfLines={1}>
          {item.name}
        </Text>
        <View style={styles.pricing}>
          <Text style={styles.price}>${item.price.toFixed(2)}</Text>
          <View style={styles.ticker}>
            <Ionicons name="caret-up-outline" size={20} color={Colors.profit} />
            <Text style={styles.percentage}>
              {item.change_percent.toFixed(1)} %
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default StockItem;
