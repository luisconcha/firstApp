import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

import styles from './styles/GenericScreenStyles';
import NavBar from '../Components/NavBar';

type Props = {};

export default class GenericScreen extends Component<Props> {


    static navigationOptions = {
        title: 'Favorites'
    };

    constructor( props ) {
        super( props );

        this.state = {
            val1: 5,
            favorite: false
        };
    }

    pressFavorite = () => {
        const { favorite } = this.state;
        this.setState( {
            favorite: !favorite
        } )
    };

    componentWillMount(): void {
        console.log( 'componentWillMount' );
    }

    componentDidMount(): void {
        console.log( 'componentDidMount' );
        setTimeout( () => {
            this.setState( {
                val1: 2
            } )
        }, 500 )
    }

    shouldComponentUpdate() {
        console.log( 'shouldComponentUpdate' );
        return true;
    }

    componentDidUpdate(): void {
        console.log( 'componentDidUpdate' );
    }

    componentWillUnmount(): void {
        console.log( 'componentWillUnmount' );
    }

    render() {
        const { favorite } = this.state;
        return (
            <View>
                <NavBar title="Restaurants"
                        leftButton={ true }
                        rightButton={ true }
                        onPressFavorite={ this.pressFavorite }
                        favorite={ favorite }
                />

                {/*{  content goes here }*/ }
            </View>
        );
    }
}

