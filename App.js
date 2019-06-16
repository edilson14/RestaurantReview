import React, { Component } from 'react';
import { Text, View, Platform } from 'react-native';
import AppStyles from 'styles/AppStyles';
import Restaurants from 'components/Restaurants'


export default class App extends Component {
  render() {
    const headerStyle = Platform.select({
      ios: AppStyles.header,
      android: AppStyles.androidHeader
    })

    return (
      <View style={AppStyles.main}>
        <Text style={headerStyle}
        >
          Restaurant Review
        </Text>

        <Restaurants />
      </View>
    );
  }
}



