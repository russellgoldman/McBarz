import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const pixelWidth = 414;
const pixelHeight = 736;

class UserModeStart extends Component {
    render() {
        return (
            <View>
                <Text>Your Info</Text>
            </View>
        );
    }
}

const styles = {

};

export default UserModeStart;