import * as React from "react"
import { TextInput, View, Image, Text } from "react-native"
import { NavigationInjectedProps } from "react-navigation";
import LinearGradient from 'react-native-linear-gradient';
import { styles } from "./style";
import { Button } from "../button/button";




export interface LoginProps {
    createAccountClick: any;
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

    createAccountClick = () => {
        this.props.createAccountClick();
    }

    render() {
        return (
            <View style={[styles.container, styles.shadow]}>
                <LinearGradient colors={['#2974FA', '#38ABFD', '#43D4FF']} style={styles.container}>
                    <Image
                        style={[styles.imageStyle]}
                        source={{ uri: 'https://i.pinimg.com/originals/f8/51/6b/f8516b9c0ee5497018254b2750042240.gif' }}
                    />
                    <TextInput
                        style={[styles.textInput, styles.marginItem]}
                        placeholder={"NIM"} />
                    <TextInput
                        style={[styles.textInput]}
                        secureTextEntry={true}
                        placeholder={"Password"} />
                    <Text style={[styles.forgotPassword]}>Forgot Password?</Text>
                    <Button
                        style={[styles.loginButton, styles.marginItem]}
                        onPress={() => { this.createAccountClick() }}>
                        <Text style={[styles.text]}>
                            LOGIN
                        </Text>
                    </Button>
                    <Text
                        style={[styles.text]}
                        onPress={() => this.createAccountClick}>Create Account</Text>
                </LinearGradient>
            </View>
        )
    }
}