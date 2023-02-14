import './App.css';
import Productos from './Components/Productos/Productos';
import Header from './Components/UI/Header';
import Footer from './Components/UI/Footer';

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
    <Header />
    <Productos productos={productos} />
    <Footer />
  </div>
);
}

export default App;
