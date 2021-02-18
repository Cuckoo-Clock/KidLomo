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

export const generalStyles = StyleSheet.create({
    view:{
        alignItems: 'flex-start';
    }
})

export const primaryColor = 'hsl(180,40%,95%)'
export const bgColor = 'hsl(320,40%,30%)'