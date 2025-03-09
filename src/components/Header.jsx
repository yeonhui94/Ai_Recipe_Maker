// Header.jsx
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Header({fontStyle}) {
  return (
    <View style={styles.wrapper}>
    <View style={styles.container}>
      <Text style={[styles.text,  { fontStyle: fontStyle }]}>Recipe Maker</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper:{
    display: "flex",
    height: 104,
    flexDirection : "column",
    alignItems : "flex-start",
    alignSelf :"stretch"
  },
  container: {
    alignItems: 'center',
    padding: "13.5px 96px 0px 96px",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    alignSelf :"stretch",
  },
  text: {
    color: '#5F9809',
    fontFamily: 'serif',
    fontSize: 32,
  }

});
