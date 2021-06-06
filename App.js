import React from 'react';

import {SafeAreaView, StatusBar} from 'react-native';
import {styles} from './assets/globalStyles';
import Calculator from './screens/Calculator';

const App = () => {
  return (
    <SafeAreaView style={[styles.darkBackground, styles.container]}>
      <StatusBar barStyle="light-content" />
      <Calculator />
    </SafeAreaView>
  );
};

export default App;
