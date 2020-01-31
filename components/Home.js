import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

export default class HomeScreen extends React.Component{

  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.setState({ user: null }); // Remember to remove the user from your app's state as well
      this.props.navigation.navigate('Login')
    } catch (error) {
      console.error(error);
    }
  };

    render(){
      return(
        <View style={styles.Container}>
          <Text>Home</Text>
          <Button 
          title="Logout"
          onPress={this.signOut}>
          </Button>
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