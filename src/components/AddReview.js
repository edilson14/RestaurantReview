import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class AddReview extends Component {
    close = () => {
        this.props.navigation.goBack()
    }

    render() {
        return (
            <View style={styles.root}>
                <TouchableOpacity style={styles.button}
                    onPress={this.close}
                >
                    <Icon name='close' size={35} color="#F00" />
                </TouchableOpacity>
                <Text style={styles.addReview} >Add Review</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
    },
    button: {
        flexDirection: 'row-reverse',
        paddingHorizontal: 10
    },
    addReview: {
        fontSize: 25,
        color: '#444',
        textAlign: 'center',
        margin: 20
    }
})