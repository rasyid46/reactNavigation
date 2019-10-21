import React, {Component} from 'react';
import {StyleSheet,Text,View,Button} from 'react-native';

class Week4 extends Component {
    static navigationOptions={
        title:'Week4',
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
                <Text style={styles.headerText}>Week 4</Text>
                <Button title="Go to Presentation" onPress={()=>this.props.navigation.navigate('Week4Present')}/><Text/>
                <Button title="Go to Assessment" onPress={()=>this.props.navigation.navigate('Week4Ass')}/>
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

export default Week4;