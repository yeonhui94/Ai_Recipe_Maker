import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import  Icon  from "react-native-vector-icons/FontAwesome";


export default function Footer() {
    const handlePress = (iconName) => {
        console.log(`${iconName} clicked`);
    };
    
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => handlePress("search")}>
                <Icon style={styles.icon} name="search" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress("home")}>
                <Icon style={styles.icon} name="home" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress("user")}>
                <Icon style={styles.icon} name="user" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        width: "100%",
        paddingTop : 4,
        flexDirection : "row",
        gap : 4,
        justifyContent : "center"
    },
    icon : {
        padding : 40,
        fontSize : 30,
        color : "#2E251480"
    }
});
