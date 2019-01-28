import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';

import NavBar from '../Components/NavBar';
import styles from './styles/GenericScreenStyles';
import CategoryRow from "../Components/CategoryRow";

const categoriesData = [
    {
        id: "1",
        name: "Fish"
    },
    {
        id: "2",
        name: "Meat"
    },
    {
        id: "3",
        name: "Breakfast"
    },
    {
        id: "4",
        name: "Fruit"
    }
];

class CategoryScreen extends Component {

    static navigationOptions = {
        title: "Categories"
    };

    keyExtractor = ( item, index ) => item.id;

    renderRow = ( { item } ) => {
        return <CategoryRow data={ item }/>
    };


    renderList = () => {
        return (
            <FlatList
                contentContainerStyle={ styles.listContent }
                keyExtractor={ this.keyExtractor }
                data={ categoriesData }
                renderItem={ this.renderRow }
            />
        );
    };

    constructor( props ) {
        super( props );
    }

    render() {
        console.log( "render" );

        return (
            <View style={ [styles.mainScreen] }>
                <NavBar leftButton={ false } title="Categories"/>
                <View style={ styles.container }>{ this.renderList() }</View>
            </View>
        );
    }
}

export default CategoryScreen;