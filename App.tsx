import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './src/styles/theme/default';
import useResources from './src/hooks/useResources';

import Routes from './src/routes';

const App: React.FC = () => {
  const isLoadingComplete = useResources();

  if (!isLoadingComplete) return null;

  return (
    <ThemeProvider theme={defaultTheme}>
      <SafeAreaProvider>
        <Routes />
        <StatusBar />
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
