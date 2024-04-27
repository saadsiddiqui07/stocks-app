import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { DUMMY_DATA, WIDTH } from '../../constants';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigation/stack';
import { debounce } from '../../utils';

const HomeScreen = () => {
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');
  const [data, setData] = useState<Partial<StockProps>[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const sheetRef = useRef<BottomSheet>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const batchSize = 5;

  const toggleAccordion = (index: number) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  // useEffect(() => {
  //   handleFetchData();
  // }, []);

  const handleFetchData = async () => {
    setLoading(true);
    const url =
      'https://real-time-finance-data.p.rapidapi.com/market-trends?trend_type=GAINERS&country=us&language=en';

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '9f63ccf996msh2386233fa68e266p1af147jsn7fe2aeabaa76',
        'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const allStocks = result?.data?.trends;
      loadVisibleStocks(allStocks);
      // console.log(result?.data?.trends);
      // setData(result.data?.trends);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const loadVisibleStocks = (allStocks: StockProps[]) => {
    const endIndex = startIndex + batchSize;
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
        style={{ marginVertical: 10 }}
        size="large"
        color="blue"
      />
    ) : null;
  };

  const searchContainerStyle = useAnimatedStyle(() => {
    return {
      width: showSearchBar ? withTiming(WIDTH * 0.9) : withTiming(0),
      opacity: showSearchBar ? 1 : 0,
    };
  });

  const snapPoints = useMemo(() => ['50%', '90%', '100%'], []);

  const handleSheetChange = useCallback((index: number) => {
    setShowSearchBar(index > 0);
  }, []);

  const fetchSearchResults = async (text: string) => {
    console.log('Query fired!', text);
    return;
    setIsSearching(true);
    const url = `https://real-time-finance-data.p.rapidapi.com/search?query=${text}&language=en`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '9f63ccf996msh2386233fa68e266p1af147jsn7fe2aeabaa76',
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
      <StatusBar backgroundColor={'#e2e8f0'} />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Fontisto name="person" size={28} color={'#000'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Orders')}>
          <Feather name="briefcase" size={28} color={'#000'} />
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
                  setData(prevData => prevData);
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
