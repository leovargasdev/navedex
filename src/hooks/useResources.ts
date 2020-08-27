import * as Font from 'expo-font';
import React, { useEffect } from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Load fonts
        await Font.loadAsync({
          'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
          'Montserrat-SemiBold': require('../../assets/fonts/Montserrat-SemiBold.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
