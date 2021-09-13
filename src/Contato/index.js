import React, { Component } from "react";
import {View,Text,} from 'react-native'
import Formulario from "./components/formulario";

export default class Contato extends Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#0093dd',alignItems:'center',justifyContent:'center'}}>
                <Formulario/>
            </View>
        )
    }
}