import { Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Button from '../../components/button'
import Header from '../../components/header'
import Screen from '../../components/screen'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import LottieView from "lottie-react-native";
import { twMerge } from 'tailwind-merge'
import { RootStackParamList } from '../../types'

const shuffle = (array: number[]) => { 
  for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  } 
  return array; 
}; 

type TButtonAnswerProps = {
  title: string
  onPress?: () => void
}

const ButtonAnswer = (props: TButtonAnswerProps) => {
  const { title, onPress } = props

  const [color, setColor] = useState('text-black')
  const [bgColor, setBgColor] = useState('bg-white')

  return (
    <TouchableWithoutFeedback
      onPressIn={(() => {
        setBgColor('bg-[#8a5335]')
        setColor('text-white')
      })}
      onPressOut={() => {
        setBgColor('bg-white')
        setColor('text-black')
        onPress && onPress()
      }}
    >
      <View className={twMerge(
        'bg-white w-[70px] h-[70px] items-center justify-center rounded-xl',
        bgColor
      )}>
        <Text className={twMerge(
          'text-2xl',
          color
        )}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}


const Play = () => {

  const { goBack } = useNavigation()
  const { params } = useRoute<RouteProp<RootStackParamList, 'Play'>>()

  const { operator } = params

  const [a, setA] = useState(0)
  const [b, setB] = useState(Math.floor(Math.random() * 10))
  const [answers, setAnswers] = useState<number[]>([])
  const [level, setLevel] = useState(1)
  const [stage, setStage] = useState(1)

  const onAnswer = (answer: number) => {
    if(operator === 'plus'){
      const c = a + b

      if(c === answer){
        setLevel(level * 2)
        setStage(stage + 1)
      }else{
        alert('salah')
      }
    }else{
      const c = a - b

      if(c === answer){
        setLevel(level * 2)
        setStage(stage + 1)
      }else{
        alert('salah')
      }
    }
  }

  useEffect(() => {
    const count = 10 * level

    const x = Math.floor(Math.random() * count)
    setA(x)

    const y = Math.floor(Math.random() * count)
    setB(y)

    if(operator === 'plus'){
      const z = x + y

      const dataAnswers: number[] = [
        Math.floor(Math.random() * count) === z ? z + 2 : Math.floor(Math.random() * count),
        z,
        Math.floor(Math.random() * count) === z ? z + 2 : Math.floor(Math.random() * count)
      ]

      setAnswers(shuffle(dataAnswers))
    }else{
      const z = x - y

      const dataAnswers: number[] = [
        Math.floor(Math.random() * count) === z ? z + 2 : Math.floor(Math.random() * count),
        z,
        Math.floor(Math.random() * count) === z ? z + 2 : Math.floor(Math.random() * count)
      ]

      setAnswers(shuffle(dataAnswers))
    }
  }, [level])

  return (
    <Screen type='main'>
      <Header/>

      <View className='items-center'>
        <View className='bg-white w-[30%] h-[70px] items-center justify-center rounded-xl'>
          <Text className='text-2xl'>{a} {operator === 'plus' ? '+' : '-'} {b} = </Text>
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
          {answers.map((answer, index) => (
            <ButtonAnswer
              key={index}
              title={answer.toString()}
              onPress={() => onAnswer(answer)}
            />
          ))}
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
      <View className='bg-white w-[70px] h-[70px] items-center justify-center rounded-xl absolute top-5 right-5'>
        <Text className='text-md'>Level</Text>
        <Text className='text-2xl'>{stage}</Text>
      </View>
    </Screen>
  )
}

export default Play