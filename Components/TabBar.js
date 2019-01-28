import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';

import CustomIcon from '../Components/CustomIcon';
import styles from './Styles/TabBarStyles';

class TabBar extends Component {

    renderTab = ( { route, icon } ) => {
        const { selected } = this.props;

        <TouchableOpacity style={ styles.tab }>
            <CustomIcon name={ icon } style={ styles.tabIcon }/>

            { selected === route && <View style={ styles.tabLine }/> }
        </TouchableOpacity>
    };

    render() {
        return (
            <View style={ styles.container }>
                { this.renderTab( { route: 'explore', icon: 'home-1' } ) }
                { this.renderTab( { route: 'categories', icon: 'recipes' } ) }
                { this.renderTab( { route: 'favorites', icon: 'favorites' } ) }
            </View>
        );
    }
}

export default TabBar;