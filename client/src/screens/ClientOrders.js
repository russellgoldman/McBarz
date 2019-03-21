import React, { Component } from 'react';
import { View, Text, Dimensions, FlatList, Image} from 'react-native';
import { Button} from 'react-native-elements';
import firebase from 'firebase';
import DrinkItem from './DrinkItem';


class ClientOrders extends Component {

  constructor(props) {
    super(props);
    this.state = {
      drinks: []
    }

    this.getDataFromFirebase = this.getDataFromFirebase.bind(this);
  }

  getDataFromFirebase() {
    let config = {
      apiKey: "_firebase_key_",
      authDomain: "mcbarz-9e9c5.firebaseapp.com",
      databaseURL: "https://mcbarz-9e9c5.firebaseio.com",
      projectId: "mcbarz-9e9c5",
      storageBucket: "mcbarz-9e9c5.appspot.com",
      messagingSenderId: "1048065412005"
    };
    firebase.initializeApp(config);

    const drinksRef = firebase.database().ref('drinks');
    drinksRef.on('value', (childSnapshot) => {
      const drinks = [];
      childSnapshot.forEach(drink => {
        drinks.push({
          name: drink.toJSON().name,
          price: drink.toJSON().price,
          image: drink.toJSON().image
        });
        this.setState({
          drinks,
        });
        console.log(this.state.drinks);
      })
    });
  }

  componentWillMount() {
    const url = 'https://mcbarzapi.herokuapp.com/send';
    const data = {name: "mohamed", number: "+16478688461"};
    this.getDataFromFirebase();
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', 'marginTop': 20, alignSelf: 'stretch' }}>
      <FlatList
      data={this.state.drinks}
      renderItem={({ item, index }) => {
        return (
          <DrinkItem name={item.name}
                     price={item.price}
                     image={item.image}
                     />
          )
        }}>
        </FlatList>
        <Button
           title = "CHECKOUT"
           backgroundColor = "red"
         />
        </View>
        );
      }
    }

export default ClientOrders;
