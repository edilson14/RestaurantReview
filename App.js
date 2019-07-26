import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome'

import RestaurantList from 'components/RestaurantList';
import RestaurantInfo from 'components/RestaurantInfo'
import About from 'components/About'

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
  }
)

const TabNavigator = createBottomTabNavigator({
  Restaurants: { screen: AppContainer },
  About: { screen: About }
}, {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        tabBarIcon: ({ tintColor }) => {
          const route = navigation.state.routeName;
          console.log('route', route);
          const name = {
            'Restaurants': 'list',
            'About': 'info-circle'
          }[route]
          return <Icon name={name} color={tintColor} size={15} />
        },
        tabBarOptions: {
          activeBackgroundColor: '#F0F0F0',
          style: {
            heigth: 5,

          }
        }
      }
    }
  }
);



export default createAppContainer(TabNavigator);





