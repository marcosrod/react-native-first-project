import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const LinhaFormulario = (props) => {
    const { children } = props;

    return (
        <View style={styles.container}>
            {children}
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        padding: 5,
        marginTop: 5,
        marginBottom: 5,
        elevation: 1,
        backgroundColor: '#212529',
        
    }

})

export default LinhaFormulario;