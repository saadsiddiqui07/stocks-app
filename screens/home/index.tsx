import React, { useCallback, useMemo, useRef } from 'react';
import { ActivityIndicator, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import styles from './styles';
import StockItem from '../../components/stock-item';
import { useQuery } from '@tanstack/react-query';
import { handleFetchData } from '../../api-services';
import { StockProps } from '../../interfaces/StockProps';

const HomeScreen = () => {
  const sheetRef = useRef<BottomSheet>(null);
  const { data, isLoading } = useQuery({
    queryKey: ['stocks'],
    queryFn: handleFetchData,
  });

  if (isLoading) {
    console.log('⚡️⚡️❌❌ Peniding... wait');
  }

  // const rawData = useMemo(
  //   () =>
  //     Array(50)
  //       .fill(0)
  //       .map((_, index) => `index-${index}`),
  //   [],
  // );
  const snapPoints = useMemo(() => ['50%', '90%', '99%'], []);

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
    (item: StockProps, index: number) => <StockItem key={index} {...item} />,
    [],
  );

  if (isLoading) {
    return (
      <SafeAreaView style={styles.screen}>
        <ActivityIndicator size={'large'} />
      </SafeAreaView>
    );
  }

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
    </SafeAreaView>
  );
};

export default HomeScreen;
