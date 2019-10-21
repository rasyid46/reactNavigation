import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeActivity from './HomeActivity';
import ProfileActivity from './ProfileActivity';
//tambahan
import React from 'react';
import {View} from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons';
const RootStack = createMaterialBottomTabNavigator(
    {
        //the Routes
        Home: { 
            screen: HomeActivity,
            navigationOption : {
                tabBarLabel: 'Home',
                tabBarIcon: ({tintColor}) => (
                    <View>
                        <Icon size={25} name={'ios-home'} color={tintColor}/>
                    </View>
                ),
            },    
        },
        Profile: { 
            screen: ProfileActivity,
            navigationOption: {
                tabBarLabel : 'Profile',
                tabBarIcon: ({tintColor}) => (
                    <View>
                        <Icon size={25} name={'ios-person'} color={tintColor}/>
                    </View>
                ),
                activeColor: '#f60c0d',
                inactiveColor: 'f65a22',
                barStyle: {backgroundColor: '#f69b31'},
            },
        },
    },
    {
        //Default Root
        initialRoutName: 'Home',
    },
);

//create app container
const Container = createAppContainer(RootStack);
export default Container;
