import React from 'react';
import type {Node} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../src/paginas/logar';
import Ambientes from '../src/paginas/ambientes';
import Menu from '../src/componentes/menu';
import DetalhesAmbiente from './paginas/detalhesAmbiente';
import ReservasAtivas from './paginas/reservasAtivas'
import AlterarAmbiente from './paginas/alterarAmbiente';
import NovaConta from './paginas/novaConta'
import MenuMorador from './componentes/menuMorador';
import ReservarAmbiente from './paginas/morador/reservarAmbiente'
import { HeaderBackground } from 'react-navigation-stack';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);


const Stack = createStackNavigator()


export default function RoteadorTelas(){
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={ {headerShown: false} } />
          <Stack.Screen name="Menu" component={Menu} options={ {headerShown: false} } />
          <Stack.Screen name="Detalhes do Ambiente" component={DetalhesAmbiente} options={ {headerStyle:{backgroundColor: '#212529'}, headerTintColor: 'white', headerTitleAlign: 'center'}}/>
          <Stack.Screen name="Reservas Ativas"component={ReservasAtivas} options={ {headerStyle:{backgroundColor: '#212529'}, headerTintColor: 'white', headerTitleAlign: 'center'}}/>
          <Stack.Screen name="Alterar Ambiente"component={AlterarAmbiente} options={ {headerStyle:{backgroundColor: '#212529'}, headerTintColor: 'white', headerTitleAlign: 'center'}}/>
          <Stack.Screen name="Nova Conta"component={NovaConta} options={ {headerShown: false} } />
          <Stack.Screen name="MenuMorador" component={MenuMorador} options={ {headerShown: false} } />
          <Stack.Screen name="Reservar Ambiente" component={ReservarAmbiente} options={ {headerStyle:{backgroundColor: '#212529'}, headerTintColor: 'white', headerTitleAlign: 'center'}}/>
        </Stack.Navigator>
      </NavigationContainer>
   </>
  );
};



