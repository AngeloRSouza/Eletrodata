import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import{createNativeStackNavigator} from '@react-navigation/native-stack'
import { staticBlock } from "@babel/types";

import Home from './src/Home/'
import Contato from "./src/Contato";
import Empresa from "./src/Empresa";
import Serviços from "./src/Serviços";
import Qualidade from "./src/Qualidade";


const Stack =createNativeStackNavigator()

export default function App(){
  return(
    
    <NavigationContainer>
      <Stack.Navigator headerMode='none' initialRouteName="Home" >
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Empresa' component={Empresa}/>
        <Stack.Screen name='Serviços' component={Serviços}/>
        <Stack.Screen name='Qualidade' component={Qualidade}/>
        <Stack.Screen name='Contato' component={Contato}/>
      </Stack.Navigator>
      
      
      
      </NavigationContainer>

   
  )
}

