/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TextInput
} from 'react-native';

let widthOfMargin = Dimensions.get('window').width * 0.05;

if (Platform.OS === "android") {
    // Android 平台需要运行的代码
} else {
    // iOS 平台需要运行的代码
}

// const instructions = Platform.select({
//     ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//     android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            inputedNum: '',
            inputedPW: '',
        };
        // this.updateNum = this.updateNum.bind(this);
        this.updatePW = this.updatePW.bind(this);
    }

    updateNum = (newText) => {
        this.setState((state) => {
            return {
                inputedNum: newText,
            };
        });
    };


    updatePW(newText) {
        this.setState({newText});
    }

    render() {

        return (
            <View style={styles.container}>
                <TextInput style={styles.textInputStyle}
                           placeholder={'请输入手机号'}
                           onChangeText={(newText) => this.updateNum(newText)}/>
                <Text style={styles.textPromptStyle}>
                    您输入的手机号：{this.state.inputedNum}
                </Text>
                <TextInput style={styles.textInputStyle}
                           placeholder={'请输入密码'}
                           secureTextEntry={true}
                           // onChangeText={this.updatePW}/>
                           onChangeText={this.updatePW.bind(this)}/>
                <Text style={styles.bigTextPrompt}>
                    确定
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    textInputStyle: {
        margin: widthOfMargin,
        backgroundColor: 'gray',
        fontSize: 20
    },
    textPromptStyle: {
        margin: widthOfMargin,
        fontSize: 20,
    },
    bigTextPrompt: {
        margin: widthOfMargin,
        backgroundColor: 'gray',
        color: 'white',
        textAlign: 'center',
        fontSize: 30
    }
});