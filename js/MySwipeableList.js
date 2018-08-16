import React, { Component } from 'react';
import {
    Image,
    SwipeableFlatList,
    TouchableHighlight,
    StyleSheet,
    Text,
    View,
    Alert,
} from 'react-native';

const data = [
    {
        key: 'like',
        icon: require('../thumbnails/like.png'),
        data: 'Like!',
    },
    {
        key: 'heart',
        icon: require('../thumbnails/heart.png'),
        data: 'Heart!',
    },
    {
        key: 'party',
        icon: require('../thumbnails/party.png'),
        data: 'Party!',
    },
];


export default class MySwipeableList extends Component {

    render() {
        return (
            <SwipeableFlatList
                data={data}
                bounceFirstRowOnMount={true}
                maxSwipeDistance={160}
                renderItem={this._renderItem.bind(this)}
                renderQuickActions={this._renderQuickActions.bind(this)} >
            </SwipeableFlatList>
        );

    }

    _renderItem({ item }) {
        return (
            <View style={styles.row}>
                <Image style={styles.rowIcon} source={item.icon} />
                <View style={styles.rowData}>
                    <Text style={styles.rowDataText}>{item.data}</Text>
                </View>
            </View>
        );
    }

    _renderQuickActions({ item }) {
        return (
            <View style={styles.actionsContainer}>
                <TouchableHighlight
                    style={styles.actionButton}
                    onPress={() => {
                        Alert.alert(
                            'Tips',
                            'You could do something with this edit action!',
                        );
                    }}>
                    <Text style={styles.actionButtonText}>Edit</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={[styles.actionButton, styles.actionButtonDestructive]}
                    onPress={() => {
                        Alert.alert(
                            'Tips',
                            'You could do something with this remove action!',
                        );
                    }}>
                    <Text style={styles.actionButtonText}>Remove</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#F6F6F6',
    },
    rowIcon: {
        width: 64,
        height: 64,
        marginRight: 20,
    },
    rowData: {
        flex: 1,
    },
    rowDataText: {
        fontSize: 24,
    },
    actionsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    actionButton: {
        padding: 10,
        width: 80,
        backgroundColor: '#999999',
    },
    actionButtonDestructive: {
        backgroundColor: '#FF0000',
    },
    actionButtonText: {
        textAlign: 'center',
    },
});
