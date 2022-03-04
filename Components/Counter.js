import { View, Text, StyleSheet } from 'react-native'

import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-web'

const Counter = () => {

  const [count, setcount] = useState(0)
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textStyle}>
        <Text>{count}</Text>
      </View>

      <View>
        <TouchableOpacity

          style={styles.buttonStyle}
          onPress={() => setcount(count + 5)}
        >
          <Text>Increment</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => { count > 0 ? setcount(count - 5) : setcount(0) }}
        >
          <Text>Decrement</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => { setcount(0) }}
        >
          <Text>Reset</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: "100vh",
  },
  textStyle: {
    borderWidth: 3,
    padding: 15,
    // alignSelf: "stretch",
    width: "40%",
    marginBottom: 30
  },
  buttonStyle: {
    padding: 10,
    borderWidth: 3,
    margin: 30,
    textAlign: "center",
    width: "80%",

  }

})



export default Counter