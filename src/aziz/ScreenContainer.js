import { createAppContainer } from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import HomeActivity from './HomeActivity';
import ProfilActivity from './ProfileActivity';
const RootStack = createStackNavigator({
    //the root
    Home : { screen : HomeActivity },
    Profile : { screen : ProfilActivity},
},
{
    // Default Route
    initialRoutName : 'Home',
},
);
//Create app container
const Container = createAppContainer(RootStack);
export default Container;