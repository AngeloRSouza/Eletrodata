import React, { Component } from "react";
import {View,Text, TextInput, StyleSheet, TouchableHighlight,} from 'react-native'

export default class Formulario extends Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#0093dd', justifyContent:'center',width:300}}> 
                <View>
                <TextInput style={styles.input}
                placeholder="Nome"
                />
                </View>
                <View>
                <TextInput style={styles.input}
                placeholder="Empresa"
                />
                </View>
                <View>
                <TextInput style={styles.input}
                placeholder="Telefone"
                />
                </View>
                <View>
                <TextInput style={styles.input}
                placeholder="Email"
                />
                </View>
                 <View>
                <TextInput style={styles.input}
                placeholder="Mensagem"
                />
                </View>

                <View>
                  
                </View>

                

                </View>
        )
    }
}

 const styles=StyleSheet.create({
    input:{
        fontSize:15,
        color: 'black',
        marginBottom:20,
        padding:10,
        textAlign:'center',
        borderWidth:1,
        backgroundColor:'white',
        borderRadius:40
        

    
        
    }
})