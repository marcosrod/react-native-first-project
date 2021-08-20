import * as React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';

import NovoAmbiente from '../../paginas/novoAmbiente'
import Ambientes from '../../paginas/ambientes'

import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

const Drawer = createDrawerNavigator();

export default function Menu(){
    return(
        <Drawer.Navigator 
            initialRouteName = "Ambientes"
            drawerStyle={styles.drawerStyle}
            screenOptions={{headerShown: false}}
            drawerContent={props => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen 
                name = "Ambientes" 
                component={Ambientes}
                options={{drawerIcon: config => <Icon name="glass" size={25} color="#000000"/>, drawerLabelStyle: {color: '#000000', fontSize: 18}}}
            />
            <Drawer.Screen 
                name = "Novo Ambiente" 
                component={NovoAmbiente} 
                options={{drawerIcon: config => <Icon name="plus" size={30} color="#000000"/>, drawerLabelStyle: {color: '#000000', fontSize: 18}} }
            />
        </Drawer.Navigator>
    )
}

function CustomDrawerContent(props){
    return(
        <DrawerContentScrollView {...props}>
            <ProfileDrawer {...props}/>
            <DrawerItemList {...props} />
            <DrawerItem label="Sair" onPress={()=> {props.navigation.popToTop()}} labelStyle={{color:'#000000', fontSize: 18}} icon={() => <Icon name="sign-out" size={30} color="#000000"/> } />
        </DrawerContentScrollView>
    )
}

function ProfileDrawer(props){
    return(
        <TouchableOpacity onPress={()=>(props.navigation.navigate("Ambientes"))}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={{uri: "https://randomuser.me/api/portraits/men/39.jpg"}} style={styles.imageStyle} />
                </View>
                <View style={styles.containerText}> 
                    <Text style={styles.drawerText}>AdminEventive</Text>
                    <Text style={styles.drawerTextSmall}>Administrador</Text>    
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        marginTop: 15,
        borderWidth: 1,
        borderColor: '#DDD',
        elevation: 6
    },
    containerText: {
        alignItems: 'center'
    },
    drawerTextSmall: {
        color: '#000000',
        fontSize: 12
    },
    drawerText: {
        color: '#000000',
        fontSize: 18
    },
    imageStyle: {
        width: 100,
        height: 100
    },
    drawerStyle: {
        width: 250,
        backgroundColor: '#d694b8'
    },
    container: {
        alignItems: 'center',
        height: 165
    }
})
