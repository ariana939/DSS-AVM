import Contenedor from "./componentes/contenedor/contenedor";
import TituloDePagina from "./componentes/contenido/tituloDePagina";
import FormularioParaAgregarProducto from "./componentes/contenido/formularioParaAgregarProducto";
import ListaDeCompras from "./componentes/contenido/listaDeCompraLlena";
import UsarListaDeCompras from "./hooks/hooks";

export default function app() {
  const {
    items,
    textoDelInput,
    setTextoDelInput,
    agregaProducto,
    cambiaEstadoDelProducto,
    eliminaProducto,
  } = UsarListaDeCompras();
   return (
    <Contenedor>
      <TituloDePagina />
      <FormularioParaAgregarProducto
        nuevoProducto={textoDelInput}
        cambiaTexto={setTextoDelInput}
        alEnviar={agregaProducto}
      />
      <ListaDeCompras
        producto={items}
        presionado={cambiaEstadoDelProducto}
        presionadoLargo={eliminaProducto}
      />
    </Contenedor>
  );
}