import { useState } from 'react';
import { productoParaLista } from '../tipos/tipos';

export const useListaDeCompras = () => {
  const [items, setItems] = useState<productoParaLista[]>([]);
  const [textoDelInput, setTextoDelInput] = useState('');

  const agregarProducto = () => {
    const textoLimpio = textoDelInput.trim();
    if (!textoLimpio) return;
    
    setItems((prev) => [
      ...prev,
      { id: String(Date.now()), nombre: textoLimpio, finalizado: false },
    ]);
    setTextoDelInput('');
  };

  const alternarEstadoDelProducto= (id: string) => {
    setItems((prev) =>
      prev.map((item) => 
        item.id === id ? { ...item, finalizado: !item.finalizado } : item
      )
    );
  };

  const eliminarProducto = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return {
    items,
    textoDelInput,
    setTextoDelInput,
    agregarProducto,
    alternarEstadoDelProducto,
    eliminarProducto,
  };
};