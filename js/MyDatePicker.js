
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
    DatePickerAndroid,
} from 'react-native';

export default class MyDatePicker extends Component {

    constructor(props) {
        super(props)
        this.state = {
            presetDate: new Date(2016, 3, 5),
            allDate: new Date(2020, 4, 5),
            simpleText: '选择今日',
        };
    }

    async showPicker(stateKey, options) {
        try {
            var newState = {};
            const { action, year, month, day } = await DatePickerAndroid.open(options);
            if (action == DatePickerAndroid.dismissedAction) {
                newState[stateKey + 'Text'] = 'dismissed';
            } else {
                var date = new Date(year, month, day);
                newState[stateKey + 'Text'] = date.toLocaleDateString();
                newState[stateKey + 'Date'] = date;
            }
            this.setState(newState);
        } catch ({ code, message }) {
            console.warn(`Error in example '${stateKey}': `, message);
        }
    }

    render() {
        return (
            <View>
                <Text style={styles.welcome}>
                    日期选择器组件实例
                </Text>
                <TouchableHighlight
                    style={styles.button}
                    underlayColor='#a5a5a5'
                    onPress={this.showPicker.bind(this, 'simple', { date: this.state.simpleDate })}>
                    <Text style={styles.buttonText}>点击弹出日期选择器</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

//自定义封装组件
class CustomButton extends React.Component {
    render() {
        return (
            <TouchableHighlight
                style={styles.button}
                underlayColor="#a5a5a5"
                onPress={this.props.onPress}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({

    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    button: {
        margin: 5,
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd',
    }
});