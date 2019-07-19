import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import RestaurantList from 'components/RestaurantList';
import RestaurantInfo from 'components/RestaurantInfo'

const AppContainer = createStackNavigator({
  Home: { screen: RestaurantList },
  Info: { screen: RestaurantInfo }
}, {
    defaultNavigationOptions: {

      headerStyle: {
        backgroundColor: '#0066CC',
        color: '#fff'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff'
      }
    }
  })

export default createAppContainer(AppContainer);





