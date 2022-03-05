import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

// using a sample api to test out

const FetchData = () => {

    const [data, setData] = useState([])
    const [isload, isSetLoad] = useState(true)
    const fetchData = async () => {
        try {
            const res = await fetch("https://shreyas1925.github.io/restapi-userdata/biodata.json");
            const mydata = await res.json();
            setData(mydata);
            // isSetLoad(true);
            isSetLoad(false);
        } catch (err) { console.log(err) }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <View style={styles.mainContainer}>

            {isload ? (<View style={styles.loaderStyle}><ActivityIndicator size="large" color="black" /></View>) :
                (
                    <FlatList
                        data={data}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.subContainer}>
                                    <Text style={[styles.textStyle, styles.spanStyle]}>{item.userid}</Text>
                                    <Text style={styles.textStyle}>{item.name}</Text>
                                    <Text style={styles.textStyle}>{item.email}</Text>
                                </View >
                            )
                        }}
                    />
                )
            }



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
        width: "20%",
        borderRadius: "85%",
        textAlign: "center",
    },
    loaderStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
    }
})

// how to access image from an api

{/* < Image style = {styles.xyz }
resizeMode = "cover"
source = {{ uri: item.img }}
/> */}