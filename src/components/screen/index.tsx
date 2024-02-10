import { ImageBackground } from 'react-native'
import React from 'react'
import { TProps } from './type'

const Screen = (props: TProps) => {
    const { children, type = 'default' } = props

    const image = type === 'default' ?
        require('../../../assets/images/bg2.jpg') :
        require('../../../assets/images/bg.jpg')

    return (
        <ImageBackground
            source={image}
            className='flex-1 p-10 '
        >
            {children}
        </ImageBackground>
    )
}

export default Screen