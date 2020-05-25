'use strict';

import React, {useState, useContext} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    ScrollView,
    ActivityIndicator,
    TextInput,
    Dimensions,
    KeyboardAvoidingView,
} from 'react-native';

import {AppConfig} from './app';

const Login = () => {
    const {state, dispatch} = useContext(AppConfig);
    const [showProgress, setShowProgress] = useState(false);
    const [badCredentials, setBadCredentials] = useState(false);

    const width = Dimensions.get('window').width;

    let errorCtrl;
    if (badCredentials) {
        errorCtrl = <Text style={styles.error}>
            That username and password combination did not work
        </Text>;
    }

    const onLogin = () => {
        dispatch({type: 'SET_IS_LOGGED_IN'});
        console.log('State........ ', state);
    };

    return (
        <ScrollView style={{backgroundColor: 'whitesmoke'}} keyboardShouldPersistTaps='always'>
            <KeyboardAvoidingView behavior="padding" enabled>
                <View style={styles.container}>

                    <View style={styles.headerContainer}>
                        <Text style={styles.heading}>
                            RN-Demo
                        </Text>
                    </View>

                    <Image style={styles.logo}
                           source={require('../../img/logo.jpg')}
                    />

                    <TextInput
                        underlineColorAndroid='rgba(0,0,0,0)'
                        /*onChangeText={(text) => this.setState({
                            username: text,
                            badCredentials: false
                        })}*/
                        style={{
                            height: 50,
                            width: width * .90,
                            marginTop: 10,
                            padding: 4,
                            fontSize: 18,
                            borderWidth: 1,
                            borderColor: 'lightgray',
                            borderRadius: 5,
                            color: 'black',
                            backgroundColor: 'white',
                        }}
                        //value={this.state.username}
                        placeholder='Login'>
                    </TextInput>

                    <TextInput
                        underlineColorAndroid='rgba(0,0,0,0)'
                        /*onChangeText={(text) => this.setState({
                            password: text,
                            badCredentials: false
                        })}*/
                        style={{
                            height: 50,
                            width: width * .90,
                            marginTop: 10,
                            padding: 4,
                            fontSize: 18,
                            borderWidth: 1,
                            borderColor: 'lightgray',
                            borderRadius: 5,
                            color: 'black',
                            backgroundColor: 'white',
                        }}
                        //value={this.state.password}
                        placeholder='Password'
                        secureTextEntry={true}>
                    </TextInput>

                    <TouchableHighlight
                        onPress={() => onLogin()}
                        style={styles.button}>
                        <Text style={styles.buttonText}>
                            Log in
                        </Text>
                    </TouchableHighlight>

                    {errorCtrl}

                    <ActivityIndicator
                        animating={showProgress}
                        size="large"
                        color="darkblue"
                        style={styles.loader}
                    />

                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

/*class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showProgress: false,
            username: 'ed',
            password: '1314',
            bugANDROID: '',
            width: Dimensions.get('window').width
        }
    }

	componentDidMount() {
		appConfig.socket.name = this.state.username;
		this.setState({
			width: Dimensions.get('window').width
        });
	}

    onLogin() {
        if (this.state.username === undefined || this.state.username === '' ||
            this.state.password === undefined || this.state.password === '') {
            this.setState({
                badCredentials: true
            });
            return;
        }

        this.setState({
            showProgress: true,
			badCredentials: false,
            bugANDROID: ' '
        });

        var url = appConfig.url;

        fetch(appConfig.url + 'api/login', {
            method: 'post',
            body: JSON.stringify({
                name: this.state.username,
                pass: this.state.password,
                description: 'Android'
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((responseData) => {
				console.log(responseData);
                if (responseData.token) {
                    appConfig.access_token = responseData.token;
					appConfig.socket.name = this.state.username;
                    this.setState({
                        badCredentials: false
                    });
                    window.appConfig.onLogin();
                } else {
                    this.setState({
                        badCredentials: true,
                        showProgress: false
                    });
                }
            })
            .catch((error) => {
				console.log(responseData);
                this.setState({
                    badCredentials: true,
                    showProgress: false
                });
            })
    }

    render() {
        let errorCtrl;

        if (this.state.badCredentials) {
            errorCtrl = <Text style={styles.error}>
                That username and password combination did not work
            </Text>;
        }

        return (
            <ScrollView style={{backgroundColor: 'whitesmoke'}} keyboardShouldPersistTaps='always'>
                <KeyboardAvoidingView behavior="padding" enabled>
                <View style={styles.container}>

                    <View style={styles.headerContainer}>
                        <Text style={styles.heading}>
                            RN-Demo
                        </Text>
                    </View>

					<Image style={styles.logo}
                           source={require('../../img/logo.jpg')}
                    />

                    <TextInput
                        underlineColorAndroid='rgba(0,0,0,0)'
                        onChangeText={(text) => this.setState({
                            username: text,
                            badCredentials: false
                        })}
                        style={{
                            height: 50,
                            width: this.state.width * .90,
                            marginTop: 10,
                            padding: 4,
                            fontSize: 18,
                            borderWidth: 1,
                            borderColor: 'lightgray',
                            borderRadius: 5,
                            color: 'black',
                            backgroundColor: 'white'
                        }}
                        value={this.state.username}
                        placeholder='Login'>
                    </TextInput>

                    <TextInput
                        underlineColorAndroid='rgba(0,0,0,0)'
                        onChangeText={(text) => this.setState({
                            password: text,
                            badCredentials: false
                        })}
                        style={{
                            height: 50,
                            width: this.state.width * .90,
                            marginTop: 10,
                            padding: 4,
                            fontSize: 18,
                            borderWidth: 1,
                            borderColor: 'lightgray',
                            borderRadius: 5,
                            color: 'black',
                            backgroundColor: 'white'
                        }}
                        value={this.state.password}
                        placeholder='Password'
                        secureTextEntry={true}>
                    </TextInput>

                    <TouchableHighlight
                        onPress={() => this.onLogin()}
                        style={styles.button}>
                        <Text style={styles.buttonText}>
                            Log in
                        </Text>
                    </TouchableHighlight>

                    {errorCtrl}

                    <ActivityIndicator
                        animating={this.state.showProgress}
                        size="large"
						color="darkblue"
                        style={styles.loader}
                    />

                    <Text>{this.state.bugANDROID}</Text>
                </View>
                </KeyboardAvoidingView>
            </ScrollView>
        )
    }

    onLoginPressed() {
        this.props.onLogin();
    }
}*/

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        padding: 10,
        alignItems: 'center',
        flex: 1,
        marginTop: 50,
    },
    logo: {
        width: 150,
        height: 150,
        paddingTop: 140,
        borderRadius: 20,
        marginBottom: 10,
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: -10,
    },
    heading: {
        fontSize: 30,
        marginTop: 10,
        color: 'navy',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        height: 50,
        //backgroundColor: '#48BBEC',
        backgroundColor: 'darkblue',
        borderColor: '#48BBEC',
        alignSelf: 'stretch',
        marginTop: 20,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    loader: {
        marginTop: 40,
    },
    error: {
        color: 'red',
        paddingTop: 10,
        textAlign: 'center',
    },
});

export default Login;
