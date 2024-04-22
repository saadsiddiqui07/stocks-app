import React from 'react';
import MainAppNavigation from './navigation/main';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ViewStyle} from 'react-native';

const mainStyle: ViewStyle = {
  flex: 1,
};

const App = () => {
  return (
    <GestureHandlerRootView style={mainStyle}>
      <MainAppNavigation />
    </GestureHandlerRootView>
  );
};

export default App;
