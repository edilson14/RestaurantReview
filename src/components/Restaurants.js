import React, { Component } from 'react';
import { Text, View, TextInput, ScrollView } from 'react-native';
import AppStyles from 'styles/AppStyles';

const restaurants = [
    { name: 'React Cafe', adress: '123 AnyWhere St' },
    { name: 'Fancy Restaurant', adress: '799 Main St' },
    { name: 'Taco Place', adress: '550 maple Rd' },
    { name: "Tony's Diner", address: '4101 College St' },
    { name: 'Pasta Central', address: '706 Harper St' },
    { name: 'Burger Builder', address: '4869 Hamilton Dr' },
    { name: 'Pizza Express', address: '1049 Bird St' },
    { name: 'Teriyaki To Go', address: '1885 Tea Berry Lane' },
    { name: 'Maroon Deli', address: '1082 Stuart St' },
    { name: 'Prime Bar and Grill', address: '1848 Fairfax Dr' },
    { name: 'Dumpling House', address: '747 Kelly Dr' },
    { name: 'Hot Chicken', address: '1816 Olive St' },
    { name: "Luna's Tap Room", address: '3256 Spirit Dr' },
    { name: 'Quick Sandwich Shop', address: '2587 Cherry Ridge Dr' },
    { name: "Bobby's Burgers", address: '4152 Berkley St' },
    { name: 'Turnpike Diner', address: '4571 Central Ave' },
    { name: 'Bombay Express', address: '65 Queens Lane' },
    { name: 'Coffee Central', address: '3228 Oakwood Circle' },
    { name: "King's Garden", address: '2935 Victoria Ct' },
    { name: 'Salads and More', address: '2454 Preston St' },
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

                <ScrollView contentContainerStyle={{
                    paddingTop: 30
                }}>
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
                </ScrollView>
            </View >
        )
    }
}