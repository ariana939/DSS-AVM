import { Text, StyleSheet } from 'react-native';

export default function TituloDePagina() {
  return <Text style={styles.titulo}>🛒 Lista de Compras</Text>;
}

const styles = StyleSheet.create({
  titulo: { fontSize: 24, fontWeight: 'bold', marginTop: 12 },
});