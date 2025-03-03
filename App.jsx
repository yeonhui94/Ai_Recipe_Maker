// src/App.js
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Header from './src/components/Header';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Recipe Maker" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
