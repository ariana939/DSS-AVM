import { useState } from 'react';
import { productoParaLista } from '../tipos/tipos';

export default function UsarListaDeCompras (){
  const [items, setItems] = useState<productoParaLista[]>([]);
  const [textoDelInput, setTextoDelInput] = useState('');

  const agregaProducto = () => {
    const textoLimpio = textoDelInput.trim();
    if (!textoLimpio) return;
    
    setItems((prev) => [
      ...prev,
      { id: String(Date.now()), nombre: textoLimpio, comprado: false },
    ]);
    setTextoDelInput('');
  };

  const cambiaEstadoDelProducto= (id: string) => {
    setItems((prev) =>
      prev.map((item) => 
        item.id === id ? { ...item, comprado: !item.comprado } : item
      )
    );
  };

  const eliminaProducto = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return {
    items,
    textoDelInput,
    setTextoDelInput,
    agregaProducto,
    cambiaEstadoDelProducto,
    eliminaProducto,
  };
};