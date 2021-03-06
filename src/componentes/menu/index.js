import * as React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';

import NovoAmbiente from '../../paginas/novoAmbiente'
import Ambientes from '../../paginas/ambientes'

import Icone from 'react-native-vector-icons/FontAwesome';

Icone.loadFont();

const Navegador = createDrawerNavigator();

export default function Menu(){
    return(
        <Navegador.Navigator 
            initialRouteName = "Ambientes"
            drawerStyle={estilos.navegadorEstilo}
            screenOptions={{headerShown: false}}
            drawerContent={props => <NavegadorConteudoCustomizado {...props} />}
        >
            <Navegador.Screen 
                name = "Ambientes" 
                component={Ambientes}
                options={{drawerIcon: config => <Icone name="glass" size={25} color="#000000"/>, drawerLabelStyle: {color: '#000000', fontSize: 18}}}
            />
            <Navegador.Screen 
                name = "Novo Ambiente" 
                component={NovoAmbiente} 
                options={{drawerIcon: config => <Icone name="plus" size={30} color="#000000"/>, drawerLabelStyle: {color: '#000000', fontSize: 18}} }
            />
        </Navegador.Navigator>
    )
}

function NavegadorConteudoCustomizado(props){
    return(
        <DrawerContentScrollView {...props}>
            <NavegadorPerfil {...props}/>
            <DrawerItemList {...props} />
            <DrawerItem label="Sair" onPress={()=> {props.navigation.popToTop()}} labelStyle={{color:'#000000', fontSize: 18}} icon={() => <Icone name="sign-out" size={30} color="#000000"/> } />
        </DrawerContentScrollView>
    )
}

function NavegadorPerfil(props){
    return(
        <TouchableOpacity onPress={()=>(props.navigation.navigate("Ambientes"))}>
            <View style={estilos.conteiner}>
                <View style={estilos.imagemConteiner}>
                    <Icone style={estilos.imagemEstilo} name="user-secret" size={120} color="#000000"/>
                </View>
                <View style={estilos.conteinerTexto}> 
                    <Text style={estilos.navegadorTexto}>Administrador Eventive</Text>
                    <Text style={estilos.navegadorTextoPequeno}>Administrador</Text>    
                </View>
            </View>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    imagemConteiner: {
        marginTop: 15,
        borderWidth: 1,
        borderColor: '#DDD',
        elevation: 6
    },
    conteinerTexto: {
        alignItems: 'center'
    },
    navegadorTextoPequeno: {
        color: '#000000',
        fontSize: 12
    },
    navegadorTexto: {
        color: '#000000',
        fontSize: 18
    },
    imagemEstilo: {
        width: 100,
        height: 100
    },
    navegadorEstilo: {
        width: 250,
        backgroundColor: '#d694b8'
    },
    conteiner: {
        alignItems: 'center',
        height: 165
    }
})
