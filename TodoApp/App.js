import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import { MenuProvider } from 'react-native-popup-menu';

const App = () => {
  return (
    <MenuProvider>
      <SafeAreaView style={styles.container}>
        <HomeScreen />
      </SafeAreaView>
    </MenuProvider>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;