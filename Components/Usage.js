

import React, { Component } from "react";
import { View, Text, ScrollView} from "react-native";
import { Card } from "react-native-elements";
import { connect } from 'react-redux';
import { baseUrl } from "../shared/baseUrl";
import  Loading  from "./LoadingComponent";

const mapStateToProps = state => {
    return{
        prompts: state.prompts,
        user: state.prompts,
    };
}

// static navigationOptions = {
//     title: 'Login',
//     tabBarIcon: ({tintColor}) => (
//         <Icon 
//             name="sign-in"
//             type="font-awesome"
//             iconStyle={{color: tintColor}}
//         />
//     )
// }

function RenderItem({item, isLoading, errMess}){
    if(isLoading){
        return <Loading/>; 
    }
    if (errMess){
        return(
            <View>
                <Text>{errMess}</Text>
            </View>
        );
    }
    
    if (item){
        return(
            <Card
            featuredTitle={item.title} //prompt name
            >
                
                <Text style={{margin:10}}>
                    {item.description //prompt instructions
                    } 
                </Text>
            </Card>
        );
    }
    return <View />
}

class Home extends Component {
    render(){
        return(
            <ScrollView style={{transform: [{scale: this.state.scaleValue}]}}>
                <Text>Welcome {this.props.user.name}</Text>
                <RenderItem
                    item={this.props.prompts.prompts.filter(prompt => prompt.featured)[0]}
                    isLoading={this.props.prompts.isLoading}
                    errMess={this.props.prompts.errMess}
                />    
            </ScrollView>
        );
    }

}

export default connect(mapStateToProps)(Home);