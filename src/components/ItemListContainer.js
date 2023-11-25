/*
function ItemListContainer({greeting}) {
    return (
      <div className="item-list-container">
        <p style={{ fontSize: '18px', color: 'blue' }}>
            {greeting}
        </p>
      </div>
    );
  }

*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const cargarArchivo = () => {
    return new Promise(function (resolve, reject) {
      axios.get('/src/Data/Products.json')
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.message);
        });
    });
  };

  useEffect(() => {
    cargarArchivo()
      .then((productos) => {
        console.log('Productos cargados:', productos);
        setProductos(productos);
        setCargando(false);
      })
      .catch((error) => {
        console.error('Error al cargar los productos:', error);
        setCargando(false);
      });
  }, []);

  return (
    <div>
      {cargando ? (
        <p>Cargando productos...</p>
      ) : (
        <ul>
          {productos.map((producto, index) => (
            <li key={index}>{producto.descripcion}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemListContainer;