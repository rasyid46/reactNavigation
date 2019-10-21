import React, { Component } from 'react';
import {
    Text,View,StyleSheet, Button
}from 'react-native';

class ProfileActivity extends Component{
    static navigationOption = {
        title : 'Profile',
        headerStyle: {
            backgroundColor: '#73c6b6'
        }
    };

    render(){
        return(
            <View style={styles.container}>
               <Text style={styles.headerStyle}> Profile Activity </Text>
               <Button title="Go To Home" onPress={() => this.props.navigation.popToTop("Home")}/>
               <Text></Text>
               <Text style={styles.headerStyle}>Create New Profile Screen</Text>
               <Button title="Go To New Profile" onPress={() => this.props.navigation.push("Profile")}/>
               <Button title="Go Back" onPress={()=> this.props.navigation.goBack()}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#f5fcff",
   },
   headerText: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      fontWeight: 'bold'
   }
});

export default ProfileActivity;