import React from "react";
import { StyleSheet, View } from "react-native";

export default function Layout({ children }) {
  return (
    <View style={styles.container}>
      <View style={[styles.circleBase, styles.circle1]} />
      <View style={[styles.circleBase, styles.circle2]} />
      <View style={[styles.circleBase, styles.circle3]} />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  circleBase: {
    position: "absolute",
    borderRadius: 130, // width/2 값으로 변경
  },
  circle1: {
    width: 260,
    height: 260,
    backgroundColor: "#87B5421a",
    top: -50,
    left: 150,
  },
  circle2: {
    width: 240,
    height: 240,
    backgroundColor: "#f48e221a",
    top: 350,
    left: -100,
  },
  circle3: {
    width: 260,
    height: 260,
    backgroundColor: "#87B5421a",
    top: 650,
    left: 50,
  },
});
