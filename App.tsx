import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './src/styles/theme/default';
import useResources from './src/hooks/useResources';

import Routes from './src/routes';
import { AppProvider } from './src/hooks/auth';

const App: React.FC = () => {
  const isLoadingComplete = useResources();

  if (!isLoadingComplete) return null;

  return (
    <ThemeProvider theme={defaultTheme}>
      <AppProvider>
        <Routes />
        <StatusBar />
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
