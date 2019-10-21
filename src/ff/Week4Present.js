import React, {Component} from 'react';
import {StyleSheet,Text,View,Button} from 'react-native';

export default class Week4Present extends Component {
    static navigationOptions={
        title:'Week 4 Presentation',
        headerStyle: {
            backgroundColor:'#03a9f4'
        },
        headerTintColor:'#fff',
        headerTitleStyle: {
            fontWeight:'bold'
        }
    };
    
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.headerText}>Week 4 Presentation</Text>
                <Button title="Go to State" onPress={()=>this.props.navigation.navigate('State')}/><Text/>
                <Button title="Go to Flex" onPress={()=>this.props.navigation.navigate('FlexComponent')}/><Text/>
                <Button title="Go to AlignItems" onPress={()=>this.props.navigation.navigate('AlignItems')}/><Text/>
                <View style={{flexDirection:'row',position:'absolute',bottom:10}}>
                    <Button title="Go Back" onPress={()=>this.props.navigation.goBack()}/><Text/>
                    <Button title="Go to Home" onPress={()=>this.props.navigation.popToTop()}/>
                </View>
            </View>
        );
    }  
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f5fcff',
        padding:10
    },
    headerText:{
        fontSize:20,
        textAlign:'center',
        margin:10,
        fontWeight:'bold'
    }
});