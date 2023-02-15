import './App.css';
import Productos from './Components/Productos/Productos';
import Header from './Components/UI/Header';
import Footer from './Components/UI/Footer';
import NuevoProducto from './Components/NuevoProducto/NuevoProducto';
import {useState} from 'react';

function App() {

  const [productos, setProductos] = useState(
    [
      {
        id: Math.random().toString(),
        nombre: 'Ratón óptico 1',
        precio: 15.50,
        fecha: new Date(2022, 2, 2)
      },
      {
        id: Math.random().toString(),
        nombre: 'Ratón óptico 2',
        precio: 25.50,
        fecha: new Date(2022, 2, 2)
      },
      {
        id: Math.random().toString(),
        nombre: 'Ratón óptico 3',
        precio: 9.50,
        fecha: new Date(2022, 2, 2)
      },
      {
        id: Math.random().toString(),
        nombre: 'Ratón óptico 4',
        precio: 10.5,
        fecha: new Date(2022, 2, 5)
      }
    ]
  )

  const addProducto = (producto) => {
    //setProductos(productos.push(producto));
    setProductos((prevProductos) => {
      return [producto, ...prevProductos];
    });
  }


  return (
    <div>
      <Header />
      <NuevoProducto addProducto={addProducto} />
      <Productos productos={productos} />
      <Footer />
    </div>
  );
}

export default App;
