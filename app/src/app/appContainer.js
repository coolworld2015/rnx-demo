'use strict';

import React, {useReducer, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {Image, Platform} from 'react-native';

import Phones from '../phones/phones';
import PhonesDetails from '../phones/phoneDetails';

import Audit from '../audit/audit';
import AuditDetails from '../audit/auditDetails';

const initialState = {
    method: () => null,
    counter: 0,
};

export const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_METHOD':
            return {
                ...state,
                method: action.data,
            };
        case 'SET_KEY':
            return {
                ...state,
                key: action.data,
            };
        case 'INCREASE_COUNTER':
            return {
                ...state,
                counter: state.counter + 1,
            };
        case 'DECREASE_COUNTER':
            return {
                ...state,
                counter: state.counter - 1,
            };
        default:
            return state;
    }
};

export const AppConfig = React.createContext();
export const AppContext = React.createContext();

const LogOut = () => {
    window.appConfig.onLogOut();
    return null;
};

const PhonesStack = createStackNavigator();

const PhonesStackScreen = () => {
    return (
        <PhonesStack.Navigator headerMode={'none'}>
            <PhonesStack.Screen name="Phones" component={Phones} options={{title: ''}}/>
            <PhonesStack.Screen name="Details" component={PhonesDetails} options={{title: '', headerLeft: null}}/>
        </PhonesStack.Navigator>
    );
};

const AuditStack = createStackNavigator();

const AuditStackScreen = () => {
    return (
        <PhonesStack.Navigator headerMode={'none'}>
            <PhonesStack.Screen name="Audit" component={Audit} options={{title: ''}}/>
            <PhonesStack.Screen name="Details" component={AuditDetails} options={{title: '', headerLeft: null}}/>
        </PhonesStack.Navigator>
    );
};

const Tab = Platform.select({
    ios: () => createBottomTabNavigator(),
    android: () => createMaterialTopTabNavigator(),
})();

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const [item, setItem] = useState({});
    const setContextItem = ((item) => {
        return setItem(item);
    });

    const tabBarOptions = {
        style: {
            backgroundColor: 'white',
        },
        labelStyle: {
            color: 'darkblue',
            fontWeight: 'bold',
        },
        upperCaseLabel: false,
        indicatorStyle: {backgroundColor: 'darkblue'},
    };

    const name = 'Phones';
    const MyTheme = {
        dark: false,
        colors: {
            background: 'white',
            card: 'rgb(255, 255, 255)',
            text: 'rgb(28, 28, 30)',
            border: 'rgb(199, 199, 204)',
        },
    };

    return (
        <AppConfig.Provider value={{state, dispatch}}>
            <AppContext.Provider value={{item, setContextItem}}>
                <NavigationContainer theme={MyTheme}>
                    <Tab.Navigator
                        style={{backgroundColor: 'white'}}
                        tabBarPosition={'top'}
                        tabBarOptions={tabBarOptions}
                        sceneContainerStyle={{marginTop: -49, backgroundColor: 'white'}}
                        screenOptions={({route}) => ({
                            tabBarIcon: ({focused, color, size}) => {
                                let iconName;

                                if (route.name === 'Phones') {
                                    iconName = <Image
                                        source={require('../../img/phones.png')}
                                        style={{
                                            height: 15,
                                            width: 15,
                                            margin: 0,
                                        }}
                                    />;
                                }
                                if (route.name === 'Audit') {
                                    iconName = <Image
                                        source={require('../../img/clock.png')}
                                        style={{
                                            height: 20,
                                            width: 20,
                                            margin: 0,
                                        }}
                                    />;
                                }
                                if (route.name === 'Quit') {
                                    iconName = <Image
                                        source={require('../../img/log-out.png')}
                                        style={{
                                            height: 20,
                                            width: 20,
                                            margin: 0,
                                        }}
                                    />;
                                }

                                return iconName;
                            },
                        })}
                    >
                        <Tab.Screen name={name} component={PhonesStackScreen}/>
                        <Tab.Screen name="Audit" component={AuditStackScreen}/>
                        <Tab.Screen name="Quit" component={LogOut}/>
                    </Tab.Navigator>
                </NavigationContainer>
            </AppContext.Provider>
        </AppConfig.Provider>
    );
};

export default App;
