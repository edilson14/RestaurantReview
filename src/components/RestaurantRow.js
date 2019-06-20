import React, { Component } from 'react'
import { View, Text } from 'react-native'
import AppStyles from 'styles/AppStyles'

export default class RestaurantRow extends Component {
  render () {
    const { restaurant, index } = this.props
    return (
      <View key={restaurant.name} style={[AppStyles.row, { backgroundColor: index % 2 === 0 ? 'Withe' : '#F3F3F7' }]}>
        <View style={AppStyles.egds}>
          <Text>{index + 1}</Text>
        </View>
        <View style={AppStyles.nameAdress}>
          <Text style={AppStyles.name}>{restaurant.name}</Text>
          <Text style={AppStyles.adressText}>{restaurant.adress}</Text>
        </View>

        <View style={AppStyles.egds}>
          <Text>Info</Text>
        </View>
      </View>
    )
  }
}
