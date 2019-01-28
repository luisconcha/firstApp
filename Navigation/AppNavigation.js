import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import GenericScreen from '../Containers/GenericScreen';
import ExploreScreen from "../Containers/ExploreScreen";
import CategoryScreen from "../Containers/CategoryScreen";

const TabNav = createBottomTabNavigator( {
    Explore: { screen: ExploreScreen },
    Categories: { screen: CategoryScreen },
    Favorites: { screen: GenericScreen },
}, {
    headerMode: 'none',
    initialRouteName: "Explore",
    navigationOptions: { tabBarVisible: false }
} );

const AppNavigation = createStackNavigator(
    {
        Home: { screen: TabNav }
    },
    {
        headerMode: 'none'
    }
);

export default AppNavigation;