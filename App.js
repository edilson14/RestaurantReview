
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View>
        <Text style={styles.header}
        >
          Restaurant Review
        </Text>

        <Text style={styles.name}>
          React Cafe
        </Text>

        <Text style={styles.adress}>
          123 AnyWhere St
        </Text>

        <Text style={styles.name}>
          Fancy Restaurant
        </Text>

        <Text style={styles.adress}>
          799 Main St
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    paddingLeft: 10
  }
})

