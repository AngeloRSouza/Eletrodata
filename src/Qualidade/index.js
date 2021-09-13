import React, { Component } from "react";
import {View,Text,} from 'react-native'

export default class Qualidade extends Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#0093dd',alignItems:'center',justifyContent:'center',}}>
                <Text style={{fontSize:30,textAlign:'center',color:'#1c1545',}}>Assegurar que o sistema de qualidade seja mantido no Grupo dentro de uma única filosofia :

Respeito a si mesmo, ao semelhante e ao meio ambiente.</Text>
            </View>
        )
    }
}