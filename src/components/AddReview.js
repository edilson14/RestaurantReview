import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export default class AddReview extends Component {
    close = () => {
        this.props.navigation.goBack()
    }

    state = {
        name: '',
        rating: 0,
        comment: ''
    }

    render() {
        return (
            <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: '#FFF' }}>

                <View style={styles.root}>
                    <TouchableOpacity style={styles.button}
                        onPress={this.close}
                    >
                        <Icon name='close' size={35} color="#F00" />
                    </TouchableOpacity>

                    <Text style={styles.addReview} >Add Review</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Name (optional)"
                        value={this.state.name}
                        onChangeText={name => this.setState({ name })}
                    />

                    <Text style={styles.rating}>
                        Your Rating:
                </Text>

                    <View style={styles.stars}>
                        {
                            [1, 2, 3, 4, 5].map(rat => {
                                return <TouchableOpacity
                                    style={styles.starButton}
                                    onPress={() => this.setState({ rating: rat })}
                                    key={rat}
                                >
                                    <Icon
                                        name="star"
                                        color={this.state.rating >= rat ? "#FFD64C" : "#CCCCCC"}
                                        size={40}
                                    />
                                </TouchableOpacity>
                            })

                        }
                    </View>

                    <TextInput
                        style={[styles.input, { height: 100 }]}
                        value={this.state.comment}
                        onChangeText={comment => this.setState({ comment })}
                        placeholder="Add Review"
                        multiline={true}
                        numberOfLines={10}
                    />

                    <TouchableOpacity style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>
                            Submit Review
                    </Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAwareScrollView>
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
    },
    input: {
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 3
    },
    rating: {
        fontSize: 20,
        color: 'grey',
        textAlign: 'center',
        marginVertical: 40
    },
    stars: {
        marginBottom: 80,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    starButton: {
        padding: 5
    },
    submitButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#0066cc',
        borderRadius: 4,
        marginVertical: 10,
        marginHorizontal: 20
    },
    submitButtonText: {
        fontSize: 18,
        color: '#ffffff',
        textAlign: 'center'
    }
})