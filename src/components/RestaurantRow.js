import React, { Component } from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native';
import AppStyles from 'styles/AppStyles';
import Stars from 'components/Stars'

export default class RestaurantRow extends Component {
  state = {
    showInfo: false
  }
  onPressInfo = () => {
    this.setState({ showInfo: !this.state.showInfo })
  }

  render() {
    const { restaurant, index } = this.props

    return (
      <View key={restaurant.name} style={{ backgroundColor: index % 2 === 0 ? 'Withe' : '#F3F3F7' }}>
        <View style={AppStyles.row}>

          <View style={AppStyles.stars}>
            <Stars rating={restaurant.rating} />
          </View>
          <View style={AppStyles.nameAdress}>
            <Text style={AppStyles.name}>{restaurant.name}</Text>
            <Text style={AppStyles.adressText}>{restaurant.address}</Text>
          </View>

          <View style={AppStyles.egds}>
            <TouchableHighlight onPress={this.onPressInfo} style={AppStyles.button} underlayColor='#5398DC'>
              <Text style={AppStyles.buttonText}>Info</Text>
            </TouchableHighlight>
          </View>

          {
            this.state.showInfo && (
              <View style={AppStyles.info}>
                <Text >Restaurant Info</Text>
                <Image source={{
                  uri: `https://restaurantreview-server.herokuapp.com/images/${restaurant.image}`,
                }}
                  resizeMode="contain"
                  style={{
                    flex: 1,
                    height: 100
                  }}
                />
              </View>
            )
          }
        </View>
      </View >
    )
  }
}
