import { useState } from 'react';
import { productoParaLista } from '../tipos/productosParaLista';

export default function hooks() {
  const [items, setItems] = useState<productoParaLista[]>([]);

  const agregarProducto = (nombre: string) => {
    if (!nombre.trim()) return; 
    const nuevo: productoParaLista = { id: String(Date.now()), nombre, finalizado: false };
    setItems(prev => [...prev, nuevo]);
  };

  const alternarEstadoDelProducto = (id: string) => {
    setItems(prev => prev.map(it => it.id === id ? { ...it, finalizado: !it.finalizado } : it));
  };

  const eliminarProducto = (id: string) => {
    setItems(prev => prev.filter(it => it.id !== id));
  };

  return { items, agregarProducto, alternarEstadoDelProducto, eliminarProducto };
}