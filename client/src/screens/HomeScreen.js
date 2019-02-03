import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const pixelWidth = 414;
const pixelHeight = 736;

class HomeScreen extends Component {
    _navigate = (routeName) => {
        var navigate = NavigationActions.navigate({
            routeName: routeName,
          });
        this.props.navigation.navigate(navigate);
    }

    render() {
        const { 
            containerStyle, modeTextStyle, buttonStyle, buttonTextStyle
        } = styles;

        return (
            <View style={containerStyle}>
                <Text style={modeTextStyle}>Pick a mode:</Text>
                <TouchableOpacity style={buttonStyle} onPress={() => this._navigate('UserModeStart')}>
                    <Text style={buttonTextStyle}>User Mode</Text>
                </TouchableOpacity>
                <TouchableOpacity style={buttonStyle}>
                    <Text style={buttonTextStyle}>Admin Mode</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        marginTop: screenHeight * (200 / pixelHeight),
    },
    modeTextStyle: {
        fontFamily: 'abeezee',
        fontSize: 24,
        marginBottom: screenHeight * (50 / pixelHeight),
    },
    buttonStyle: {
        backgroundColor: '#F2463A',
        borderRadius: 20,
        height: screenHeight * (47 / pixelHeight),
        width: screenWidth * (340 / pixelWidth),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: screenHeight * (25 / pixelHeight),
    },
    buttonTextStyle: {
        fontFamily: 'abeezee',
        color: '#fff',
        fontSize: 20,
    }
}

export default HomeScreen;