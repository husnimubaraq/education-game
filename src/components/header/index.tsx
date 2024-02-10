import { View, Image, Dimensions } from 'react-native'
import React from 'react'

const { height, width } = Dimensions.get('window')

const IMAGE_SIZE = width / 4

const Header = () => {
  return (
    <View className='items-center '>
        <Image
          source={require('../../../assets/images/logo.png')}
          style={{
            height: IMAGE_SIZE,
            width: '40%',
            marginTop: -60,
          }}
          resizeMode='center'
        />
      </View>
  )
}

export default Header