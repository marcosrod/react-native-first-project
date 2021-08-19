import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

export default function headerDrawNav({title, navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button} onPress={()=>{navigation.openDrawer()}}>
                    <Icon name="bars" size={28} color="#000000" />
                </TouchableOpacity>
            </View>
            <View style={styles.containerTitle}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    button: {
        backgroundColor: '#F8F9FA'
    },
    text: {
        color: '#000000',
        padding: 5,
        fontSize: 23, 
    },
    containerTitle: {
        backgroundColor: '#F8F9FA',
        width: '100%'
    },
    containerButton: {
        justifyContent: 'center',
        backgroundColor: '#F8F9FA',
        paddingHorizontal: 10
    }
})