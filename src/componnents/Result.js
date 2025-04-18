//importa as tags 
import React from 'react';
import { Text, StyleSheet } from 'react-native';

//exibe o imc calculado anteriormente na tela
const Result = ({ imc }) => {
    return (
        <Text style={styles.result}>Seu IMC é: {imc}</Text>
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

export default Result;
