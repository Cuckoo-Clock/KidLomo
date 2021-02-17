import React from "react";
import {ActivityIndicator, Text, View } from 'react-native'
import { loadingStyles, primaryColor } from "../shared/styles";

export default function Loading(){
    return(
        <View style={loadingStyles.loadingView}>
            <ActivityIndicator size='large' color={primaryColor} />
            <Text style={loadingStyles.loadingText}>Loading . . .</Text>
        </View>
    );
}