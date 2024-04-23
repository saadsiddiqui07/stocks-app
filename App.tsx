import React from 'react';
import MainAppNavigation from './navigation/main';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ViewStyle } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const mainStyle: ViewStyle = {
  flex: 1,
};

const App = () => {
  return (
    <GestureHandlerRootView style={mainStyle}>
      <QueryClientProvider client={queryClient}>
        <MainAppNavigation />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};

export default App;
