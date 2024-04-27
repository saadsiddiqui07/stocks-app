import React, { useEffect } from 'react';
import MainAppNavigation from './navigation/main';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Platform, ViewStyle } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux-store/store';
import SplashScreen from 'react-native-splash-screen';

const mainStyle: ViewStyle = {
  flex: 1,
};

const App = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);

  return (
    <GestureHandlerRootView style={mainStyle}>
      <Provider store={store}>
        <MainAppNavigation />
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
