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


import { bgColor_active, bgColor, navigatorStyles } from '../shared/styles';
import { fetchGallery, fetchUser, fetchPrompts, fetchParentalControls } from '../Redux/ActionCreators'
import Home from './Home';
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
        // style={navigatorStyles} // added this.
        // headerStyle: { backgroundColor: primaryColor},
        // headerTintColor: "#fff",
        // headerTitleStyle: { color: "#fff" },
      },
    }
  );

  const GalleryNavigator = createStackNavigator(
    {
      Gallery: { screen: Gallery },
    },
    {
      defaultNavigationOptions: {
        // headerStyle: { backgroundColor: "#5637DD" },
        // headerTintColor: "#fff",
        // headerTitleStyle: { color: "#fff" },
      },
    }
  );

  const ChallengesNavigator = createStackNavigator(
    {
      Challenges: { screen: Challenges },
    },
    {
      defaultNavigationOptions: {
        // headerStyle: { backgroundColor: "#5637DD" },
        // headerTintColor: "#fff",
        // headerTitleStyle: { color: "#fff" },
      },
    }
  );

  const CameraNavigator = createStackNavigator(
    {
      Camera: { screen: Camera },
    },
    {
      defaultNavigationOptions: {
        // headerStyle: { backgroundColor: "#5637DD" },
        // headerTintColor: "#fff",
        // headerTitleStyle: { color: "#fff" },
      },
    }
  );

  const SettingsNavigator = createStackNavigator(
    {
      Settings: { screen: Settings }, //is this parentalControls?
      Usage: {screen: Usage},
      Account: {screen: Account},
      Contacts: {screen: Contacts}
    },
    {
      defaultNavigationOptions: {
        // style={navigatorStyles}
      },
    }
  );

const TabNavigator = createLeftTabNavigator(
    {
      Home: Home,
      Gallery: Gallery,
      Camera: Camera,
      Challenges: Challenges,
    },
    {
      tabBarOptions: {
        activeBackgroundColor: {bgColor_active},
        inactiveBackgroundColor: {bgColor},
        activeTintColor: '#fff',
        inactiveTintColor: '#808080',
        labelStyle: {fontSize: 16}
    }

    }
);




// the drawer navigator is gonna have some user settings.
const MainNavigator = createDrawerNavigator(
    {
      Settings: { 
        screen: SettingsNavigator 
        // can add some icon biz
      }, // have a parent link on this page.
      
      
    },
    // this optional second arguemnet sets styles.
    {
      initialRouteName: 'Home',
      drawerBackgroundColor: {bgColor}, 
      // contentComponent: CustomDrawerContentComponent
    }
  );

const AppNavigator = createAppContainer(MainNavigator); // creates app containe, outer most wrapper for navigation. right?

class Main extends Component{
  
  componentDidMount(){
    this.props.fetchGallery();
    this.props.fetchParentalControls();
    this.props.fetchPrompts();
    this.props.fetchUser();

    fetchGallery,
    fetchParentalControls,
    fetchPrompts, 
    fetchUser
  }
  
  render(){
    return(
      <View
          style={{
              flex: 1, //read up on this style choice
              paddingTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight, //this is responding to the default bits of androids screen, but read up on documentation.
          }}>
          <AppNavigator />
      </View>
    );
  }
}

export default connect(null,mapDispatchtoProps)(Main);

