import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React from 'react'


const Netflix = () => {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>Netflix Card</Text>
            <View style={styles.card}>
                <Image style={styles.img} source={require('../assets/image.jpg')} />
                <Text style={styles.main2}>Rakshasudu (Telugu)</Text>
                <Text style={styles.para}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis culpa fuga.
                </Text>
                <Button
                    style={styles.btn}
                    title="Watch now"
                    onPress={() => Alert.alert("Hurray!!")}
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
    },
    card: {
        height: "500px",
        width: "300px",
        borderWidth: 1,
        // display: 'flex',
        // justifyContent: "center",
        // alignItems: 'center'
    },
    img: {
        // flex: 1,
        width: "300px",
        height: "300px",
        // resizeMode: "contain",
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