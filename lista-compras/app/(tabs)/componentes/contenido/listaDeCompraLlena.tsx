import { FlatList, View, StyleSheet } from 'react-native';
import  TarjetaParaProductoDeCompra  from '../contenido/tarjetaParaProductoDeCompra';
import  listaDeComprasVacia from '../contenido/listaDeComprasVacia';
import { productoParaLista } from '../../tipos/tipos';

type Props = {
  producto: productoParaLista[];
  alPresionarSobreUnItem: (id: string) => void;
  alMantenerPresionSobreUnItem: (id: string) => void;
};

export default function ListaDeCompraLlena({
  producto,
  alPresionarSobreUnItem,
  alMantenerPresionSobreUnItem,
}: Props) {
  const renderizarItem = ({ item }: { item: productoParaLista }) => (
    <TarjetaParaProductoDeCompra
      item={item}
      presionado={() => alPresionarSobreUnItem(item.id)}
      presionadoLargo={() => alMantenerPresionSobreUnItem(item.id)}
    />
  );

  return (
    <FlatList
      data={producto}
      keyExtractor={(item) => item.id}
      renderItem={renderizarItem}
      ListEmptyComponent={listaDeComprasVacia}
      ItemSeparatorComponent={() => <View style={styles.separador} />}
      contentContainerStyle={{ paddingBottom: 32 }}
    />
  );
}

const styles = StyleSheet.create({
  separador: { height: 1, backgroundColor: '#eee' },
});