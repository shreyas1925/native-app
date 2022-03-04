import { StyleSheet, Text, View, Button, Image, Linking } from 'react-native'
import React from 'react'
import {
    AguafinaScript_400Regular
} from '@expo-google-fonts/aguafina-script'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
const Netflix = () => {


    let [fontsl] = useFonts({
        AguafinaScript_400Regular
    })

    if (!fontsl) return <AppLoading />
    return (
        <View style={styles.main}>
            <Text style={styles.text}>Netflix Card</Text>
            <View style={styles.card}>
                <Image style={styles.img} source={require('../assets/raksha.jpg')} />
                <Text style={styles.main2}>Rakshasudu (Telugu)</Text>
                <Text style={styles.para}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis culpa fuga.
                </Text>
                <Button
                    style={styles.btn}
                    title="Watch now"
                    onPress={() => Linking.openURL("https://netflix.com/")}
                />
            </View>
        </View>
    )
}

export default Netflix

const styles = StyleSheet.create({
    main: {
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        textAlign: 'center',
        fontSize: 25,
        marginBottom: 10,
        fontWeight: "bold",
        fontFamily: "AguafinaScript_400Regular"
    },
    card: {
        height: undefined,
        width: "300px",
        borderWidth: 1,
        // display: 'flex',
        // justifyContent: "center",
        // alignItems: 'center'
    },
    img: {
        // flex: 1,
        marginTop: 30,
        width: "300px",
        height: undefined,
        aspectRatio: 1,
        resizeMode: "contain",
    },
    para: {
        // textAlign: 'center',
        marginTop: 20,
        marginBottom: 49,
        fontWeight: "bold",
        padding: 5
    },
    main2: {
        textAlign: 'center',
        fontSize: 18,
        marginTop: 5,
        fontWeight: "bold"
    }

})