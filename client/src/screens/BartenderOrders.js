import React, { Component } from 'react';
import { View, Text, Dimensions, FlatList, Image} from 'react-native';
import firebase from 'firebase';
import OrderItem from './OrderItem';
import { Button } from 'react-native-elements';
import uuid from 'uuid/v4';

class BartenderOrders extends Component {

  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      status: "pending",
      selectedIndex: 0
    }

    this.getDataFromFirebase = this.getDataFromFirebase.bind(this);
    this.initializeFirebase = this.initializeFirebase.bind(this);
  }

  initializeFirebase() {
    let config = {
      apiKey: "AIzaSyCpyWtUKPy2dzHcyT6fMqTMO-2jEK1NwXs",
      authDomain: "mcbarz-9e9c5.firebaseapp.com",
      databaseURL: "https://mcbarz-9e9c5.firebaseio.com",
      projectId: "mcbarz-9e9c5",
      storageBucket: "mcbarz-9e9c5.appspot.com",
      messagingSenderId: "1048065412005"
    };
    firebase.initializeApp(config);
  }

  getDataFromFirebase() {
    const ordersRef = firebase.database().ref('orders/1/');
    ordersRef.on('value', (childSnapshot) => {
      const orders = [];
      childSnapshot.forEach(drink => {
        console.log(drink);
        if(drink.toJSON().status == "pending") {
          orders.push({
            drink: drink.toJSON().drink,
            name: drink.toJSON().name,
            status: drink.toJSON().status,
            number: drink.toJSON().number,
            orderID: drink.key
          });
        }
      })
      this.setState({
          orders
        });
    });
  }

  componentWillMount() {
    this.initializeFirebase();
    this.getDataFromFirebase();
  }

  handleComplete(orderID, name, number) {
      const orderRef = firebase.database().ref(`orders/1/${orderID}/status`);
      orderRef.set("completed").then(() => {
        console.log("updated");
        const url = 'https://mcbarzapi.herokuapp.com/send';
        fetch(url, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `name=${name}&number=${number}`,
        }).then(res => console.log(res))
          .catch(error => console.log(error));
      }).catch(err => console.log(err));
  }

  render() {
    console.log("hello")
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', 'marginTop': 20, alignSelf: 'stretch' }}>
      <FlatList
      data={this.state.orders}
      renderItem={({ item, index }) => {
          return (
            <OrderItem orderID={item.orderID}
                       drink={item.drink}
                       name={item.name}
                       status={item.status}
                       number={item.number}
                       handleComplete={this.handleComplete.bind(this)}
                       />
            )
        }}>
        </FlatList>
        </View>
        );
      }
    }

export default BartenderOrders;
