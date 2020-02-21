
import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        height: height * 0.5,
        width: width * 0.9,
        alignContent: "center",
        borderRadius: 10,
        alignItems: "center",
        paddingVertical: 20,
    },
    shadow: {
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
    },
    textInput: {
        width: width * 0.7,
        height: 50,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#fff",
        paddingHorizontal: 10,
        color: "#fff",
        fontFamily: 'Iowan Old Style',
        fontWeight: "bold",
    },
    imageStyle: {
        width: 100,
        height: 60,
        marginBottom: 20,
        borderRadius: 10
    },
    marginItem: {
        marginBottom: 10,
    },
    loginButton: {
        width: width * 0.7,
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 18,
        backgroundColor: 'rgba(52, 52, 52, 0.3)',
        paddingVertical: 12,
        marginTop: 15
    },
    text: {
        fontSize: 17,
        fontFamily: 'Iowan Old Style',
        fontWeight: "bold",
        color: "#fff"
    },
    forgotPassword: {
        fontSize: 12,
        marginTop: 7,
        textAlign: "right",
        fontFamily: 'Iowan Old Style',
        fontWeight: "bold",
        color: "#fff",
        width: width * 0.7,
    }

});
