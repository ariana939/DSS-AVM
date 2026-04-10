import { Text, StyleSheet } from 'react-native';

export default function listaDeComprasVacia(){
    <Text style={styles.vacia}>Sin productos. ¡Agregá el primero! 😊</Text>
}

const styles = StyleSheet.create({
  vacia: { textAlign: 'center', color: '#777', marginTop: 24 }
});