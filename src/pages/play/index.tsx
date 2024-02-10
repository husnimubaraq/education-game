import { Text, View } from 'react-native'
import React from 'react'
import Button from '../../components/button'
import Header from '../../components/header'
import Screen from '../../components/screen'
import { useNavigation } from '@react-navigation/native'
import LottieView from "lottie-react-native";

const Play = () => {

  const { goBack } = useNavigation()

  return (
    <Screen type='main'>
      <Header/>

      <View className='items-center'>
        <View className='bg-white w-[30%] h-[70px] items-center justify-center rounded-xl'>
          <Text className='text-2xl'>1 + 1 = </Text>
        </View>
      </View>
      
      <View className='flex-row items-center justify-between mt-10'>
        <View className='w-[30%]'>
          <Button
            image={require('../../../assets/images/close-icon.png')}
            imageClassName='w-[25px] h-[25px]'
            size='default'
            onPress={() => goBack()}
          />
        </View>
        <View className='flex-1 flex-row items-center justify-between'>
          <View className='bg-white w-[70px] h-[70px] items-center justify-center rounded-xl'>
            <Text className='text-2xl'>1</Text>
          </View>
          <View className='bg-white w-[70px] h-[70px] items-center justify-center rounded-xl'>
            <Text className='text-2xl'>3</Text>
          </View>
          <View className='bg-white w-[70px] h-[70px] items-center justify-center rounded-xl'>
            <Text className='text-2xl'>5</Text>
          </View>
        </View>
        <View className='w-[30%]'/>
      </View>
      <View className='absolute right-0 top-0 bottom-0 justify-center'>
        <LottieView
          source={require("../../../assets/animations/guide.json")}
          style={{width: 250, height: 300, marginTop: 100}}
          autoPlay
          loop
        />
      </View>
    </Screen>
  )
}

export default Play