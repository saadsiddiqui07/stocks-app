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
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
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

const HomeScreen = () => {
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const sheetRef = useRef<BottomSheet>(null);

  // const { data, isLoading } = useQuery({
  //   queryKey: ['stock_gainers'],
  //   queryFn: handleFetchData,
  // });

  // if (isLoading) {
  //   console.log('⚡️⚡️❌❌ Peniding... wait');
  // }
  // console.log(data);
  const searchContainerStyle = useAnimatedStyle(() => {
    return {
      width: showSearchBar ? withTiming(WIDTH * 0.9) : withTiming(0),
      opacity: showSearchBar ? 1 : 0,
      // transform: [
      //   { translateX: showSearchBar ? withTiming(0) : withTiming(100) },
      // ],
    };
  });

  const snapPoints = useMemo(() => ['50%', '90%', '100%'], []);

  const handleSheetChange = useCallback((index: number) => {
    setShowSearchBar(index > 0);
  }, []);

  const renderItem = useCallback(
    (item: StockProps, index: number) => <StockItem key={index} {...item} />,
    [],
  );

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
      {true ? (
        <BottomSheet
          ref={sheetRef}
          // index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChange}>
          {showSearchBar ? (
            <Animated.View style={[styles.search, searchContainerStyle]}>
              <Fontisto name="search" size={18} color={'gray'} />
              <TextInput
                placeholder="Search for stocks"
                placeholderTextColor={'gray'}
                value={input}
                onChangeText={text => setInput(text)}
                style={styles.searchInput}
              />
            </Animated.View>
          ) : null}
          <BottomSheetScrollView
            contentContainerStyle={styles.contentContainer}>
            {/* {Array(50)
              .fill(0)
              .map(index => (
                <StockItem key={`${index.toString()}-12x`} />
              ))} */}
            {DUMMY_DATA.map((item, index) => (
              <StockItem key={index} {...item} />
            ))}
            {/* <View style={{ flex: 1 }}>
          <FlatList
            data={data}
            contentContainerStyle={{ minHeight: '100%' }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View key={item} style={styles.itemContainer}>
                <Text>{item}</Text>
              </View>
            )}
          />
        </View> */}
          </BottomSheetScrollView>
        </BottomSheet>
      ) : (
        <SafeAreaView style={styles.screen}>
          <ActivityIndicator size={'large'} />
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
