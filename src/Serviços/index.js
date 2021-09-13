import React, { Component } from "react";
import {View,Text,StyleSheet,TouchableHighlight} from 'react-native'

export default class Serviços extends Component{
    render(){
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#0093dd'}}> 
               
              
                <View style={{flex:2, flexDirection:'column',justifyContent:'space-between',marginBottom:80
            }}>
                
                <View style={{alignItems:'center',justifyContent:'center'}}>
                </View>
                <View sytle={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <TouchableHighlight style={styles.fundo}
                     onPress={()=>{}}>
                         <Text style={styles.TxtB}>Eletricidade</Text>
                    </TouchableHighlight>
                </View>

                <View sytle={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <TouchableHighlight style={styles.fundo}
                     onPress={()=>{}}>
                       <Text style={styles.TxtB}>Hidráulica</Text>
                    </TouchableHighlight>
                </View>

                <View sytle={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <TouchableHighlight style={styles.fundo}
                     onPress={()=>{}}>
                       <Text style={styles.TxtB}>Mecânica</Text>
                    </TouchableHighlight>
                </View>

                <View sytle={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <TouchableHighlight style={styles.fundo}
                    onPress={()=>{}}>
                        <Text style={styles.TxtB}>Produtos</Text>
                    </TouchableHighlight>
                </View>
                <View sytle={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <TouchableHighlight style={styles.fundo}
                     onPress={()=>{}}>
                       <Text style={styles.TxtB}>Medições</Text>
                    </TouchableHighlight>
                </View>
                <View sytle={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <TouchableHighlight style={styles.fundo}
                     onPress={()=>{}}>
                       <Text style={styles.TxtB}>Obras Civis</Text>
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

    

