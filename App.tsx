import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';
import { AppProvider } from './src/hooks/auth';
import useResources from './src/hooks/useResources';
import defaultTheme from './src/styles/theme/default';

const App: React.FC = () => {
  const isLoadingComplete = useResources();

  if (!isLoadingComplete) return null;

  return (
    <NavigationContainer>
      <ThemeProvider theme={defaultTheme}>
        <AppProvider>
          <Routes />
          <StatusBar />
        </AppProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
