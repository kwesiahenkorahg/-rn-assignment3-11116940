import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MainScreen from './MainScreen';

const App = () => (
  <SafeAreaView style={styles.container}>
    <MainScreen />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default App;
