import { View } from 'react-native'
import React from 'react'
import Button from '../../components/button'
import Header from '../../components/header'
import Screen from '../../components/screen'
import { useNavigation } from '@react-navigation/native'
import { StackNavigation } from '../../types'

const Main = () => {
  const { navigate } = useNavigation<StackNavigation>()

  return (
    <Screen>
      <Header/>

      <View className='items-center mt-10 ml-10'>
        <Button
          image={require('../../../assets/images/play-icon.png')}
          imageClassName='w-[40px] h-[40px]'
          size='large'
          onPress={() => navigate('Home')}
        />
      </View>
      <View className='-mt-10'>
        <Button
          image={require('../../../assets/images/close-icon.png')}
          imageClassName='w-[25px] h-[25px]'
          size='default'
        />
      </View>
    </Screen>
  )
}

export default Main