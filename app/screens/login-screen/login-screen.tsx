import * as React from "react"
import { ActivityIndicator, ImageStyle, Platform, Text, View, ViewStyle, SafeAreaView, Alert } from "react-native"
import { NavigationInjectedProps, StackActions, NavigationActions } from "react-navigation"
import { Screen, Login } from "../../components"
import firebaseService from "../../services/config/firebaseServices";
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

    }

    createAccountClick = () => {
        console.log(this.props.navigation.state.routeName);
        const resetAction = StackActions.reset({
            index: 0,
            key: undefined,
            actions: [NavigationActions.navigate({ routeName: 'createAccount' })],
        });
        this.props.navigation.dispatch(resetAction)
        // this.props.navigation.navigate('createAccount');
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
            <Screen
                style={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <Login
                    createAccountClick={() => this.createAccountClick()}>
                </Login>
            </Screen>
        )
    }
}