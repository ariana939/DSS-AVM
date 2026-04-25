import { TextInput, Pressable, View, StyleSheet, Text } from 'react-native';

export default function FormularioParaAgregarProducto({
  nuevoProducto,
  cambiaTexto,
  alEnviar,
}: {
  nuevoProducto: string;
  cambiaTexto: (text: string) => void;
  alEnviar: () => void;
}) {
  return (
    <View style={styles.filaInput}>
      <TextInput
        value={nuevoProducto}
        onChangeText={cambiaTexto}
        placeholder="Agregar producto (ej: Leche)"
        placeholderTextColor="#9a9595"
        style={styles.input}
        returnKeyType="done"
        onSubmitEditing={alEnviar}
      />
      <Pressable style={styles.botonAgrega} onPress={alEnviar}>
        <Text style={styles.textBoton}>Agregar</Text>
      </Pressable>
    </View>  
  );
}
const styles = StyleSheet.create({
  filaInput: { flexDirection: 'row', gap: 8, marginTop: 10 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
  },
  botonAgrega: {
    backgroundColor: '#1e90ff',
    paddingHorizontal: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBoton: { color: '#fff', fontWeight: '600' },
});