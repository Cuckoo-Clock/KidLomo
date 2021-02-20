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

// basic buiding blocks of view elements

export const navigatorStyles= StyleSheet.create({
    headerStyle: { backgroundColor: primaryColor},
    // headerTintColor: "#fff",
    headerTitleStyle: { color: "#fff" },
})

export const generalStyles = StyleSheet.create({
    view:{
        alignItems: 'flex-start'
    }
})

export const primaryColor = 'hsl(180,40%,95%)'
export const bgColor = 'hsl(320,40%,30%)'
export const bgColor_active = 'hsl(320,40%,40%)'