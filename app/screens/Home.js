import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ActivityIndicator } from 'react-native';

import users from '../data/users';
import * as Randomuser from "../api/Randomuser";

import { Separator, ListItems } from "../components/Lists";

class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: [],
            page: 0,
            isFetching: false
        }
    }

    handlePress = (item) => {
        alert(item)
    }

    componentDidMount() {
        this.fetchUser()
    }

    fetchUser = () => {
        this.setState({ isFetching: true })

        Randomuser.fetchPerPage(this.state.page, 15)
            .then((response) => response.json())
            .then((data) => {
                this.setState(
                    state => ({
                        data: [...state.data, ...data.results], // here is a trick
                        isFetching: false
                    })
                )
            })
    }

    handleEnd = () => {
        this.setState(
            state => ({
                page: state.page + 1
            }),
            () => this.fetchUser()
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <ListItems
                            icon={<Image style={{ width: 35, height: 35, marginRight: 20, borderRadius: 20 / 2 }} source={{ uri: item.picture.thumbnail }} />}
                            text={`${item.name.first} ${item.name.last}`}
                            onPress={() => this.handlePress(item.email)}
                        />
                    )}
                    keyExtractor={(item, index) => item.email}
                    ItemSeparatorComponent={Separator}
                    ListFooterComponent={() =>
                        this.state.isFetching ? null : <ActivityIndicator animating />
                    }
                    onEndReachedThreshold={0}
                    onEndReached={this.handleEnd}
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