
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const restaurants =
  [
    {
      name: 'React Cafe',
      adress: '123 AnyWhere St'
    },
    {
      name: 'Fancy Restaurant',
      adress: '799 Main St'
    },
    {
      name: 'Taco Place',
      adress: '550 maple Rd'
    }
  ]
export default class App extends Component {


  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.header}
        >
          Restaurant Review
        </Text>

        {
          restaurants.map((restaurant, index) => {
            return (

              <View key={restaurant.name} style={styles.restaurants}>
                <View style={styles.index}>

                  <Text>
                    {index + 1}
                  </Text>
                </View>

                <View style={styles.restaurantInfo}>

                  <Text style={styles.name}>
                    {restaurant.name}
                  </Text>

                  <Text style={styles.adress}>
                    {restaurant.adress}
                  </Text>
                </View>

                <View style={styles.info}>
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

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  restaurants: {
    flexDirection: 'row'
  },
  header: {
    padding: 40,
    fontSize: 30,
    textAlign: 'center',
    color: '#0066CC',
    fontWeight: '300'
  },
  name: {
    color: 'black',
    fontSize: 20
  },
  adress: {
    color: 'grey',
  },
  restaurantInfo: {
    flexDirection: 'column',
    flex: 8
  },
  info: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  index: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

