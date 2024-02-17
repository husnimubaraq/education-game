import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { Navigation } from './navigations'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar
          translucent
          backgroundColor='transparent'
        />
        <Navigation/>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App