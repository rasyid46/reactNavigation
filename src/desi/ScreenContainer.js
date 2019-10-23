import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';
import HomeActivity from './HomeActivity';
import ProfileActivity from './ProfileActivity';

//tambahan 
import React from 'react';
import { View } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const RootStack = createMaterialBottomTabNavigator(
    {
        //The Routes
        Home: {
            screen: HomeActivity,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon size={25} name={'ios-home'} color={tintColor} />
                    </View>
                ),
            },
        },
        Profile: {
            screen: ProfileActivity,
            navigationOptions: {
                tabBarLabel: 'Profile',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon size={25} name={'ios-profile'} color={tintColor} />
                    </View>
                ),
                activeColor: '#F60C0D',
                inactiveColor: '#F65A22',
                barStyle: { backgroundColor: '#F69B31' },
            },
        },
    },
    {
        //Default Route
        initialRouteName: 'Home',
    }
);

//Create app container
const Container = createAppContainer(RootStack);
export default Container;
