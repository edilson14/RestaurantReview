import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AppStyles from './AppStyles.js';

const restaurants = [
  { name: 'React Cafe', adress: '123 AnyWhere St' },
  {
    name: 'Fancy Restaurant', adress: '799 Main St'
  },
  {
    name: 'Taco Place', adress: '550 maple Rd'
  }
]
export default class App extends Component {

  render() {
    return (
      <View style={AppStyles.main}>
        <Text style={AppStyles.header}
        >
          Restaurant Review
        </Text>

        {
          restaurants.map((restaurant, index) => {
            return (

              <View key={restaurant.name} style={[AppStyles.row,
              { backgroundColor: index % 2 === 0 ? 'white' : '#F3F3F7' }]}>
                <View style={AppStyles.egds}>

                  <Text>
                    {index + 1}
                  </Text>
                </View>

                <View style={AppStyles.nameAdress}>

                  <Text style={AppStyles.name}>
                    {restaurant.name}
                  </Text>

                  <Text style={AppStyles.adressText}>
                    {restaurant.adress}
                  </Text>
                </View>

                <View style={AppStyles.egds}>
                  <Text>
                    Info
              </Text>
                </View>
              </View>
            )
          })
        }
      </View>
    );
  }
}



