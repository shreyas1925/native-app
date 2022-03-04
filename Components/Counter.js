import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-web'

const Counter = () => {

  const [count, setcount] = useState(0)
  return (
    <View>
      <Text>{count}</Text>

      <TouchableOpacity
        onPress={() => setcount(count + 5)}
      >
        <Text>Increment</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => { count > 0 ? setcount(count - 5) : setcount(0) }}
      >
        <Text>Decrement</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => { setcount(0) }}
      >
        <Text>Reset</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Counter