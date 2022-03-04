import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react/cjs/react.development';


const ColorChanger = () => {
    const [colors, setColors] = useState([]);

    const getRandomColor = () => {
        const red = Math.floor(Math.random() * 256)
        const green = Math.floor(Math.random() * 256)
        const blue = Math.floor(Math.random() * 256)

        return `rgb(${red}, ${green}, ${blue})`
    }


    console.log(colors)
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => setColors([...colors, getRandomColor()])}
            >
                <Text style={styles.colortext}>Generate Color</Text>
            </TouchableOpacity>
            <FlatList
                data={colors}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.Container}>
                            <Text style={{
                                borderWidth: 3,
                                padding: 10,
                                width: "40%",
                                height: "20%",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                margin: 10,
                                backgroundColor: item
                            }}>

                            </Text>
                        </View>
                    )
                }}
            />

        </View >
    )
}

export default ColorChanger

const styles = StyleSheet.create({

    mainContainer: {
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8edeb"
    },
    buttonStyle: {
        marginTop: 20,
        borderWidth: 2,
        padding: 10,
        width: "70%",
        backgroundColor: "#48cae4",
        textAlign: "center",
    },
    Container: {
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh"
    },
    colortext: {
        color: "white",
        fontWeight: "bold",
        fontSize: "18px"
    }
})