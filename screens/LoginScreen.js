import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const LoginScreen = () => {
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
                // secureTextEntry={true}
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
                <Text style={styles.checkboxStyle}>a</Text>
                <Text style={styles.policyTextStyle}>I agree for all rules and policies</Text>
            </View>
            <View >
                <TouchableOpacity style={styles.buttonStyle}>
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
        width: "60%",
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    wrapperStyle: {
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
    },
    checkboxStyle: {
        marginRight: 25
    },
    policyTextStyle: {
        fontSize: 14,
        fontWeight: "400"
    },
    buttonStyle: {
        marginTop: 30,
        borderWidth: 1,
        width: "60%",
        padding: 5,
        backgroundColor: "#219ebc"
    }
})