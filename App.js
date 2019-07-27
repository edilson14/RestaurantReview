import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome'

import RestaurantList from 'components/RestaurantList';
import RestaurantInfo from 'components/RestaurantInfo'
import About from 'components/About'
import AddReview from 'components/AddReview';

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
},
  {
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
  });

const App = createStackNavigator({
  Tabs: { screen: TabNavigator },
  AddReview: { screen: AddReview }
}, {
    mode: 'modal',
    headerMode: 'none'
  }, {
    defaultNavigationOptions: {
      gestureEnabled: false //Remove close modal by gesture on IOS device's
    }
  }
)


export default createAppContainer(App);





