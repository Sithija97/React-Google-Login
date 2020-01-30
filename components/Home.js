import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class HomeScreen extends React.Component{
    render(){
      return(
        <View style={styles.Container}>
          <Text>Home</Text>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
      Container:{
          flex:1,
          justifyContent:"center",
          alignItems:"center",
          fontWeight:"bold"
      }
  })