import * as React from "react"
import { TextInput, View, Image, Text } from "react-native"
import { NavigationInjectedProps } from "react-navigation";
import LinearGradient from 'react-native-linear-gradient';
import { styles } from "./style";
import { Button } from "../button/button";




export interface LoginProps {
    name: String;
}
export interface LoginState {
    spinner: boolean;
}
export class Login extends React.Component<LoginProps, LoginState> {
    constructor(props) {
        super(props)
        this.state = {
            spinner: false
        }
    }

    componentDidMount() { }

    render() {
        return (
            <View style={[styles.container, styles.shadow]}>
                <LinearGradient colors={['#2974FA', '#38ABFD', '#43D4FF']} style={styles.container}>
                    <Image
                        style={[styles.imageStyle]}
                        source={{ uri: 'https://media.giphy.com/media/eCCrSLD02Eyys/giphy.gif' }}
                    />
                    <TextInput
                        style={[styles.textInput, styles.marginItem]}
                        placeholder={"NIM"} />
                    <TextInput
                        style={[styles.textInput]}
                        secureTextEntry={true}
                        placeholder={"Password"} />
                    <Text style={[styles.forgotPassword]}>Forgot Password?</Text>
                    <Button style={[styles.loginButton, styles.marginItem]}>
                        <Text style={[styles.text]}>
                            LOGIN
                        </Text>
                    </Button>
                    <Text style={[styles.text]}>Create Account</Text>
                </LinearGradient>
            </View>
        )
    }
}