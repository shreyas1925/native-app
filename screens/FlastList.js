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
        },]
    return (
        <View>
            <Text style={styles.text}>List of names 👨‍💻</Text>
            <FlatList keyExtractor={(key) => { return key.index }}
                data={listOfnames} renderItem={(ele) => {
                    return <Text style={styles.lists}>{ele.item.name}</Text>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
        fontWeight: "bold"
    },
    lists: {
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 20
    }
})

export default FlastList;