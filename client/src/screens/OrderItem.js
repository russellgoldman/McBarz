import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';

const OrderItem = (props) => {
  return (
    <View>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-betwen', 'margin': 20}}>
        <View>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginLeft: 10
        }}> Order: {props.drink.name} x{props.drink.quantity}
        </Text>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginLeft: 10
        }}> Name: {props.name}, Status: {props.status}
        </Text>
        </View>
      </View>
      <View style={{marginLeft: 20, marginRight: 20}}>
        <Button
        onPress={() => props.handleComplete(props.orderID, props.name, props.number)}
        title="COMPLETE"
        >
        </Button>
      </View>
    </View>
    )
}


export default OrderItem;
