import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';

class HomeScreen extends Component {

  componentWillMount() {
    console.log("hello world")
    const url = 'https://mcbarzapi.herokuapp.com/send';
    const data = {name: "mohamed", number: "+16478688461"};
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: "name=mohamed&number=+16478688461",
    }).then(res => console.log(res))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to McBarz!</Text>
      </View>
      );
  }
}

export default HomeScreen;
