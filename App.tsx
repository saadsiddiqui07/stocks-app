import React, { useEffect } from 'react';
import MainAppNavigation from './navigation/main';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ViewStyle } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux-store/store';
import SplashScreen from 'react-native-splash-screen';
import notifee from '@notifee/react-native';

const mainStyle: ViewStyle = {
  flex: 1,
};

const App = () => {
  useEffect(() => {
    const init = async () => {
      // get permission for notifications
      await notifee.requestPermission();
      // hide screen when app loads
      SplashScreen.hide();
    };
    init();
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
