/* eslint-disable global-require */
import * as Font from 'expo-font';
import React, { useEffect } from 'react';

const useCachedResources = (): boolean => {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await Font.loadAsync({
          'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
          'Montserrat-SemiBold': require('../../assets/fonts/Montserrat-SemiBold.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
};

export default useCachedResources;
