import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

export default EStyleSheet.create({
    $underlayColor: '$border',
    separator: {
        marginLeft: 20,
        backgroundColor: '$border',
        flex: 1,
        height: StyleSheet.hairlineWidth
    },
    text: {
        fontSize: 16,
        color: '$darkText'
    },
    row: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    }
})