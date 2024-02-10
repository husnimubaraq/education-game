import { View } from 'react-native'
import React from 'react'
import Button from '../../components/button'
import Header from '../../components/header'
import Screen from '../../components/screen'
import { useNavigation } from '@react-navigation/native'
import { StackNavigation } from '../../types'

const Home = () => {

  const { goBack, navigate } = useNavigation<StackNavigation>()

  return (
    <Screen>
      <Header/>

      <View className='flex-row items-center mb-5'>
        <View className='w-[33%]'/>
        <View className='w-[33%]'>
          <Button
            title="Game Berhitung"
            size='text'
            onPress={() => navigate('Game')}
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
            title="Biometrik Berhitung"
            size='text'
          />
        </View>
        <View className='w-[33%]'/>
      </View>
    </Screen>
  )
}

export default Home