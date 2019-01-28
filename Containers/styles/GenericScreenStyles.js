import { StyleSheet } from 'react-native';

import { Metrics, Colors, Fonts } from '../../Theme/index';


export default StyleSheet.create( {
    navBar: {
        height: Metrics.navBarHeight,
        backgroundColor: Colors.whiteFull,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        ...Fonts.style.recipeNameCard,
        fontWeight: Metrics.fontBold
    },
    redBar: {
        backgroundColor: "#900",
        fontWeight: 'bold'
    },
    listContent: {
       marginTop: Metrics.smallSpace
    }
} );