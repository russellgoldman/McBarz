import React, { Component } from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { increment, decrement, verified } from '../../assets/images';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const pixelWidth = 414;
const pixelHeight = 736;

class DrinkSection extends Component {
    _renderIncrementDecrement = () => {
        const { 
            selectedQuantityContainer, selectedQuantityText, incrementDecrementStyle
        } = styles;

        if (this.props.mode !== 'omitIncrementDecrement') {
            return (
                <View style={selectedQuantityContainer}>
                    <TouchableOpacity onPress={() => this.props.incrementDecrement(this.props.selected + 1, this.props.index)}>
                        <Image source={increment} resizeMode='contain' style={incrementDecrementStyle} />
                    </TouchableOpacity>
                    <Text style={selectedQuantityText}>{this.props.selected}</Text>
                    <TouchableOpacity onPress={() => {
                        if (this.props.selected != 0) {
                            this.props.incrementDecrement(this.props.selected - 1, this.props.index);
                        }
                    }}>
                        <Image source={decrement} resizeMode='contain' style={incrementDecrementStyle} />
                    </TouchableOpacity>
                </View>
                
            );
        } else {
            return (
                <View style={selectedQuantityContainer}>
                    <Text style={selectedQuantityText}>{this.props.selected}</Text>
                </View>
            );
        }
    }

    render() {
        const { 
            divider, sectionContainer, imageContainer, beerInfoContainer, beerNameStyle, priceStyle
        } = styles;

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={divider}></View>
                <View style={sectionContainer}>
                    <View style={imageContainer}>
                        <Image source={this.props.image} resizeMode='contain' />
                    </View>
                    <View style={beerInfoContainer}>
                        <Text style={beerNameStyle}>{this.props.name}</Text>
                        <Text style={priceStyle}>${this.props.price}</Text>
                    </View>
                    {this._renderIncrementDecrement()}
                </View>
            </View>
        );
    }
}

const styles = {
    sectionContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    divider: {
        marginTop: screenHeight * (5 / pixelHeight),
        height: screenHeight * (3 / pixelHeight),
        width: screenWidth * (340 / pixelWidth),
        marginBottom: screenHeight * (5 / pixelHeight),
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        borderRadius: 50
    },
    imageContainer: {
        flex: 2,
    },
    beerInfoContainer: {
        flex: 3,
        flexDirection: 'column'
    },
    beerNameStyle: {
        fontFamily: 'abeezee',
        fontSize: 24,
        color: '#000'
    },
    priceStyle: {
        fontFamily: 'abeezee',
        fontSize: 18,
        color: '#000'
    },
    selectedQuantityText: {
        fontFamily: 'abeezee',
        fontSize: 24,
        color: '#000'
    },
    selectedQuantityContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: screenWidth * (10 / pixelWidth)
    },
    incrementDecrementStyle: {
        height: screenHeight * (30 / pixelHeight),
        width: screenWidth * (20 / pixelWidth)
    }
};

export default DrinkSection;