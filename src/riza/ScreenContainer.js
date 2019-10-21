import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeActivity from './HomeActivity';
import ProfileActivity from './ProfileActivity';

const RootStack = createStackNavigator(
    {
        //the Routes
        Home: { screen: HomeActivity},
        Profile: { screen: ProfileActivity},
    },
    {
        //Default Root
        initialRoutName: 'Home',
    },
);

//create app container
const Container = createAppContainer(RootStack);
export default Container;
