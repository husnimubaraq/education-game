import { View, Text, BackHandler, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { WebView } from "react-native-webview";
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/button';


const Biometric = () => {
  const { goBack } = useNavigation()

  const webViewRef = React.useRef<any>();

  const [canGoBack, setCanGoBack] = React.useState(false);
  const [currentUrl, setCurrentUrl] = React.useState(
    "https://finger-counter-next.vercel.app"
  );
  const [count, setCount] = useState(0)

  const handleBackButtonPress = () => {
    if (canGoBack) {
      try {
        webViewRef.current?.goBack();
        return true;
      } catch (err: any) {
        console.log("[handleBackButtonPress] Error : ", err.message);
      }
    }
    goBack()
    return true;
  };

  const onMessage = async (event: any) => {
    const { value } = JSON.parse(event.nativeEvent.data)
    
    if(value !== count){
      setCount(value)
    }
  }



  React.useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonPress);
    return () => {
      BackHandler.removeEventListener(
        "hardwareBackPress",
        handleBackButtonPress
      );
    };
  }, [webViewRef, canGoBack]);


  return (
    <View className='flex-1 bg-black'>
      <WebView
        style={styles.container}
        originWhiteList={["*"]}
        ref={webViewRef}
        source={{
          uri: currentUrl,
        }}
        allowUniversalAccessFromFileURLs
        scrollEnabled={true}
        allowFileAccessFromFileURLs
        mediaCapturePermissionGrantType='grant'
        domStorageEnableds
        allowFileAccess
        useWebKit
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction={false}
        startInLoadingState
        thirdPartyCookiesEnabled
        javaScriptEnabledAndroid
        javaScriptEnabled
        scalesPageToFit
        webviewDebuggingEnabled
        javaScriptCanOpenWindowsAutomatically={false}
        onMessage={onMessage}
      />

      <View className='absolute top-7 left-7'>
        <Button
          image={require('../../../assets/images/close-icon.png')}
          imageClassName='w-[25px] h-[25px]'
          size='default'
          onPress={() => goBack()}
        />
      </View>

      <View className='bg-white w-[70px] h-[70px] items-center justify-center rounded-xl absolute bottom-10 left-10'>
        <Text className='text-3xl'>{count}</Text>
      </View>
    </View>
  )
}

export default Biometric

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});