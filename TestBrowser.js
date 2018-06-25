import React, {Component} from 'react';
import {
    AppRegistry, Navigator, BackAndroid, Platform, WebView, StyleSheet, Dimensions, Text, View
} from 'react-native';
import NavigationExperimental from 'react-native-deprecated-custom-components';

var {
    height: deviceHeight,
    width: deviceWidth
} = Dimensions.get('window');

export default class TestBrowser extends Component {

    render() {
        return (
            <View style={styles.container}>
                <WebView bounces={false}
                         scalesPageToFit={true}
                         source={{uri:"https://www.baidu.com", method: 'GET'}}
                         style={{width:deviceWidth, height: deviceHeight}}>
                </WebView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
    }
});