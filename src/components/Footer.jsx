import React from "react";
import { View, StyleSheet, Image } from "react-native";

export default function Footer() {
    return(
        <View style={styles.container}>
            <Image 
                source={require('../../assets/img/search.png')} // 로컬 이미지 경로
                style={styles.icon}
            />
                        <Image 
                source={require('../../assets/img/home.png')} // 로컬 이미지 경로
                style={styles.icon}
            />
                        <Image 
                source={require('../../assets/img/user.webp')} // 로컬 이미지 경로
                style={styles.icon}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row", // 가로로 정렬
        justifyContent: "center", // 아이콘들을 가로로 균등하게 배치
        padding: 10,
    },
    icon :{
        width : 60,
        height :60,
        backgroundColor: "white",
        margin : 20
    }
});
