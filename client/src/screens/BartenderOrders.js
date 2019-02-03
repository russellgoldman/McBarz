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
    this.requestMoney = this.requestMoney.bind(this);
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

  requestMoney(amount, message) {
    const url =
  "https://gateway-web.beta.interac.ca/publicapi/api/v2/money-requests/send";
fetch(url, {
  method: "POST",
  headers: {
    accessToken: "Bearer 3c8572d2-17a2-418c-8c5c-f0bf63c82de3",
    thirdPartyAccessId: "CA1TAby3SPZrPM3D",
    requestId: "633f6ea3-6e90-4fa5-9439-d18159fdb4c3",
    deviceId: "49794efc-aefd-4e4c-a4e8-2d013ade09a9",
    apiRegistrationId: "CA1ARhjwSmMRv5ex",
    applicationId: "3240927341",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    sourceMoneyRequestId: uuid().replace(/-/g, ""),
    requestedFrom: {
      contactName: "John",
      language: "en",
      notificationPreferences: [
        { handle: "john@beta.inter.ac", handleType: "email", active: true }
      ]
    },
    amount: amount,
    currency: "CAD",
    editableFulfillAmount: false,
    requesterMessage: message,
    expiryDate: "2019-02-04T04:59:59.760Z",
    supressResponderNotifications: false
  })
})
  .then(res => res.json())
  .then(data => {
    console.log(data.paymentGatewayUrl);
  })
  .catch(error => console.log(error));
}

  getDataFromFirebase() {
    const ordersRef = firebase.database().ref('orders');
    ordersRef.on('value', (childSnapshot) => {
      const orders = [];
      childSnapshot.forEach(drink => {
        if(drink.toJSON().status == "pending") {
          orders.push({
            drink: drink.toJSON().drink,
            name: drink.toJSON().name,
            status: drink.toJSON().status,
            number: drink.toJSON().number,
            orderID: drink.toJSON().orderID,
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

// { access_token: '3c8572d2-17a2-418c-8c5c-f0bf63c82de3',
//   token_type: 'bearer',
//   expires_in: 259199,
//   scope: 'read write trust' }

  handleComplete(orderID, name, number) {
      const orderRef = firebase.database().ref(`orders/${orderID}/status`);
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
