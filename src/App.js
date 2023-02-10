import './App.css';
import Producto from './Components/Producto';
import Productos from './Components/Productos';

function App() {

  const productos = [
    {
      nombre: '111111',
      precio: 45.5,
      fecha: new Date(2023, 2,5)
    },
    {
      nombre: '22222',
      precio: 45.5,
      fecha: new Date(2023, 2,6)
    },
    {
      nombre: '333333',
      precio: 45.5,
      fecha: new Date(2023, 2,12)
    }
]

return (
  <div>
    <p>Hola Mundo</p>
    <Productos productos={productos} />
  </div>
);
}

export default App;
