import './App.css';
import Productos from './Components/Productos/Productos';
import Header from './Components/UI/Header';
import Footer from './Components/UI/Footer';

function App() {

  const productos = [
    {
      nombre: 'Ratón óptico 1',
      precio: 15.50,
      fecha: new Date(2022, 2, 2)
    },
    {
      nombre: 'Ratón óptico 2',
      precio: 25.50,
      fecha: new Date(2022, 2, 2)
    },
    {
      nombre: 'Ratón óptico 3',
      precio: 9.50,
      fecha: new Date(2022, 2, 2)
    },
  ];

  return (
    <div>
      <Header />
      <Productos productos={productos} />
      <Footer />
    </div>
  );
}

export default App;
