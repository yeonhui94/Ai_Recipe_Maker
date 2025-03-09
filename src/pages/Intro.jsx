import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { Image, StyleSheet, View } from "react-native";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";

export default function Intro() {

  const navigation = useNavigation();

  useEffect(()=> {
    const timer = setTimeout(()=>{
      navigation.navigate("Search");
    },2000);

    return()=> clearTimeout(timer);
  }, [navigation])

  return(
    <Layout>
      <Image source={require("../../assets/img/veg.png")} style={styles.veg1}/>
      <Image source={require("../../assets/img/veg.png")} style={styles.veg2}/>
      <View style={styles.circle1}></View>
      <View style={styles.circle2}></View>
      <View style={styles.container}>
        <Header fontStyle="italic"/>
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : "center",
    alignItems : "center"
  },
  veg1 : {
    opacity : 0.7,
    top : -50,
    left : -100,
    position : "absolute",
    zIndex : 1,
    transform: [{ rotate: "90deg" }],
  },
  veg2  :{
    position : "absolute",
    opacity : 0.7,
    top : 550,
    left : 100
  },
  circle1 : {
    position : "absolute",
    borderRadius : 80,
    width : 166,
    height : 166,
    backgroundColor :"#efc6431a",
    top : 500,
    left : 300,
  },
  circle2 : {
    position : "absolute",
    borderRadius : 80,
    width : 166,
    height : 166,
    backgroundColor :"#f48e221a",
    top : 150,
    left : 150,
    zIndex : 0
  }
})