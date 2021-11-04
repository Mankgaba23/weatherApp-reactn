import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import weather from './Weather';


const Loading=()=> {
  return (
    <View style={styles.container}>
      <Text style ={{color:'white'}}>loading</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e58',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Loading;