import React, {Component} from 'react'
import{
    View,
    StyleSheet, // menginput text
    Button,
    Text,
    }from 'react-native';

    class ProfileActivity extends Component{
        static navigationOptions={
            title:'home',
            headerStyle:{
            background: '#73c6b6'
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
                fontWeight:'bold',
            },
        };

        render(){
            return(
                <View style={styles.container}>
                    <Text style={styles.headerText}>Profile Activity</Text>
                
                <Button title="Go Home" onPress={()=>this.props.navigation.push('Home')}>
                    <Text style={styles.headerStyle}>Create New Profile Screen</Text>
                </Button>
                <Button title="Go to new Profile" onPress={()=>this.props.navigation.push('Profile')}/>
                <Button title='Go Back' onPress={()=>this.props.navigation.goBack()}/>
                </View>


            )
        }
    }


    const styles=StyleSheet.create({
       container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f5ffcff'
       },
       headerText:{
           fontSize:20,
           textAlign:'center',
           margin:10,
           fontWeight:'bold'
       }

    });

    export default ProfileActivity;