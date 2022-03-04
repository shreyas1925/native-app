import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'


const ColorChanger = () => {
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.colortext}>Generate Color</Text>
            </TouchableOpacity>
            {/* <FlatList
                renderItem={({ }) => {
                    return ( */}
            <View style={styles.Container}>
                <View style={styles.subContainer}>
                    text
                </View>
                <View style={styles.subContainer}>
                    text
                </View>
                <View style={styles.subContainer}>
                    text
                </View>
            </View>
            {/* )
                }}
            /> */}

        </View>
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
        marginTop: 50,
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
    subContainer: {
        borderWidth: 3,
        padding: 20,
        width: "40%",
        height: "20%",
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
        backgroundColor: "rgb(198,222,98)"
    },
    colortext: {
        color: "white",
        fontWeight: "bold",
        fontSize: "18px"
    }
})