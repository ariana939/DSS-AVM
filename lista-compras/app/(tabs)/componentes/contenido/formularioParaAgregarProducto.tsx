import { TextInput, Pressable, View, StyleSheet } from 'react-native';

type Props = {
  nuevoProducto: string;
  cambiaTexto: (text: string) => void;
  onSubmitEditing: () => void;
};

export default function formularioParaAgregarProducto({nuevoProducto,cambiaTexto,onSubmitEditing,}: Props) {
  return (
    <View style={styles.filaInput}>
      <TextInput
        value={nuevoProducto}
        onChangeText={cambiaTexto}
        placeholder="Agregar producto (ej: Leche)"
        style={styles.input}
        returnKeyType="done"
        onSubmitEditing={onSubmitEditing}
      />
      <Pressable style={styles.botonAgrega} onPress={onSubmitEditing}>
        <Text style={styles.textBoton}>Agregar</Text>
      </Pressable>
    </View>  
  );
}

const styles = StyleSheet.create({
  filaInput: { flexDirection: 'row', gap: 8 },
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