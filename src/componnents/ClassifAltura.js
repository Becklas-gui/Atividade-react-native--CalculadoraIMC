//importa as tags 
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



//exibir o peso ideal na tela
const IWClassif = ({ pesmin,pesmax }) => {
    const peso1 = pesmin.toFixed(2);
    const peso2 = pesmax.toFixed(2);


    //retorna mensagem com seu peso ideal
    return (
        <View>
            <Text style={styles.result}>Seu peso ideal para segundo sua altura seria entre {peso1}kg e {peso2}kg</Text>
        </View>
    );
};

//css 
const styles = StyleSheet.create({
    result: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 24,
        textAlign: 'center',
        color: '#333',
    },
});



//exporta a tag para ser usada em outro arquivo
export {
    IWClassif
};  
