import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeActivity from './HomeActivity';
import ProfileActivity from './ProfileActivity';
import State from './State';
import FlexComponent from'./FlexComponent';
import AlignItems from './AlignItems';
import BMI from './BMI/BMI';
import Week4 from './Week4';
import Week4Ass from './Week4Ass';
import Week4Present from './Week4Present';

const RootStack=createStackNavigator(
    {
        Home:{screen:HomeActivity},
        State:{screen:State},
        FlexComponent:{screen:FlexComponent},
        AlignItems:{screen:AlignItems},
        BMI:{screen:BMI},
        Week4:{screen:Week4},
        Week4Ass:{screen:Week4Ass},
        Week4Present:{screen:Week4Present}
    },
    {
        initialRouteName:'Home'
    }
);

const Container = createAppContainer(RootStack);

export default Container;