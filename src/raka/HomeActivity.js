import React, {Component} from 'react'
import{
    View,
    StyleSheet, // menginput text
    Image,
    Text,
    Button
    }from 'react-native';

    class HomeActivity extends Component{
        static navigationOptions={
            title:'home',
            headerStyle:{
                backg: '#03A9F4'
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
                fontWeight:'bold',
            },
        };
        render(){
            return(
                <View style={styles.container}>
                    <Text style={styles.headerText}>Home Activity</Text>
                    <Button 
                        title="Go Profile Activity"
                        onPress={()=> this.props.navigation.navigate('Profile')}/>
                </View>
            );
        }
    }

    const styles=StyleSheet.create({
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
        },
        headerText:{
            fontSize:20,
            textAlign:'center',
            margin:10,
            fontWeight: 'bold'
        },
    });

    export default HomeActivity;