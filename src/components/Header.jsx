// Header.jsx
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Header({fontStyle}) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text,  { fontStyle: fontStyle }]}>Recipe Maker</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width : "100%",
    height: 141,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#5F9809',
    fontFamily: 'ABeeZee', // ✅ 올바른 속성명
    fontSize: 40,
  }

});
