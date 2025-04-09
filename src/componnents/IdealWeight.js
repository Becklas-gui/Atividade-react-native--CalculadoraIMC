//importa as tags
import { useState } from "react";
import { View, Button, StyleSheet } from 'react-native';
import { IWClassif } from "./ClassifAltura";

//tag que calcula o peso ideal com base na altura
const AlturaIdeal = ({altmetros}) => {
    const altura = altmetros;
    const [pesmin,setpesmin] = useState('');
    const [pesmax, setpesmax] = useState('');
    const altmet = altura*altura;

    const calculapeso = () => {
        if (altura) {
            const pesomin = 18.5*altmet;
            const pesomax = 24.9*altmet; 
            setpesmin(pesomin);
            setpesmax(pesomax);
        }
    };

    return (
        <View style={estilo.idealStyle}>
            <Button title="Peso ideal para sua altura" onPress={calculapeso}/>
            {pesmin && pesmax && <IWClassif pesmin={pesmin} pesmax={pesmax}/>}
        </View>
    );
    
};

//css 
const estilo = StyleSheet.create({
    idealStyle: {
        backgroundColor: "#DC143C",
        borderRadius: 10,
    }
});

export default AlturaIdeal;
