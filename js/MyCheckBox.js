import React, { Component } from 'react';
import { View, StyleSheet, CheckBox, Text } from 'react-native';

export default class MyCheckBox extends Component {

    constructor(props) {
        super(props)
        this.state = {
            checked: false
        }
    }

    toggle() {
        this.setState(({ checked }) => {
            return {
                checked: !checked
            };
        });
    }

    render() {
        const { checked } = this.state;
        return (
            <View style={styles.container}>
                <Text>checked</Text>
                <CheckBox value = {checked} onChange={this.toggle.bind(this)} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


