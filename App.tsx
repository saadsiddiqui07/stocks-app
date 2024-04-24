import React from 'react';
import MainAppNavigation from './navigation/main';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ViewStyle } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from './redux-store/store';

const queryClient = new QueryClient();

const mainStyle: ViewStyle = {
  flex: 1,
};

const App = () => {
  return (
    <GestureHandlerRootView style={mainStyle}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <MainAppNavigation />
        </Provider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};

export default App;
