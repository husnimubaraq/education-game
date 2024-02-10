import { View } from 'react-native'
import React from 'react'
import Button from '../../components/button'
import Header from '../../components/header'
import Screen from '../../components/screen'
import { useNavigation } from '@react-navigation/native'
import { StackNavigation } from '../../types'

const Game = () => {

  const { goBack, navigate } = useNavigation<StackNavigation>()

  return (
    <Screen type='main'>
      <Header/>

      <View className='flex-row items-center mb-5'>
        <View className='w-[33%]'/>
        <View className='w-[33%]'>
          <Button
            title="Game Penjumlahan"
            size='text'
            onPress={() => navigate('Play')}
          />
        </View>
        <View className='w-[33%]'/>
      </View>
      
      <View className='flex-row items-center '>
        <View className='w-[33%]'>
          <Button
            image={require('../../../assets/images/close-icon.png')}
            imageClassName='w-[25px] h-[25px]'
            size='default'
            onPress={() => goBack()}
          />
        </View>
        <View className='w-[33%]'>
          <Button
            title="Game Pengurangan"
            size='text'
          />
        </View>
        <View className='w-[33%]'/>
      </View>
    </Screen>
  )
}

export default Game