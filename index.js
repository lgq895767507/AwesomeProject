/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import MyCheckBox from './js/MyCheckBox'
import MyImageView from './js/MyImageView'
import MyFlatList from './js/MyFlatList'
import MySectionList from './js/MySectionList'
import MyMaskedView from './js/MyMaskedView'
import MyDatePicker from './js/MyDatePicker'
import MyDrawableAndroid from './js/MyDrawableAndroid'
import MyProgressBar from './js/MyProgressBar'
import MyToast from './js/MyToast'
import MyToolbarAndroid from './js/MyToolbarAndroid'

AppRegistry.registerComponent(appName, () => MyToolbarAndroid);
