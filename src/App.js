import './App.css';
import Productos from './Components/Productos/Productos';
import Header from './Components/UI/Header';
import Footer from './Components/UI/Footer';
import NuevoProducto from './Components/NuevoProducto/NuevoProducto';
import { useState } from 'react';
import AutContext from './store/AutContext';
import ProductosContext from './store/ProductosContext';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import ErrorPage from './Pages/ErrorPage';
import DetalleProducto from './Components/Productos/DetalleProducto';

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

  const contenidoProductos = <>
    <ProductosContext.Provider value={{ borraProducto: borraProducto }}>
      <Productos productos={productos} borraProducto={borraProducto} />
    </ProductosContext.Provider>
  </>

  return (
    <div>
      <AutContext.Provider value={{ login: login, language: language }}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/products' element={contenidoProductos} />
          <Route path='/product/:id' element={<DetalleProducto/>} />
          <Route path='/new-product' element={<NuevoProducto addProducto={addProducto} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<ErrorPage/>} />
        </Routes>
        <Footer />
      </AutContext.Provider>
    </div>
  );
}

export default App;
