/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';


export default class LearnRN extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.firstRow}>
                    <View style={styles.test1}></View>
                    <View style={styles.test2}></View>
                    <View style={styles.test3}></View>
                </View>
                <View style={styles.testPosition}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { // 根据 View 样式定义
        flex: 1,
        backgroundColor: 'white',
    },
    firstRow: { // 没有指定这个样式的宽度，它将默认使用父组件样式的可用全部宽度
        height: 40,
        top: 40,
        backgroundColor:'black',
        flexDirection:'row',
        // justifyContent: 'space-around',
        alignItems: 'center',
    },
    test1: {
        width: 68,
        height: 24,
        backgroundColor: 'white',
    },
    test2: {
        width: 40,
        height: 24,
        backgroundColor: 'white',
    },
    test3: {
        width: 100,
        height: 24,
        backgroundColor: 'white',
    },
    testPosition: {
        backgroundColor: 'grey',
        height: 60,
        width: 60,
        position: 'absolute',
        top: 150,
        right: 50
    }
});