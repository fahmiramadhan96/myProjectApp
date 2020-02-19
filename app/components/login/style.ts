
import { StyleSheet, Dimensions } from "react-native";
import { color } from "../../theme/color"

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        height: height * 0.5,
        width: width * 0.8,
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
        width: width * 0.6,
        height: 50,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#fff",
        paddingHorizontal: 10
    },
    imageStyle: {
        width: 80, 
        height: 80,
        marginBottom: 20
    },
    marginItem: {
        marginBottom: 10,
    }

});
