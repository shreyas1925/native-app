import { View, Text } from 'react-native'
import React from 'react'
import ImageComponent from './ImageComponent'

// props always work from parent to child
// we have destructuring in props ({})

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