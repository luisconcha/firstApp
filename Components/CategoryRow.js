import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import styles from './Styles/CategoryRowStyles';

class CategoryRow extends Component {

    render() {
        const { data } = this.props;
        return (
            <View style={ styles.categoryRow }>

                <View style={styles.categoryRow}>
                    <Text style={styles.categoryText}>{data.name}</Text>
                </View>
            </View>

        )
    }
}

export default CategoryRow;