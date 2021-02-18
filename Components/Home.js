import React, { Component }  from 'react';
import { 
  View, 
  Platform, 
  Text,
  ScrollView,
  Image,
  Alert,
  ToastAndroid // this is like alert?
} from "react-native"; //read up on platform considerations
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { connect } from 'react-redux';
// import { Icon } from 'react-native-elements' //don't have this yet?

import { generalStyles } from '../shared/styles';
import { fetchGallery, fetchUser, fetchPrompts, fetchParentalControls } from '../Redux/ActionCreators'
// tab navigator
// How do I do authentication?

//distribute the content from the store.
const mapDispatchtoProps = {
  fetchGallery,
  fetchParentalControls,
  fetchPrompts, 
  fetchUser
}


const HomeNavigator = createStackNavigator(
    {
      Home: { screen: Home },
    },
    {
      defaultNavigationOptions: {
        headerStyle: { backgroundColor: "#5637DD" },
        headerTintColor: "#fff",
        headerTitleStyle: { color: "#fff" },
      },
    }
  );


const MainNavigator = createDrawerNavigator(
    {
      Home: { screen: HomeNavigator }, // have a parent link on this page.
      Camera: { screen: CameraNavigator }, // Stickers are navigatable
      Gallery: { screen: GalleryNavigator }, // links to family members and sharing
      Challenges: { screen: ChallengeNavigator }, // cards of prompts
    },
    // this optional second arguemnet sets styles.
    {
      drawerBackgroundColor: "hsl(320,60%,40%)", //does it accept hsl?
    }
  );

const AppNavigator = createAppContainer(MainNavigator); // creates app containe, outer most wrapper for navigation. right?

export default class Home extends Component{
    render(){
        return(
            <View
                style={{
                    flex= 1, //read up on this style choice
                    Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight, //this is responding to the default bits of androids screen, but read up on documentation.
                }}
            >
                <AppNavigator />
            </View>
        );
    }
}

