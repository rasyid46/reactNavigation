import { createAppContainer } from "react-navigation";
//import {createStackNavigator} from 'react-navigation-stack';
import HomeActivity from './HomeActivity';
import ProfileActivity from '../aziz/ProfileActivity';
//Tambahan
import React from 'react';
import {View}from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
const RootStack = createMaterialBottomTabNavigator({
    Home :{
        screen : HomeActivity,
        navigationOptions:{
            tabBarLabel :'Home',
             tabBarIcon :({tintColor})=>(
                 <View>
                     <Icon size={25} name={'ios-home'} color={tintColor}/>
                 </View>
            )
        }
    },
    Profile : {
        screen :ProfileActivity,
        navigatiOptions :{
            tabBarLabel : 'Profile',
              tabBarIcon: ({tintColor}) => (
                 <View>
                     <Icon size={25} name={'ios-person'} color={tintColor}/>
                </View>
             ),
             activeColor :'#f60c0d',
             inactiveColor : '#f65a22',
             barStyle:{backgroundColor:'#f69b31'},
        },
    },
},
{
    initialRoutName : 'Home',
}
);
//Create app container
const Container = createAppContainer(RootStack);
export default Container;