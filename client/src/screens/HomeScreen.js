import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';

class HomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Welcome to McBarz!</Text>
            </View>
        );
    }
}

export default HomeScreen;