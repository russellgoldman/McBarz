import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, TextInput, Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const pixelWidth = 414;
const pixelHeight = 736;

class UserModeStart extends Component {
    state = {
        fullName: '',
        phoneNumber: '',
        checkboxContainerColor: '#fff'
    }

    _reverseCheckboxColor = () => {
        if (this.state.checkboxContainerColor === '#fff') {
            this.setState({ checkboxContainerColor: 'rgba(235, 98, 88, 0.5)' });
        } else {
            this.setState({ checkboxContainerColor: '#fff' });
        }
    }

    _navigate = (routeName) => {
        var navigate = NavigationActions.navigate({
            routeName: routeName,
          });
        this.props.navigation.navigate(navigate);
    }

    render() {
        const { 
            titleText, subtitleText, textInputStyle, registrationAgreementContainer, registrationAgreementText, buttonStyle,
            buttonTextStyle
        } = styles;

        return (
            <View>
                <Text style={titleText}>Your Info</Text>
                <Text style={subtitleText}>Full Name</Text>
                <TextInput style={textInputStyle} onChangeText={(fullName) => this.setState({ fullName })} 
                    value={this.state.fullName} selectionColor='#000' />
                <Text style={subtitleText}>Phone Number</Text>
                <TextInput style={textInputStyle} onChangeText={(phoneNumber) => this.setState({ phoneNumber })} 
                    value={this.state.phoneNumber} selectionColor='#000' />
                <View style={registrationAgreementContainer}>
                    <TouchableOpacity style={{
                        height: screenHeight * (15 / pixelHeight),
                        width: screenWidth * (17 / pixelWidth),
                        borderColor: '#EB6258',
                        borderWidth: 1,
                        borderRadius: 2,
                        backgroundColor: this.state.checkboxContainerColor
                    }} onPress={() => this._reverseCheckboxColor() } />
                    <Text style={registrationAgreementText}>by clicking complete registration, you agree to our terms, data policy and cookies policy.</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: screenHeight * (70 / pixelHeight) }}>
                    <TouchableOpacity style={buttonStyle} onPress={() => {
                        if (this.state.checkboxContainerColor !== '#fff' && this.state.fullName !== '' && this.state.phoneNumber !== '') {
                            this._navigate('OrderDrinksScreen');
                        } else {
                            Alert.alert('Please fill all fields before continuing');
                        }
                    }}>
                        <Text style={buttonTextStyle}>Continue</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        );
    }
}

const styles = {
    titleText: {
        fontFamily: 'abeezee',
        fontSize: 24,
        marginLeft: screenWidth * (27 / pixelWidth),
        marginTop: screenHeight * (175 / pixelHeight),
        color: '#000'
    },
    subtitleText: {
        fontFamily: 'abeezee',
        fontSize: 18,
        marginLeft: screenWidth * (31 / pixelWidth),
        marginTop: screenHeight * (39 / pixelHeight),
        color: '#F2463A'
    },
    textInputStyle: {
        marginTop: screenHeight * (10 / pixelHeight),
        marginLeft: screenWidth * (27 / pixelWidth),
        height: screenHeight * (28 / pixelHeight),
        width: screenWidth * (361 / pixelWidth),
        borderColor: '#BCBCBC',
        borderWidth: 1,
        borderRadius: 5,
        fontFamily: 'abeezee',
        paddingLeft: screenWidth * (10 / pixelWidth),
    },
    registrationAgreementContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: screenHeight * (42 / pixelHeight),
        marginLeft: screenWidth  * (40 / pixelWidth),
    },
    registrationAgreementText: {
        fontFamily: 'abeezee',
        fontSize: 12,
        color: '#8F8F8F',
        width: screenWidth * (316 / pixelWidth),
        height: screenHeight * (53 / pixelHeight),
        marginLeft: screenWidth * (20 / pixelWidth),
    },
    buttonStyle: {
        backgroundColor: '#F2463A',
        borderRadius: 5,
        height: screenHeight * (31 / pixelHeight),
        width: screenWidth * (340 / pixelWidth),
        justifyContent: 'center', 
        alignItems: 'center'
    },
    buttonTextStyle: {
        fontFamily: 'abeezee',
        color: '#fff',
        fontSize: 18,
    }
};

export default UserModeStart;