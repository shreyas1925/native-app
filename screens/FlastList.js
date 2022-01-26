import { StyleSheet, FlatList, Text, View } from 'react-native';
import React from 'react';

const FlastList = () => {

    const listOfnames = [
        {
            index: "1",
            name: "Shreyas"
        },
        {
            index: "2",
            name: "James"
        },
        {
            index: "3",
            name: "John"
        },
        {
            index: "4",
            name: "Marim"
        },
        {
            index: "5",
            name: "Xoxo"
        },
        {
            index: "6",
            name: "James"
        },

    ]
    return (
        <FlatList data={listOfnames}
            style={styles.listStyle}
            horizontal
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return (
                    <View style={styles.viewStyle}>
                        <Text style={styles.textStyle}>{item.name}</Text>
                        <Text style={styles.textStyle}>{item.index}</Text>
                    </View>
                )
            }}
        />
    )
}

const styles = StyleSheet.create({
    listStyle: {
        textAlign: "center",
        padding: 5,
        margin: 20
    },
    textStyle: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold"

    },
    viewStyle: {
        margin: 20,
        backgroundColor: "skyblue",
        padding: 15,
    }
})

export default FlastList;