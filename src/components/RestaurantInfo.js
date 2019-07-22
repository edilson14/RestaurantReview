import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import RestaurnatInfoStyles from 'styles/RestaurnatInfoStyles'
import Stars from 'components/Stars'


export default class RestaurantInfo extends Component {

    static navigationOptions = {
        title: 'Restaurant Info'
    }
    render() {
        const restaurant = this.props.navigation.getParam('restaurant');
        // debugger
        return (
            <ScrollView style={RestaurnatInfoStyles.root}>

                <View style={RestaurnatInfoStyles.infoHeader}>
                    <Image
                        source={{
                            uri: `https://restaurantreview-server.herokuapp.com/images/${restaurant.image}`
                        }}
                        style={RestaurnatInfoStyles.image}
                        resizeMode="contain"
                    />
                    <View style={RestaurnatInfoStyles.info}>
                        <Text style={RestaurnatInfoStyles.name}>{restaurant.name}</Text>
                        <Text >{restaurant.address}</Text>
                        <Stars rating={restaurant.rating} />
                    </View>
                </View>
            </ScrollView>
        )
    }
}
