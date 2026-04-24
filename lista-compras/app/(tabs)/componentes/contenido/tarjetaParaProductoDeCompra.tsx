import { Pressable, Text, View, StyleSheet } from 'react-native';
import type { productoParaLista } from '../../tipos/tipos';

export default function TarjetaParaProductoDeCompra ({
  producto,
  presionado,
  presionadoLargo
}: {
  producto: productoParaLista;
  presionado: () => void;
  presionadoLargo: () => void;
}) {
  return (
    <Pressable onPress={presionado} onLongPress={presionadoLargo} style={styles.fila}>
      <Text style={[styles.textoFila, producto.comprado && styles.completado]}>
        {producto.nombre}
      </Text>
      <Text style={[styles.pill, producto.comprado ? styles.cajitaTildada : styles.cajitaConPuntito]}>
        {producto.comprado ? '✔' : '•'}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  fila: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textoFila: { fontSize: 16 },
  completado: { textDecorationLine: 'line-through', color: '#999' },
  pill: {
    minWidth: 28,
    height: 28,
    borderRadius: 14,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: '700',
  },
  cajitaConPuntito: { backgroundColor: '#eee', color: '#666' },
  cajitaTildada: { backgroundColor: '#2ecc71', color: '#fff' },
});