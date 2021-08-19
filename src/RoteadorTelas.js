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

import Login from '../src/paginas/login';
import Ambientes from '../src/paginas/ambientes';
import Menu from '../src/componentes/menu';
import DetalhesAmbiente from './paginas/detalhesAmbiente';
import { ScreenStackHeaderCenterView } from 'react-native-screens';

const Stack = createStackNavigator()


export default function RoteadorTelas(){
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Menu">
          <Stack.Screen name="Login" component={Login} options={ {headerShown: false} } />
          <Stack.Screen name="Menu" component={Menu} options={ {headerShown: false} } />
          <Stack.Screen 
            name="Detalhes do Ambiente"
            component={DetalhesAmbiente}    
            //options={({ route }) => ({ title: route.params.ambiente.nome })}       
        />
        </Stack.Navigator>
      </NavigationContainer>
   </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

