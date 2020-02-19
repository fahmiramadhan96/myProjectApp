import * as React from "react"
import { ActivityIndicator, ImageStyle, Platform, Text, View, ViewStyle, SafeAreaView, Alert } from "react-native"
import { NavigationInjectedProps } from "react-navigation"
import { Login, Button } from "../../components";
import firebaseService from "../../services/config/firebaseServices";
import Spinner from 'react-native-loading-spinner-overlay';
import LinearGradient from 'react-native-linear-gradient';




export interface LoginScreenProps extends NavigationInjectedProps<{}> { }
export interface LoginScreenState {
    spinner: boolean;
}
export class LoginScreen extends React.Component<LoginScreenProps, LoginScreenState> {
    constructor(props) {
        super(props)
        this.state = {
            spinner: false
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                spinner: !this.state.spinner
            });
        }, 3000);
    }
    onButtonPress = () => {
        firebaseService.auth()
            .signInWithEmailAndPassword("bens@mailinator.com", "Welcome@123")
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                Alert.alert("Error");
            });
    }

    render() {
        return (
            <SafeAreaView>
                {/* <LinearGradient colors={['#2974FA', '#38ABFD', '#43D4FF']} style={{ flex: 1 }}>
                </LinearGradient> */}
                <Text style={{
                    fontSize: 18,
                    fontFamily: 'Gill Sans',
                    textAlign: 'center',
                    margin: 10,
                    color: '#000',
                    backgroundColor: 'transparent',
                }}>
                    Sign in with Facebook
                    </Text>
                {/* <Spinner
                        visible={this.state.spinner}
                        textContent={'Loading...'}
                    />
                    // <Button
                    //     onPress={this.onButtonPress}>
                    //     <Text style={{ color: "#0099" }}>
                    //         PRESS ME PLEASE!!</Text>
                    // </Button> */}
                <View style={{ flex: 1 }} />
            </SafeAreaView>
        )
    }
}