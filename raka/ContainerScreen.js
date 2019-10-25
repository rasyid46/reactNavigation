import {createAppContainer} from 'react-navigation';
//import { createStackNavigator } from "react-navigation-stack";
import Redux from './Redux';
import DataDiri from './DataDiri';

import React from 'react';
import {View} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const RootStack = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Redux,
      navigationOptions: {
        tabBarLabel: 'Redux',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon size={25} name={'ios-home'} color={tintColor} />
          </View>
        ),
      },
    },
    Profile: {
      screen: DataDiri,
      navigationOptions: {
        tabBarLabel: 'Data Diri',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon size={25} name={'ios-home'} color={tintColor} />
          </View>
        ),
        activeColor: '#f60c0d',
        inactiveColor: '#f65a22',
        barStyle: {backgroundColor: '#f69b31'},
      },
    },
  },
  {
    initialRoutename: 'Redux',
  },
);

const Container = createAppContainer(RootStack);

export default Container;
