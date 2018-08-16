
import React, { Component } from 'react';
import { View, ImageBackground, Text } from 'react-native';

export default class MyImageView extends Component {

    render() {

        return (
            <ImageBackground 
            source={{ uri: 'http://pic25.photophoto.cn/20121216/0010023949794270_b.jpg' }} 
            style={{width: 50, height: 50}}
            >
                <Text>Inside</Text>
            </ImageBackground>
        );
    }
}