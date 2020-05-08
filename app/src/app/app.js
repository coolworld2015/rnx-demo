'use strict';

import React, {Component} from 'react';
import {
    ActivityIndicator,
    View, StyleSheet,
} from 'react-native';

import Login from './login';
import AppContainer from './appContainer';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showProgress: false,
            isLoggedIn: false,
        };

        window.appConfig = {
            access_token: '',
            url: 'https://jwt-yard.herokuapp.com/',
            onLogOut: this.onLogOut.bind(this),
            onLogin: this.onLogin.bind(this),
            socket: {},
            item: {},
            phones: {
                items: [],
                item: {},
            },
            users: {
                items: [],
                item: {},
                refresh: false,
            },
            audit: {
                items: [],
                item: {},
            },
            driver: {
                plateNo: 'AA1234AA',
                status: 'arrived',
                standing: 'n/a',
            },
        };
    }

    onLogin() {
        this.setState({isLoggedIn: true});
    }

    onLogOut() {
        this.setState({isLoggedIn: false});
    }

    render() {
        if (!this.state.showProgress) {
            if (this.state.isLoggedIn) {
                return (
                    <AppContainer/>
                );

            } else {
                return (
                    <Login/>
                );
            }
        } else {
            return (
                <View style={styles.loader}>
                    <ActivityIndicator
                        size="large"
                        color="darkblue"
                        animating={true}
                    />
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    loader: {
        marginTop: 200,
        justifyContent: 'center',
        height: 100,
    },
    error: {
        color: 'red',
        paddingTop: 10,
        textAlign: 'center',
    },
});

export default App;
