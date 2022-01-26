import { StyleSheet, FlatList, Text, View } from 'react-native';
import React from 'react';

const FlastList = () => {

    const listOfnames = [
        {
            name: "Shreyas"
        },
        {
            name: "James"
        },
        {
            name: "John"
        },
        {
            name: "Marim"
        },
        {
            name: "Xoxo"
        },]
    return (
        <View>
            <Text style={styles.text}>List of names 👨‍💻</Text>
            <FlatList data={listOfnames} renderItem={(ele) => {
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