import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { DrinkSection } from '../components';
import { bud, corona, hein, pbr } from '../../assets/images';
import { DrinkListCheckout } from '../containers';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const pixelWidth = 414;
const pixelHeight = 736;

const red = '#F03A3A';
const grey = '#C4C4C4';

class Checkout extends Component {
    state = {
        tenPercentColor: red,
        fifteenPercentColor: grey,
        twentyPercentColor: grey,
        drinks: this.props.navigation.state.params.drinks,
        subtotal: 0,
        tip: 0,
        gst: 0,
        total: 0,
    }

    componentDidMount = () => {
        let sum = 0;
        this.state.drinks.forEach((obj) => {
            sum += (obj.price * obj.selected);
        });
        this.setState({ 
            subtotal: sum,
            tip: sum * .10,
            gst: sum * 0.13,
            total: sum + (sum * .10) + sum * 0.13
        });
    }

    _navigate = (routeName) => {
        var navigate = NavigationActions.navigate({
            routeName: routeName,
          });
        this.props.navigation.navigate(navigate);
    }

    render() {
        const {
            titleStyle, subtitleStyle, subtitleStyle2, subtitleStyle3, tipStyle, buttonStyle, buttonTextStyle
        } = styles;

        return (
            <View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={titleStyle}>Checkout</Text>
                    <DrinkListCheckout drinks={this.state.drinks} />
                    <Text style={subtitleStyle}>Tip</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={{
                            height: screenHeight * (35 / pixelHeight),
                            width: screenWidth * (72 / pixelWidth),
                            backgroundColor: this.state.tenPercentColor,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                            borderColor: '#000',
                            borderWidth: 1,
                            marginLeft: screenWidth * (5 / pixelWidth),
                            marginRight: screenWidth * (5 / pixelWidth),
                        }} onPress={() => {
                            this.setState({
                                tenPercentColor: red,
                                fifteenPercentColor: grey,
                                twentyPercentColor: grey,
                                tip: this.state.subtotal * .10,
                                total: this.state.subtotal + (this.state.subtotal * .10) + this.state.gst
                            });
                        }}>
                            <Text style={tipStyle}>10%</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            height: screenHeight * (35 / pixelHeight),
                            width: screenWidth * (72 / pixelWidth),
                            backgroundColor: this.state.fifteenPercentColor,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                            borderColor: '#000',
                            borderWidth: 1,
                            marginLeft: screenWidth * (5 / pixelWidth),
                            marginRight: screenWidth * (5 / pixelWidth),
                        }} onPress={() => {
                            this.setState({
                                tenPercentColor: grey,
                                fifteenPercentColor: red,
                                twentyPercentColor: grey,
                                tip: this.state.subtotal * .15,
                                total: this.state.subtotal + (this.state.subtotal * .15) + this.state.gst
                            });
                        }}>
                            <Text style={tipStyle}>15%</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            height: screenHeight * (35 / pixelHeight),
                            width: screenWidth * (72 / pixelWidth),
                            backgroundColor: this.state.twentyPercentColor,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                            borderColor: '#000',
                            borderWidth: 1,
                            marginLeft: screenWidth * (5 / pixelWidth),
                            marginRight: screenWidth * (5 / pixelWidth),
                        }} onPress={() => {
                            this.setState({
                                tenPercentColor: grey,
                                fifteenPercentColor: grey,
                                twentyPercentColor: red,
                                tip: this.state.subtotal * .20,
                                total: this.state.subtotal + (this.state.subtotal * .20) + this.state.gst
                            });
                        }}>
                            <Text style={tipStyle}>20%</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginLeft: screenWidth * (25 / pixelWidth), marginTop: screenHeight * (25 / pixelHeight) }}>
                    <Text style={subtitleStyle2}>Subtotal: ${this.state.subtotal.toFixed(2)}</Text>
                    <Text style={subtitleStyle2}>Tip: ${this.state.tip.toFixed(2)}</Text>
                    <Text style={subtitleStyle2}>GST: ${this.state.gst.toFixed(2)}</Text>
                    <Text style={subtitleStyle3}>TOTAL: ${this.state.total.toFixed(2)}</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: screenHeight * (20 / pixelHeight) }}>
                    <TouchableOpacity style={buttonStyle} onPress={() => this._navigate('NFCRetrievalScreen') }>
                        <Text style={buttonTextStyle}>Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
           
        );
    }
}

const styles = {
    titleStyle: {
        marginTop: screenHeight * (50 / pixelHeight),
        fontFamily: 'abeezee',
        fontSize: 45,
        color: '#F2463A',
        marginBottom: screenHeight * (25 / pixelHeight),
    },
    subtitleStyle: {
        marginTop: screenHeight * (10 / pixelHeight),
        marginBottom: screenHeight * (10 / pixelHeight),
        fontFamily: 'abeezee',
        fontSize: 24,
        color: '#F2463A',
    },
    subtitleStyle2: {
        fontFamily: 'abeezee',
        fontSize: 24,
        color: '#F2463A',
    },
    subtitleStyle3: {
        fontFamily: 'abeezee',
        fontSize: 30,
        color: '#F2463A',
    },
    tipStyle: {
        fontFamily: 'abeezee',
        fontSize: 24,
        color: '#fff'
    },
    buttonStyle: {
        backgroundColor: '#F2463A',
        borderRadius: 10,
        height: screenHeight * (50 / pixelHeight),
        width: screenWidth * (340 / pixelWidth),
        justifyContent: 'center', 
        alignItems: 'center'
    },
    buttonTextStyle: {
        fontFamily: 'abeezee',
        color: '#fff',
        fontSize: 24,
    }
}

export default Checkout;