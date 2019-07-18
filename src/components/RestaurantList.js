import React, { Component } from 'react';
import { Text, View, Platform, Image } from 'react-native';
import AppStyles from 'styles/AppStyles';
import Restaurants from 'components/Restaurants';
import PizzaImages from 'images/pizza.png';


export default class RestaurantList extends Component {
    render() {
        const headerStyle = Platform.select({
            ios: AppStyles.header,
            android: AppStyles.androidHeader
        })

        return (
            <View style={AppStyles.main}>
                <View style={AppStyles.image}>
                    <Image source={PizzaImages} />
                </View>
                <Text style={headerStyle}>
                    Restaurant Review
                </Text>
                <Restaurants />
            </View>
        );
    }
}
