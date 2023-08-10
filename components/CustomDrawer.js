import React from 'react'
import {View, Text, Image, StyleSheet} from "react-native"
import {DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer"
export default function CustomDrawer(props) {
    return (
        <View style = {{flex: 1}}>
            <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: "white"}}>
                <Text style ={{padding: 15, fontWeight: 'bold', alignSelf: "auto"}}>Welcome, demo@blackwellgpt</Text>
                <DrawerItemList {...props}/>
            </DrawerContentScrollView>
        </View>
        )

}