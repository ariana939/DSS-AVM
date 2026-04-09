import { Pressable, Text, StyleSheet } from 'react-native';
import type { productoParaLista } from '../../tipos/tipos';

type Props = {
  item: productoParaLista;
  onPress: () => void;
  onLongPress: () => void;
};

export const TarjetaParaProductoDeCompra = ({ item, onPress, onLongPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.row}
    >
      <Text style={[styles.rowText, item.finalizado && styles.done]}>
        {item.nombre}
      </Text>
      <Text style={[styles.pill, item.finalizado ? styles.pillDone : styles.pillTodo]}>
        {item.finalizado ? '✔' : '•'}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowText: { fontSize: 16 },
  done: { textDecorationLine: 'line-through', color: '#999' },
  pill: {
    minWidth: 28,
    height: 28,
    borderRadius: 14,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: '700',
  },
  pillTodo: { backgroundColor: '#eee', color: '#666' },
  pillDone: { backgroundColor: '#2ecc71', color: '#fff' },
});