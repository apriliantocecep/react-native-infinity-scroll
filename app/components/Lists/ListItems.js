import React from 'react';
import PropTypes from 'prop-types'
import { View, Text, TouchableHighlight, Image } from 'react-native';

import styles from './styles'

const ListItems = ({
    icon,
    text,
    onPress
}) => (
    <TouchableHighlight 
        onPress={onPress}
        underlayColor={styles.$underlayColor}
    >
        <View style={styles.row}>
            { icon ? icon: null}
            <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableHighlight>
)

ListItems.propTypes = {
    icon: PropTypes.element,
    text: PropTypes.string,
    onPress: PropTypes.func
}

export default ListItems