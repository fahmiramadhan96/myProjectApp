import * as React from "react"
import { TextInput, View, Image } from "react-native"
import { NavigationInjectedProps } from "react-navigation";
import LinearGradient from 'react-native-linear-gradient';
import { styles } from "./style";




export interface CreateAcoountProps {
    name: String;
}
export interface CreateAcoountState {
    spinner: boolean;
}
export class CreateAcoount extends React.Component<CreateAcoountProps, CreateAcoountState> {
    constructor(props) {
        super(props)
        this.state = {
            spinner: false
        }
    }

    componentDidMount() { }

    render() {
        return (
            <TextInput
                style={[styles.textInput, styles.marginItem]} />
        )
    }
}