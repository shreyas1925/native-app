import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

// using a sample api to test out

const FetchData = () => {

    const [data, setData] = useState([])
    const [isload, isSetLoad] = useState(true)
    const fetchData = async () => {
        try {
            const res = await fetch("https://thapatechnical.github.io/userapi/users.json");
            const mydata = await res.json();
            setData(mydata);
            isSetLoad(false);
        } catch (err) { console.log(err) }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <View style={styles.mainContainer}>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.subContainer}>
                            <Text style={[styles.textStyle, styles.spanStyle]}>{item.userId}</Text>
                            <Text style={styles.textStyle}>{item.name}</Text>
                            <Text style={styles.textStyle}>{item.email}</Text>
                        </View >
                    )
                }}
            />


        </View >
    )
}

export default FetchData

const styles = StyleSheet.create({

    mainContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%"
    },
    subContainer: {
        margin: 10,
        borderWidth: 3,
        padding: 15,
    },
    textStyle: {
        padding: 5,
        fontWeight: "bold"
    },
    spanStyle: {
        borderWidth: 2,
        width: "15%",
        borderRadius: "60%",
        textAlign: "center",
    }
})