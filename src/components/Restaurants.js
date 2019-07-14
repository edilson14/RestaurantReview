import React, { Component } from 'react';
import { View, TextInput, FlatList } from 'react-native';
import RestaurantRow from 'components/RestaurantRow';
import AppStyles from 'styles/AppStyles';
import axios from 'axios'

export default class Restaurants extends Component {
  state = {
    search: null,
    restaurants: [],
  }

  componentDidMount() {
    axios.get('https://restaurantreview-server.herokuapp.com/restaurants')
      .then(result => this.setState({ restaurants: result.data }))
  }

  render() {
    return (
      <View>
        <TextInput
          style={AppStyles.input}
          onChangeText={text => {
            this.setState({ search: text })
          }}
          placeholder='Search Restaurant'
          value={this.state.search}
        />

        <FlatList
          data={
            this.state.restaurants.filter(restaurant => {
              return !this.state.search || restaurant.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
            })}
          renderItem={({ item, index }) => <RestaurantRow restaurant={item} index={index} />}
          keyExtractor={item => item.name}
          initialNumToRender={16}
        />
      </View>
    )
  }
}
