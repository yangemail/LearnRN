import React, {Component} from 'react';
import {
    AppRegistry, Navigator, BackAndroid, Platform
} from 'react-native';
import NavigationExperimental from 'react-native-deprecated-custom-components';

import LoginLeaf from './LoginLeaf';
import WaitingLeaf from './WaitingLeaf';

export default class NaviModule extends Component {
    constructor(props) {
        super(props);
        this.renderScene = this.renderScene.bind(this);
        this.configureScene = this.configureScene.bind(this);
        this.handleBackAndroid = this.handleBackAndroid.bind(this);
    }

    configureScene(route) {
        return NavigationExperimental.Navigator.SceneConfigs.FadeAndroid;
    }

    renderScene(router, navigator) {
        this.navigator = navigator; // NaviModule 组件的 navigator 变量被赋值
        switch (router.name) {
            case "login":
                return <LoginLeaf navigator={navigator}/>;
            case "waiting":
                return <WaitingLeaf phoneNumber={router.phoneNumber}
                                    userPW={router.userPW}
                                    navigator={navigator}/>
        }
    }

    render() {
        return (
            <NavigationExperimental.Navigator initialRoute={{name: 'login'}}
                                              configureScene={this.configureScene}
                                              renderScene={this.renderScene}/>
        );
    }

    handleBackAndroid() {
        if (this.navigator.getCurrentRoutes().length > 1) {
            this.navigator.pop();
            return true;
        }
        return false;
    }

    componentDidMount() {
        if (Platform.OS === "android") {
            BackAndroid.addEventListener('hardwareBackPress', this.handleBackAndroid);
        }
    }

    componentWillUnmount() {
        if (Platform.OS === "andorid") {
            BackAndroid.removeEventListener('hardwareBackPress', this.handleBackAndroid);
        }
    }
}