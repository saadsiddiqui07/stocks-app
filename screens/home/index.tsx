import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  ActivityIndicator,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import styles from './styles';
import StockItem from '../../components/stock-item';
import { StockProps } from '../../interfaces/StockProps';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { WIDTH } from '../../constants';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigation/stack';
import { debounce } from '../../utils';
import { Feather, FontAwesome5, Fontisto } from '../../components/icons';
import { useSelector } from 'react-redux';

const HomeScreen = () => {
  const sheetRef = useRef<BottomSheet>(null);
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const orders = useSelector((state: any) => state.stocks);
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');
  const [data, setData] = useState<StockProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [startIndex, setStartIndex] = useState<number>(0);
  const listSize = 5;

  const snapPoints = useMemo(() => ['50%', '80%', '100%'], []);

  const handleSheetChange = useCallback((index: number) => {
    setShowSearchBar(index > 0);
  }, []);

  const searchContainerStyle = useAnimatedStyle(() => {
    return {
      width: showSearchBar ? withTiming(WIDTH * 0.9) : withTiming(0),
      opacity: showSearchBar ? 1 : 0,
    };
  });

  const toggleAccordion = (index: number) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const handleFetchData = async () => {
    setLoading(true);
    const url =
      'https://real-time-finance-data.p.rapidapi.com/market-trends?trend_type=GAINERS&country=us&language=en';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '8babf33580msha25b0c7649b04c1p1735d5jsn209b481ca521',
        'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com',
      },
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const allStocks = result?.data?.trends;
      loadVisibleStocks(allStocks);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const loadVisibleStocks = (allStocks: StockProps[]) => {
    const endIndex = startIndex + listSize;
    const newVisibleStocks = allStocks.slice(startIndex, endIndex);
    setData(prevVisibleStocks => [...prevVisibleStocks, ...newVisibleStocks]);
    setLoading(false);
    setStartIndex(endIndex);
  };

  const handleLoadMore = () => {
    if (!loading) {
      handleFetchData();
    }
  };

  const renderFooter = () => {
    return loading ? (
      <ActivityIndicator
        style={styles.flatListFooter}
        size="small"
        color="#090909"
      />
    ) : null;
  };

  const fetchSearchResults = async (text: string) => {
    setIsSearching(true);
    const url = `https://real-time-finance-data.p.rapidapi.com/search?query=${text}&language=en`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '8babf33580msha25b0c7649b04c1p1735d5jsn209b481ca521',
        'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result.data.stock);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSearching(false);
    }
  };

  const debouncedSearch = debounce(fetchSearchResults, 1000);

  const handleSearch = (text: string) => {
    setInput(text);
    if (text === '') {
      handleFetchData();
    } else {
      debouncedSearch(text);
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar backgroundColor={'#e2e8f0'} barStyle={'dark-content'} />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Fontisto name="person" size={28} color={'#000'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.orders}
          onPress={() => navigation.navigate('Orders')}>
          <Feather name="briefcase" size={28} color={'#000'} />
          {orders.length >= 1 && (
            <Text style={styles.count}>{orders.length}</Text>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <FontAwesome5 name="chart-line" size={40} color={'#000'} />
        <Text style={styles.tagLine}>Experience the Power of Investments</Text>
        <Text style={styles.subText}>Few clicks to Financial Freedom</Text>
      </View>

      <BottomSheet
        ref={sheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChange}>
        {showSearchBar ? (
          <Animated.View style={[styles.search, searchContainerStyle]}>
            <Fontisto name="search" size={18} color={'gray'} />
            <TextInput
              placeholder="Search for stocks"
              placeholderTextColor={'gray'}
              value={input}
              onChangeText={handleSearch}
              style={styles.searchInput}
            />
            {input && (
              <TouchableOpacity
                onPress={() => {
                  setInput('');
                  handleFetchData();
                }}>
                <Fontisto name="close-a" size={15} color={'gray'} />
              </TouchableOpacity>
            )}
          </Animated.View>
        ) : null}

        {isSearching ? (
          <ActivityIndicator size={'large'} />
        ) : (
          <BottomSheetFlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
            data={data}
            ListFooterComponent={renderFooter}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.1}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <StockItem
                key={index}
                item={item}
                index={index}
                expanded={index === expandedIndex}
                onToggle={toggleAccordion}
              />
            )}
          />
        )}
      </BottomSheet>
    </SafeAreaView>
  );
};

export default HomeScreen;
