import React from 'react'
import { View, Text, Image, StyleSheet,SafeAreaView } from 'react-native';
import User from './User'
import { Provider } from 'react-redux';
import store from './Redux/store.jsx'
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
      <User />
    </Provider>
    </SafeAreaView>
  )
  
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    alignContent:'center',
   padding:10,
  },
 
});

