import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import AppStyles from './AppStyles';
import Restaurants from './Restaurants'


export default class App extends Component {
  render() {
    return (
      <View style={AppStyles.main}>
        <Text style={AppStyles.header}
        >
          Restaurant Review
        </Text>

        <Restaurants />
      </View>
    );
  }
}



