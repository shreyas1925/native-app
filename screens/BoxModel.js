import { View, Text } from 'react-native'
import React from 'react'

const BoxModel = () => {
    return (
        <View>
            <Text>BoxModel</Text>
        </View>
    )
}

export default BoxModel

// 1. paddingVertical and paddingHorizontal in react native
// 2. borderWidth , borderColor
// 3. marginHorizontal, marginVertical
// 4. In React native flex direction will be default column
// 5. So justify works on vertical we can change it
// 6. always use flexdirection,justifycontent etc on parent only
// 7.flex:1, align-self can be use any child div