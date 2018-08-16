import React, { Component } from 'react';
import { Text, ToastAndroid } from 'react-native';

export default class MyToast extends Component {
    render() {
        return (
            <Text onPress={this._onpress}>
                click toast!
            </Text>
        );
    }

    _onpress() {
        ToastAndroid.show("hello show", ToastAndroid.SHORT);
    }
}