import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';
import Intro from './src/pages/Intro';
import Layout from './src/components/Layout';
import Header from './src/components/Header';



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Layout></Layout> */}
      <Intro></Intro>
      {/* <Header></Header> */}
    </SafeAreaView>
  );
}

const styles= StyleSheet.create({
  container : {
    flex : 1,
  }
})