import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CheckBox from "expo-checkbox"


const LoginScreen = ({ navigation }) => {
    const [checked, setChecked] = useState(false);
    const [name, setName] = useState("")
    const [password, setPassword] = useState(null)

    const submitDetails = () => {
        // return Alert.alert(name, password);
        if (name === "Shreyas" && password === "1234") {
            navigation.navigate("Home")
            Alert.alert(`Successfully logged ${name}`)
            console.log(`Successfully logged ${name}`)
        } else {
            Alert.alert("Invalid credentials")
            console.log("Invalid credentials")
        }
    }
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
                    value={name}
                    // onChange={(e) => setName(e.target.value)} 
                    onChangeText={(data) => setName(data)}
                />
            </View>
            <View style={styles.subContainer}>
                <Text style={styles.lableStyle}>Enter your password</Text>
                <TextInput
                    style={styles.inputStyle}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(data) => setPassword(data)}
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
                    style={checked ? styles.buttonStyle : styles.buttonStyle1}
                    onPress={() => submitDetails()}>
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
        fontSize: 16,
        textAlign: "center",
        paddingVertical: 2,
        color: "white",
        textTransform: "uppercase",
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