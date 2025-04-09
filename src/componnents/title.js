//importa as tags que vão ser utilizadas 
import { Text, StyleSheet } from 'react-native';

//styles.title = "id" que vai ser utilizado no css
const Title = () => {
    return (
        <Text style={styles.title}>Calculadora de IMC</Text>
    );
};

//css da tag text + id title armazenado em uma variável 
const styles = StyleSheet.create({
    text: {
      color: '#BB86FC',
      fontSize: 28,
      fontWeight: 'bold',
      padding: 10,
      textAlign: 'center',
    },
  });

//exporta a função title
export default Title;
