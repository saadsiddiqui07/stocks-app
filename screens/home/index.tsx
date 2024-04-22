import React, {useCallback, useMemo, useRef} from 'react';
import {Button, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import styles from './styles';

const HomeScreen = () => {
  const sheetRef = useRef<BottomSheet>(null);
  // const [data, setData] = useState([])

  // const handleFetchData = async () => {
  //   const url =
  //     'https://real-time-finance-data.p.rapidapi.com/market-trends?trend_type=GAINERS&country=us&language=en&limit=5';
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': 'f8293ee274msh7cec4216d5c79c0p141008jsnc3444444ceb8',
  //       'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com',
  //     },
  //   };
  //   try {
  //     const response = await fetch(url, options);
  //     const result = await response.json();
  //     console.log(result.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // handleFetchData();
  // variables
  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    [],
  );
  const snapPoints = useMemo(() => ['60%', '90%', '100%'], []);

  const handleSheetChange = useCallback((index: number) => {
    console.log('handleSheetChange', index);
  }, []);

  const handleSnapPress = useCallback((index: number) => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  const renderItem = useCallback(
    (item: any) => (
      <View key={item} style={styles.itemContainer}>
        <Text>{item}</Text>
      </View>
    ),
    [],
  );

  return (
    <SafeAreaView style={styles.screen}>
      <Button title="Snap To 90%" onPress={() => handleSnapPress(2)} />
      <Button title="Snap To 50%" onPress={() => handleSnapPress(1)} />
      <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} />
      <Button title="Close" onPress={() => handleClosePress()} />
      <BottomSheet
        ref={sheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChange}>
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
          {data.map(renderItem)}
        </BottomSheetScrollView>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default HomeScreen;
