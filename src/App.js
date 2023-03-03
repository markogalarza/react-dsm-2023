import './App.css';
import Productos from './Components/Productos/Productos';
import Header from './Components/UI/Header';
import Footer from './Components/UI/Footer';
import NuevoProducto from './Components/NuevoProducto/NuevoProducto';
import { useEffect, useState } from 'react';
import AutContext from './store/AutContext';
import ProductosContext from './store/ProductosContext';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import ErrorPage from './Pages/ErrorPage';
import DetalleProducto from './Components/Productos/DetalleProducto';
import EditarProducto from './Components/EditarProducto/EditarProducto';
import Login from './Components/Login/Login';
import Registro from './Components/Login/Registro';

function App() {

  const [login, setLogin] = useState(false);
  const [loginData, setLoginData] = useState({});
  const [language, setLanguage] = useState('en-EN');

  const actualizarLogin = (login, loginData) => {
    setLogin(login);
    setLoginData(loginData);
    localStorage.setItem('login', login);
    localStorage.setItem('loginData', loginData.idToken);
  }

  useEffect(()=>{
    if(localStorage.getItem('login')==='true'){
      setLogin(true);
      setLoginData({idToken: localStorage.getItem('loginData')});
    }
  },[]);

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
      <Productos productos={productos} borraProducto={borraProducto} idToken={loginData.idToken} />
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
          <Route path='/product/edit/:id' element={<EditarProducto idToken={loginData.idToken} />} />
          <Route path='/new-product' element={<NuevoProducto addProducto={addProducto} idToken={loginData.idToken} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login actualizarLogin={actualizarLogin} />} />
          <Route path='/registro' element={<Registro actualizarLogin={actualizarLogin} />} />
          <Route path='*' element={<ErrorPage/>} />
        </Routes>
        <Footer />
      </AutContext.Provider>
    </div>
  );
}

export default App;
