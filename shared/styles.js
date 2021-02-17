import { StyleSheet } from "react-native";

export const loadingStyles = StyleSheet.create({
    loadingView: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    loadingText: {
        color: primaryColor,
        fontSize: 26,
        fontWeight: 'bold'
    }
});

export const primaryColor = 'hsl(180,90%,40%)'