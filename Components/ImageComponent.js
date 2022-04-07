import React from 'react';
import { View, Text, Image, StyleSheet, Alert, Button } from 'react-native';

import {
    Akronim_400Regular
} from '@expo-google-fonts/akronim'

import { useFonts } from 'expo-font';
import AppLoading from "expo-app-loading"
export default function ImageComponent({ text }) {
    let [fontsl] = useFonts({
        Akronim_400Regular
    })

    if (!fontsl) {
        return < AppLoading />
    }
    return (
        <View style={styles.view}>
            <Text style={styles.text}>{text}</Text>
            <Image
                style={styles.img}
                source={require("../assets/image.jpg")}
            />
            <Button
                style={styles.btn}
                title="Connect us"
                onPress={() => Alert.alert("Hurray!!")}
            />

            {/* <TouchableOpacity
                style={styles.btn}
                onPress={() => console.log("Hurray!!")}
            >
                <Text style={styles.textb}>Connect dude</Text>
            </TouchableOpacity> */}

        </View>
    );
}

const styles = StyleSheet.create({

    img: {
        width: 300,
        height: 300,
        margin: "20px"
    },
    view: {
        height: 600,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    textb: {
        color: "skyblue",
        fontWeight: "bold",
        fontsize: 17,
        fontFamily: "Akronim_400Regular",
    },
    btn: {
        borderWidth: 3,
        borderColor: "skyblue",
        backgroundColor: "white",
        padding: "13px"
    },
    text: {
        margin: "20px",
        fontSize: 29,
        fontWeight: "bold",
        fontFamily: "Akronim_400Regular",

    }
})
