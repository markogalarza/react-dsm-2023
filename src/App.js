import './App.css';
import Productos from './Components/Productos/Productos';
import Header from './Components/UI/Header';
import Footer from './Components/UI/Footer';
import NuevoProducto from './Components/NuevoProducto/NuevoProducto';
import { useState } from 'react';
import AutContext from './store/AutContext';
import ProductosContext from './store/ProductosContext';

function App() {

  const [login, setLogin] = useState(false);
  const [language, setLanguage] = useState('en-EN');

  const [productos, setProductos] = useState(
    [
      {
        id: Math.random().toString(),
        nombre: 'Ratón óptico 1',
        precio: 15.50,
        fecha: new Date(2023, 2, 2)
      },
      {
        id: Math.random().toString(),
        nombre: 'Ratón óptico 2',
        precio: 25.50,
        fecha: new Date(2023, 2, 2)
      },
      {
        id: Math.random().toString(),
        nombre: 'Ratón óptico 3',
        precio: 9.50,
        fecha: new Date(2024, 2, 2)
      },
      {
        id: Math.random().toString(),
        nombre: 'Ratón óptico 4',
        precio: 10.5,
        fecha: new Date(2024, 2, 5)
      }
    ]
  )

  const addProducto = (producto) => {
    //setProductos(productos.push(producto));
    setProductos((prevProductos) => {
      return [producto, ...prevProductos];
    });
  }

  const borraProducto = (id) => {
    let copiaProductos = [...productos];
    copiaProductos = copiaProductos.filter((elemento) => {
      return elemento.id !== id;
    })
    setProductos(copiaProductos);
  }

  return (
    <div>
      <AutContext.Provider value={{ login: login, language: language }}>
        <Header />
        <NuevoProducto addProducto={addProducto} />
        <ProductosContext.Provider value={{borraProducto: borraProducto}}>
          <Productos productos={productos} borraProducto={borraProducto} />
        </ProductosContext.Provider>
        <Footer />
      </AutContext.Provider>
    </div>
  );
}

export default App;
