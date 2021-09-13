
import { useNavigation } from "@react-navigation/core";
import React, { Component } from "react";
import {View,Text, TouchableHighlight,StyleSheet,Image} from 'react-native'
import Empresa from '../Empresa/'
import Qualidade from '../Qualidade/'
import Serviços from '../Serviços/'
import Contato from '../Contato/'
import Logo from '../image/logo.png'



export default class Home extends Component{
    render(){
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#0093dd'}}> 
               
               <View style={{flex:1,alignItems:'flex-start',justifyContent:'flex-start',marginVertical:30,}}>
                    <Image style={{borderColor:'#edf1f4',borderWidth:1,margin:15,resizeMode:'stretch'}}
                    source={require('../image/logo.png')} 
                    />
                </View>
        
                <View style={{flex:2, flexDirection:'column',justifyContent:'space-between',marginBottom:80
            }}>
                
                <View style={{alignItems:'center',justifyContent:'center'}}>
                </View>
                <View sytle={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <TouchableHighlight style={styles.fundo}
                     onPress={()=>this.props.navigation.navigate('Empresa')} >
                         <Text style={styles.TxtB}>Empresa</Text>
                    </TouchableHighlight>
                </View>

                <View sytle={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <TouchableHighlight style={styles.fundo}
                     onPress={()=>this.props.navigation.navigate('Serviços') }>
                       <Text style={styles.TxtB}>Serviços</Text>
                    </TouchableHighlight>
                </View>

                <View sytle={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <TouchableHighlight style={styles.fundo}
                     onPress={()=>this.props.navigation.navigate('Qualidade') }>
                       <Text style={styles.TxtB}>Qualidade</Text>
                    </TouchableHighlight>
                </View>

                <View sytle={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <TouchableHighlight style={styles.fundo}
                     onPress={()=>this.props.navigation.navigate('Contato') }>
                        <Text style={styles.TxtB}>Contato</Text>
                    </TouchableHighlight>
                </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    TxtB:{
        alignItems:'center',
        justifyContent:'center',
        fontSize:20,
        color:'#1c1545',
        padding:6,
        marginVertical:8,
        marginHorizontal:16
    },

    fundo:{
        backgroundColor:'#edf1f4',
        padding:8,
        alignItems:'center',
        justifyContent:'center',
        marginVertical: 10,
        borderRadius:40
        
    }
    
    })

    

