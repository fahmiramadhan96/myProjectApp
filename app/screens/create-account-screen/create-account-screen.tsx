import * as React from "react"
import { ActivityIndicator, ImageStyle, Platform, Text, View, ViewStyle, SafeAreaView, Alert } from "react-native"
import { NavigationInjectedProps } from "react-navigation"
import { Screen, Login } from "../../components";
import firebaseService from "../../services/config/firebaseServices";
import LinearGradient from 'react-native-linear-gradient';




export interface CreateAccountScreenProps extends NavigationInjectedProps<{}> { }
export interface CreateAccountScreenState {
    spinner: boolean;
}
export class CreateAccountScreen extends React.Component<CreateAccountScreenProps, CreateAccountScreenState> {
    constructor(props) {
        super(props)
        this.state = {
            spinner: false
        }
    }

    componentDidMount() {

    }
    render() {
        return (
            <Screen
                style={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
               <Text>CAS</Text>
            </Screen>
        )
    }
}