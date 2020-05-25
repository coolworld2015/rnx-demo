'use strict';

import React, {useContext} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableWithoutFeedback,
    ScrollView,
} from 'react-native';

import {useNavigation} from '@react-navigation/core';
import {AppConfig} from '../app/app';

const PhoneDetails = () => {
    const {state} = useContext(AppConfig);
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };
console.log(state.item.data.item)
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <TouchableHighlight
                        onPress={() => goBack()}
                        underlayColor='darkblue'>
                        <View>
                            <Text style={styles.textSmall}>
                                Back
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View>
                    <TouchableWithoutFeedback>
                        <View>
                            <Text style={styles.textLarge}>
                                {state.item.data.item.name}
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View>
                    <TouchableWithoutFeedback>
                        <View>
                            <Text style={styles.textSmall}>
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>

            <ScrollView>
                <View style={styles.form}>
                    <View style={styles.itemBlock}>
                        <Text style={styles.itemTextBold}>
                            Login:
                        </Text>
                        <View style={styles.itemWrap}>
                            <Text style={styles.itemText}>
                                {state.item.data.item.name}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.itemBlock}>
                        <Text style={styles.itemTextBold}>
                            Date:
                        </Text>
                        <View style={styles.itemWrap}>
                            <Text style={styles.itemText}>
                                {state.item.data.item.date}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.itemBlock}>
                        <Text style={styles.itemTextBold}>
                            IP:
                        </Text>
                        <View style={styles.itemWrap}>
                            <Text style={styles.itemText}>
                                {state.item.data.item.ip.split(':')[3]}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.itemBlock}>
                        <Text style={styles.itemTextBold}>
                            Description:
                        </Text>
                        <View style={styles.itemWrap}>
                            <Text style={styles.itemText}>
                                {state.item.data.item.description}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.itemBlock}>
                        <Text style={styles.itemTextBold}>
                            ID:
                        </Text>
                        <View style={styles.itemWrap}>
                            <Text style={styles.itemText}>
                                {state.item.data.item.id}
                            </Text>
                        </View>
                    </View>

                    <TouchableHighlight
                        onPress={() => goBack()}
                        style={styles.button}>
                        <View>
                            <Text style={styles.buttonText}>
                                Back
                            </Text>
                        </View>
                    </TouchableHighlight>

                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'darkblue',
        borderWidth: 0,
        borderColor: 'whitesmoke',
        marginTop: 50,
    },
    textSmall: {
        fontSize: 16,
        textAlign: 'center',
        margin: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    textLarge: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        marginTop: 12,
        marginRight: 40,
        fontWeight: 'bold',
        color: 'white',
    },
    form: {
        flex: 1,
        padding: 10,
        justifyContent: 'flex-start',
        paddingBottom: 130,
        backgroundColor: 'white',
    },
    itemBlock: {
        flexDirection: 'row',
    },
    itemWrap: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    itemTextBold: {
        fontSize: 18,
        textAlign: 'left',
        margin: 5,
        fontWeight: 'bold',
        color: 'black',
    },
    itemText: {
        fontSize: 18,
        textAlign: 'left',
        margin: 5,
        marginLeft: 2,
        color: 'black',
    },
    button: {
        height: 50,
        backgroundColor: 'darkblue',
        borderColor: '#48BBEC',
        alignSelf: 'stretch',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    loader: {
        marginTop: 20,
    },
    error: {
        color: 'red',
        paddingTop: 10,
        textAlign: 'center',
    },
});

export default PhoneDetails;
