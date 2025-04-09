//importa as tags 
import React from 'react';
import { Text, StyleSheet } from 'react-native';

//tag que exibe a classificação do imc com base na classificação calculada anteriormente
const ResultClassif = ({ classificacao }) => {
    return (
        <Text style={styles.result}>Sua classificação de IMC é: {classificacao}</Text>
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

export default ResultClassif;
