import * as React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';

import MinhasReservas from '../../paginas/morador/minhasReservas'
import Ambientes from '../../paginas/morador/ambientes'

import Icone from 'react-native-vector-icons/FontAwesome';

Icone.loadFont();

const Navegador = createDrawerNavigator();

export default function MenuMorador(){
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
                name = "Minhas Reservas" 
                component={MinhasReservas} 
                options={{drawerIcon: config => <Icone name="sticky-note" size={30} color="#000000"/>, drawerLabelStyle: {color: '#000000', fontSize: 18}} }
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
                    <Image source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyFsAc4KRtdO8T9ERQoGnrSgvuEp-rW9YQwA&usqp=CAU"}} style={estilos.imagemEstilo} />
                </View>
                <View style={estilos.conteinerTexto}> 
                    <Text style={estilos.navegadorTexto}>Albedo-san</Text>
                    <Text style={estilos.navegadorTextoPequeno}>Morador</Text>    
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
