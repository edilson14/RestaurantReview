import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from 'react-native'
import AppStyles from 'styles/AppStyles'

export default class RestaurantRow extends Component {
  state = {
    showInfo: false
  }
  onPressInfo = () => {
    this.setState({ showInfo: !this.state.showInfo })
  }

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
          <TouchableHighlight onPress={this.onPressInfo} style={AppStyles.button} underlayColor='#5398DC'>
            <Text style={AppStyles.buttonText}>Info</Text>
          </TouchableHighlight>
        </View>

        {this.state.showInfo && (
          <View>
            <Text style={AppStyles.info}>Restaurant Info</Text>
          </View>
        )}
      </View>
    )
  }
}
