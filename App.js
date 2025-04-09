import { StyleSheet, View } from "react-native";
import Title from "./src/componnents/title";
import { FormIMC } from "./src/componnents/FormIMC";

export default function App(){
  return (
    <View style={styles.container}>
      <Title />
      <FormIMC />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
});