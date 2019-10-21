import {createAppContainer} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeActivity from './HomeActivity';
import ProfileActivity from './ProfileActivity';
const RootStack= createStackNavigator(
    {
    //the route
    Home:{screen:HomeActivity},
    Profile:{screen:ProfileActivity},
},
{
    initialRoutename:'Home',
}
);

const Container = createAppContainer(RootStack);
export default Container;