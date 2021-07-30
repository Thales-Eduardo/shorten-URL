import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StorageProvider } from './src/hooks/Storage';

import Routes from './src/routes/index';

const App = () => {
  return (
    <NavigationContainer>
      <StorageProvider>
        <Routes />
      </StorageProvider>
    </NavigationContainer>
  );
};

export default App;
