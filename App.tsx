import { View, Text } from 'react-native'
import React, { useCallback } from 'react'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import App from './src/app'

SplashScreen.preventAutoHideAsync();

function IgniteApp() {

  const [fontsLoaded, fontError] = useFonts({
    'Rubik-Medium': require('./assets/fonts/Rubik-Medium.ttf'),
    'Rubik-Regular': require('./assets/fonts/Rubik-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className="flex-1" onLayout={onLayoutRootView}>
      <App />
    </View>
  );
}

export default IgniteApp;