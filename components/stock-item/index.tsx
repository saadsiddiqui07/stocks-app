import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigation/stack';
import { getStockSymbol } from '../../utils';
import { StockProps } from '../../interfaces/StockProps';
import Colors from '../../constants/Colors';
import styles from './styles';
import { AntDesign, Ionicons } from '../icons';

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
  item: StockProps;
  index: number;
  expanded: boolean;
  onToggle: (arg1: number) => void;
}

const StockItem = ({ item, index, expanded, onToggle }: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={expanded ? styles.openView : styles.mainView}
      onLongPress={() => onToggle(index)}
      onPress={() => navigation.navigate('Details', { stock: item })}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>{getStockSymbol(item.symbol)[0]}</Text>
        </View>
        <View style={styles.details}>
          <View style={styles.topDetails}>
            <Text style={styles.symbol}>{getStockSymbol(item.symbol)}</Text>
            {expanded ? (
              <TouchableOpacity onPress={() => onToggle(index)}>
                <AntDesign name="up" size={20} color={'#000'} />
              </TouchableOpacity>
            ) : (
              <Text style={styles.exchange}>{item.exchange}</Text>
            )}
          </View>
          <Text style={styles.title} numberOfLines={1}>
            {item.name}
          </Text>
          <View style={styles.pricing}>
            <Text style={styles.price}>$ {item.price.toFixed(2)}</Text>
            {renderProfitOrLoss(item)}
          </View>
        </View>
      </View>
      {expanded && (
        <View style={styles.textView}>
          <Text style={styles.headerText}>Lorem ipsum dolor</Text>
          <Text style={styles.subText}>
            Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default StockItem;
