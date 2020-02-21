import * as React from "react"
import { TextInput, View, Image, Text } from "react-native"
import { NavigationInjectedProps } from "react-navigation";
import LinearGradient from 'react-native-linear-gradient';
import { styles } from "./style";
import { Button } from "../button/button";
import firebaseService from "../../services/config/firebaseServices";
import firebase from "firebase";
import 'firebase/firestore';




export interface CreateAccountProps { }
export interface CreateAccountState { }
export class CreateAccount extends React.Component<CreateAccountProps, CreateAccountState> {

    constructor(props) {
        super(props)
        this.state = {
            spinner: false
        }
    }

    componentDidMount() {

        const csvFilePath = '<path to csv file>';
        // this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
    }

    addRandomPost = () => {
        firebaseService.firestore().collection('Users').
            add({
                NIM: "317409120296",
                Nama: "Fahmi"
            }).then((response) => {
                console.log(response);
            })
    }

    render() {
        return (
            <View style={[styles.container, styles.shadow]}>
                <LinearGradient colors={['#2974FA', '#38ABFD', '#43D4FF']} style={styles.container}>
                    <TextInput
                        style={[styles.textInput, styles.marginItem]}
                        placeholder={"NIM"} />
                    <TextInput
                        style={[styles.textInput]}
                        placeholder={"Password"} />
                    <Button
                        onPress={() => this.addRandomPost()}
                        style={[styles.loginButton, styles.marginItem]}
                    >
                        <Text style={[styles.text]}>
                            SIGUP
                        </Text>
                    </Button>
                </LinearGradient>
            </View>
        )
    }
}