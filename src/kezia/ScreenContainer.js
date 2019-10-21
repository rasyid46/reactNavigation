import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeActivity from './HomeActivity';
import profileActivity from './ProfileActivity';
const RootStack = createStackNavigator(
  {
    //The Routes
    Home: {screen: HomeActivity},
    Profile: {screen: profileActivity}
  },
  {
    //Default Routes
    initialRouteName: 'Home',
  },
);

//create app container
const Container = createAppContainer(RootStack);
export default Container;
