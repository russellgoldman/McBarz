import React, { Component } from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const pixelWidth = 414;
const pixelHeight = 736;

class DrinkSection extends Component {
    render() {
        const { divider, sectionContainer } = styles;

        return (
            <View>
                <View style={divider} />
                <View style={sectionContainer}>
                    <Image source={this.props.image} resizeMode='contain' />
                    <Text>{this.props.name}</Text>
                    <Text>{this.props.price}</Text>
                    <Text>{this.props.selected}</Text>
                </View>
                <View style={divider} />
            </View>
        );
    }
}

const styles = {
    sectionContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    divider: {
        height: screenHeight * (2 / pixelHeight),
        width: screenWidth * (340 / pixelWidth),
        color: 'rgba(0, 0, 0, 0.5)'
    }
};

export default DrinkSection;