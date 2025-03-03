import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';


const Header = ({ title }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 30,
        backgroundColor: '#ffff', // 헤더 배경 색상
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#4CAF50', // 제목 텍스트 색상
    },
});

export default Header;
