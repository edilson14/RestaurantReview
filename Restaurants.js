import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import AppStyles from './AppStyles';

const restaurants = [
    { name: 'React Cafe', adress: '123 AnyWhere St' },
    {
        name: 'Fancy Restaurant', adress: '799 Main St'
    },
    {
        name: 'Taco Place', adress: '550 maple Rd'
    }
]

export default class Restaurants extends Component {
    state = {
        search: null
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

                {

                    restaurants.filter(restaurant => {
                        return !this.state.search || restaurant.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
                    }).map((restaurant, index) => {
                        return (
                            <View key={restaurant.name} style={[AppStyles.row,
                            { backgroundColor: index % 2 === 0 ? 'Withe' : '#F3F3F7' }
                            ]}>
                                <View style={AppStyles.egds}>
                                    <Text >
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
        )
    }
}