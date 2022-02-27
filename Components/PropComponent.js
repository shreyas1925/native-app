import { View, Text } from 'react-native'
import React from 'react'
import ImageComponent from './ImageComponent'

const PropComponent = () => {
    return (
        <View>
            <ImageComponent text="Hello World!!" />
            <ImageComponent text="Hello India!!" />
            <ImageComponent text="Hello Karnataka!!" />
        </View>
    )
}

export default PropComponent