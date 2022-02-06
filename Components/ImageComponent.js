import { View, Text, Image, StyleSheet, Alert, Button } from 'react-native';
import React from 'react';

export default function ImageComponent() {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>Hello world! 😂</Text>
            <Image
                style={styles.img}
                source={require("./image.jpg")}
            />
            <Button
                style={styles.btn}
                title="Connect us"
                onPress={() => Alert.alert("Hurray!!")}
            />
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
    text: {
        margin: "20px",
        fontSize: "29px",
        fontWeight: "bold"
    }
})
