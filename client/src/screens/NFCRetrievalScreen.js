import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, TextInput, Alert } from 'react-native';
import { createBottomTabNavigator, createAppContainer, NavigationActions } from 'react-navigation';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const pixelWidth = 414;
const pixelHeight = 736;

class NFCRetrievalScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{
                    fontFamily: 'abeezee',
                    fontSize: 20,
                    width: screenWidth * (250 / pixelWidth),
                    color: '#F2463A',
                    textAlign: 'center',
                }}>Please wait until you receive a text message saying your order is ready, then connect to the NFC Retrieval scanner to get your drink(s)!</Text>
            </View>
        );
    }
}

export default NFCRetrievalScreen;