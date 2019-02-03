import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

const DrinkItem = (props) => {
    return (
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-betwen', 'margin': 20}}>
        <Image
        style={{width: 50, height: 50}}
        source={{uri: props.image}}
        />
        <View>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 10
          }}> {props.name} - {props.price}
          </Text>
        </View>
      </View>
      )
}


export default DrinkItem;
