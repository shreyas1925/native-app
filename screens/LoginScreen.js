import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CheckBox from "expo-checkbox"

const LoginScreen = () => {

    const [checked, setChecked] = useState(false);

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.textStyle}>Login Form</Text>
            <Text style={styles.description}>Contact us for an queries regarding placements <br />@shreyas__19</Text>
            <View style={styles.subContainer}>
                <Text style={styles.lableStyle}>Enter your name</Text>
                <TextInput
                    style={styles.inputStyle}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </View>
            <View style={styles.subContainer}>
                <Text style={styles.lableStyle}>Enter your password</Text>
                <TextInput
                    style={styles.inputStyle}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.wrapperStyle}>
                <CheckBox style={styles.checkboxStyle}
                    value={checked}
                    onValueChange={() => { setChecked(!checked) }}
                    color={checked ? "#219ebc" : undefined}
                />
                <Text style={styles.policyTextStyle}>I agree for all rules and policies</Text>
            </View>
            <View>
                <TouchableOpacity
                    disabled={!checked}
                    style={checked ? styles.buttonStyle : styles.buttonStyle1}>
                    <Text style={styles.textStyle1}>Login</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 40,
        paddingVertical: 60,
        height: "100vh",
    },
    textStyle: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 30
    },
    textStyle1: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 14,
        textAlign: "center",
        paddingVertical: 2,
        color: "white"
    },
    description: {
        marginTop: 30,
        marginBottom: 50,
        fontWeight: "400",
        fontSize: 18
    },
    lableStyle: {
        fontSize: 18,
        fontWeight: "700"
    },
    inputStyle: {
        borderWidth: 2,
        marginVertical: 15,
        width: "100%",
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    wrapperStyle: {
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
    },
    checkboxStyle: {
        marginRight: 10,
        marginTop: 2,
    },
    policyTextStyle: {
        fontSize: 14,
        fontWeight: "400"
    },
    buttonStyle: {
        marginTop: 30,
        borderWidth: 0,
        width: "100%",
        padding: 8,
        backgroundColor: "#219ebc"
    },
    buttonStyle1: {
        marginTop: 30,
        borderWidth: 0,
        width: "100%",
        padding: 8,
        backgroundColor: "lightgrey"
    }
})