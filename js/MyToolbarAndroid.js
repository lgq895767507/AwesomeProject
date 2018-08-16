import React, { Component } from 'react';
import { Text, ToolbarAndroid, ToastAndroid } from 'react-native';

export default class MyToolbarAndroid extends Component {
    render() {
        return (
            <ToolbarAndroid
                navIcon={require('../thumbnails/menu.png')}
            //    logo={require('../thumbnails/like.png')}
             //   title="toolbar title"
                style={{ backgroundColor: '#e9eaed', height: 56 }}
                actions={[{ title: 'setting', icon: require('../thumbnails/menu.png'), show: 'always' }]}
                onActionSelected={this.onActionSelected}
            />
        );
    }

    onActionSelected(position) {
        if (position == 0) {
            ToastAndroid.show("setting", ToastAndroid.SHORT)
        }
    }
}