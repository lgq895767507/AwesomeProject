import React, { Component } from 'react';
import {
    View,
    ProgressBarAndroid,
} from 'react-native';

export default class MyProgressBar extends Component {

    render() {
        return (
            <View>
                <ProgressBarAndroid style='Inverse' />
            </View>
        );
    }
}