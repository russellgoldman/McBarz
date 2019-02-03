import React, { Component } from 'react';
import { View, Text, Dimensions, FlatList, Image } from 'react-native';
import firebase from 'firebase';
// import ClientOrders from './ClientOrders'
import BartenderOrders from './BartenderOrders'

class HomeScreen extends Component {
  render() {
    return <BartenderOrders />
  }
}

export default HomeScreen;
