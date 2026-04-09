import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function FormularioParaProductoNuevo({ alGuardar }: { alGuardar: (t: string) => void }) {
  const [entrada, setEntrada] = useState('');

  const manejarEnvio = () => {
    const textoLimpio = entrada.trim();
    if (textoLimpio) {
      alGuardar(textoLimpio);
      setEntrada('');
    }
  };

  return (
    <View style={estilos.fila}>
      <TextInput 
        value={entrada} 
        onChangeText={setEntrada} 
        placeholder="¿Qué necesitas comprar?" 
        style={estilos.input}
      />
      <Pressable onPress={manejarEnvio} style={estilos.boton}>
        <Text style={estilos.textoBoton}>Agregar</Text>
      </Pressable>
    </View>
  );
}

const estilos = StyleSheet.create({
  fila: { flexDirection: 'row', gap: 8, marginTop: 10 },
  input: { flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10 },
  boton: { backgroundColor: '#007AFF', padding: 10, borderRadius: 8, justifyContent: 'center' },
  textoBoton: { color: 'white', fontWeight: 'bold' }
});