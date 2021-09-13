import React, { Component } from "react";
import {View,Text,} from 'react-native'

export default class Empresa extends Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#0093dd',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:30,color:'White'}}>Empresa</Text>
            </View>
        )
    }
}