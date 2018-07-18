import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

import users from '../data/users';

import { Separator, ListItems } from "../components/Lists";

class Home extends Component {

    handlePress = () => {
        alert('test')
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    data={users.results}
                    renderItem={({item}) => (
                        <ListItems 
                            icon={<Image style={{width: 35, height: 35, marginRight: 20}} source={{uri: item.picture.thumbnail}} />}
                            text={item.name.first}
                            onPress={this.handlePress}
                        />
                    )}
                    keyExtractor={(item, index) => item + index}
                    ItemSeparatorComponent={Separator}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default Home