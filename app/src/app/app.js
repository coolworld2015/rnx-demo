'use strict';

import React, {useState, useReducer} from 'react';
/*import {
    ActivityIndicator,
    View, StyleSheet,
} from 'react-native';*/

import Login from './login';
import AppContainer from './appContainer';

const initialState = {
    url: 'https://jwt-yard.herokuapp.com/',
    isLoggedIn: false,
    item: {},
};

export const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_TOKEN':
            return {
                ...state,
                key: action.data,
            };
        case 'SET_IS_LOGGED_IN':
            return {
                ...state,
                isLoggedIn: true,
            };
        case 'SET_IS_LOGGED_OUT':
            return {
                ...state,
                isLoggedIn: false,
            };
        default:
            return state;
    }
};

export const AppConfig = React.createContext();

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showProgress, setShowProgress] = useState(false);

    window.appConfig = {
        access_token: '',
        url: 'https://jwt-yard.herokuapp.com/',
        /*        onLogOut: this.onLogOut.bind(this),
                onLogin: this.onLogin.bind(this),*/
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

    let container;
    if (state.isLoggedIn) {
        container =  <AppContainer/>
        console.log('State........ ', state);
    } else {
        container = <Login/>
        console.log('State........ ', state);
    }

    return (
        <AppConfig.Provider value={{state, dispatch}}>

            {container}

        </AppConfig.Provider>
    );

};

/*class App extends Component {
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
}*/

/*const styles = StyleSheet.create({
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
});*/

export default App;
