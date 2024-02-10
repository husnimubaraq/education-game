import { View, Text, TouchableWithoutFeedback, Animated, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { TProps } from './type'

const ROUNDED_HEIGHT = 12 * 5
const ROUNDED_INNER = 16 * 5
const ROUNDED_OUTER = 14 * 5

const Button = (props: TProps) => {
    const { 
        title,
        image, 
        imageClassName, 
        onPress, 
        size = 'default' 
    } = props

    const [animation] = useState(new Animated.Value(0))

    const sizeOptions: any = {
        default: {
            container: {
                height: 80,
                width: 80
            },
            height: {
                borderRadius: 12 * 5
            },
            inner: {
                borderRadius: 16 * 5
            },
            outer: {
                borderRadius: 14 * 5
            },
            spacing: 7
        },
        large: {
            container: {
                height: 120,
                width: 120
            },
            height: {
                borderRadius: 12 * 5
            },
            inner: {
                borderRadius: 16 * 5
            },
            outer: {
                borderRadius: 14 * 5
            },
            spacing: 13
        },
        text: {
            container: {
                height: 80,
                width: 'auto'
            },
            height: {
                borderRadius: 12
            },
            inner: {
                borderRadius: 12,
                paddingHorizontal: 20
            },
            outer: {
                borderRadius: 14
            },
            spacing: 8
        }
    }[size]

    const onPressIn = () => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 100,
            useNativeDriver: false
        }).start()
    }

    const onPressOut = () => {
        Animated.timing(animation, {
            toValue: 0,
            duration: 50,
            useNativeDriver: false
        }).start()

        onPress && onPress()
    }

    const innerStyle = {
        borderRadius: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [ROUNDED_HEIGHT, ROUNDED_INNER]
        })
    }

    const heightStyle = {
        marginTop: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [-sizeOptions.spacing, 0]
        }),
        paddingBottom: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [sizeOptions.spacing, 0]
        })
    }

    return (
        <TouchableWithoutFeedback
            onPressIn={onPressIn}
            onPressOut={onPressOut}
        >
            <View 
                style={[
                    styles.container,
                    sizeOptions.container
                ]}
            >
                <View 
                    style={[
                        styles.outer,
                        sizeOptions.outer
                    ]}
                >
                    <Animated.View 
                        style={[
                            styles.height, 
                            sizeOptions.height,
                            heightStyle,
                        ]}
                    >
                        <Animated.View 
                            style={[
                                styles.inner, 
                                innerStyle,
                                sizeOptions.inner,
                            ]}
                        >
                            {title ? (
                                <Text style={styles.white}>{title}</Text>
                            ) : (
                                <Image 
                                    source={image}
                                    className={imageClassName}
                                    style={{
                                        tintColor: 'white'
                                    }}
                                />
                            )}
                        </Animated.View>
                    </Animated.View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        height: 120,
        width: 120
    },
    outer: {
        flex: 1,
        padding: 10,
        borderRadius: 13,
        backgroundColor: 'rgba(107,52,23,.65)'
    },
    height: {
        borderRadius: 16,
        backgroundColor: '#6b3417'
    },
    inner: {
        backgroundColor: '#8a5335',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    white: {
        color: 'white',
        fontFamily: 'Rubik-Medium',
        fontSize: 20
    }
})
