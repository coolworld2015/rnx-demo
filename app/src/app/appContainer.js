'use strict';

import React, {useContext, useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useNavigation} from '@react-navigation/core';

import {Image, Platform} from 'react-native';

import {AppConfig} from './app';

import Photos from '../photos/photos';

import Phones from '../phones/phones';
import PhonesDetails from '../phones/phoneDetails';

import Audit from '../audit/audit';
import AuditDetails from '../audit/auditDetails';

const LogOut = () => {
    const {dispatch} = useContext(AppConfig);
    const navigation = useNavigation();

    useEffect(() => {
        const didFocusListener = navigation.addListener(
            'focus',
            () => {
                console.log('Focused on Quit')
                dispatch({type: 'SET_IS_LOGGED_OUT'});
            },
        );
    }, []);

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
        <AuditStack.Navigator headerMode={'none'}>
            <AuditStack.Screen name="Audit" component={Audit} options={{title: ''}}/>
            <AuditStack.Screen name="Details" component={AuditDetails} options={{title: '', headerLeft: null}}/>
        </AuditStack.Navigator>
    );
};

const Tab = Platform.select({
    ios: () => createBottomTabNavigator(),
    android: () => createMaterialTopTabNavigator(),
})();

const AppContainer = () => {
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
        //activeBackgroundColor: 'darkblue',
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
        <NavigationContainer theme={MyTheme}>
            <Tab.Navigator
                style={{backgroundColor: 'white'}}
                tabBarPosition={'top'}
                tabBarOptions={tabBarOptions}
                sceneContainerStyle={{marginTop: -49, backgroundColor: 'white'}}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;

                        if (route.name === 'Photos') {
                            iconName = <Image
                                source={require('../../img/images.png')}
                                style={{
                                    height: 20,
                                    width: 20,
                                    margin: 0,
                                }}
                            />;
                        }
                        if (route.name === 'Photos' && focused) {
                            iconName = <Image
                                source={require('../../img/images.png')}
                                style={{
                                    height: 35,
                                    width: 35,
                                    margin: 0,
                                }}
                            />;
                        }

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
                        if (route.name === 'Phones' && focused) {
                            iconName = <Image
                                source={require('../../img/phones.png')}
                                style={{
                                    height: 30,
                                    width: 30,
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
                        if (route.name === 'Audit' && focused) {
                            iconName = <Image
                                source={require('../../img/clock.png')}
                                style={{
                                    height: 35,
                                    width: 35,
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
                <Tab.Screen name="Photos" component={Photos}/>
                <Tab.Screen name={name} component={PhonesStackScreen}/>
                <Tab.Screen name="Audit" component={AuditStackScreen}/>
                <Tab.Screen name="Quit" component={LogOut}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default AppContainer;
