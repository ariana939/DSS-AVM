import { FlatList, View, StyleSheet } from 'react-native';
import  TarjetaParaProductoDeCompra  from '../contenido/tarjetaParaProductoDeCompra';
import  ListaDeComprasVacia from '../contenido/listaDeComprasVacia';
import { productoParaLista } from '../../tipos/tipos';


export default function ListaDeCompraLlena({
  producto,
  presionado,
  presionadoLargo,
}: {
  producto: productoParaLista[];
  presionado: (id: string) => void;
  presionadoLargo: (id: string) => void;
}) {

  return (
    <FlatList
      data={producto}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TarjetaParaProductoDeCompra
          producto={item}
          presionado={() => presionado(item.id)}
          presionadoLargo={() => presionadoLargo(item.id)}
        />
      )}
      ListEmptyComponent={<ListaDeComprasVacia />}
      ItemSeparatorComponent={() => <View style={styles.separador} />}
      contentContainerStyle={{ paddingBottom: 32 }}
    />
  );
}

const styles = StyleSheet.create({
  separador: { height: 1, backgroundColor: '#eee' },
});