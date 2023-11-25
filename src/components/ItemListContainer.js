/*
function ItemListContainer({greeting}) {
    return (
      <div className="item-list-container">
        <p style={{ fontSize: '18px', color: 'blue' }}>
            {greeting}
        </p>
      </div>
    );
  
*/
import React, { useState, useEffect } from 'react';
import productos from '../Data/Products.json'
import SearchBar from './SearchBar';
import ImageList from "./ImageList";
import ImageShow from "./ImageShow";


const ItemListContainer = () => {
  const [productosMostrados, setProductosMostrados] = useState([]);

  const leerArchivoProductos = () => {
    return new Promise((resolve, reject) => {
      try {
        if (Array.isArray(productos)) {
          resolve(productos);
        } else {
          reject(new Error('El archivo no tiene la estructura esperada'));
        }
      } catch (error) {
        reject(error);
      }
    });
  };

  const filtrarProductos = term => {
    const productosFiltrados = productos.filter(producto =>
      producto.descripcion.toLowerCase().includes(term.toLowerCase())
    );
    setProductosMostrados(productosFiltrados);
  };

  useEffect(() => {
    leerArchivoProductos()
      .then(productosMapeados => {
        console.log('productos mapeados:', productosMapeados);
        setProductosMostrados(productosMapeados);
      })
      .catch(error => console.error(error.message));
  }, []);

  return (
    <div>
      <h1>Productos New World</h1>
      <SearchBar onSubmit={filtrarProductos} />
      <div className="site-container">
        <div className="article-container">
          {productosMostrados.map((producto, index) => (
            <article key={producto.descripcion} className="article-card">
              <figure className="article-image">
              <ImageList products={[producto]} />
              </figure>
              <div className="article-content">
                <h1 className="card-category">{producto.nombreCategoria}</h1>
                <h3 className="card-title">{producto.descripcion}</h3>
                <p className="card-price">${producto.precio.toFixed(2)}</p>
                <button className="add-product-to-cart">Agregar al carrito</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;