import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Routes from './src/routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <Routes />
      <StatusBar />
    </SafeAreaProvider>
  );
}
