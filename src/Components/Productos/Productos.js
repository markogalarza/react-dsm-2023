import FiltroProductos from './FiltroProductos';
import Producto from './Producto';
import { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

function Productos(props) {

    const [ano, setAno] = useState('');

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        //console.log('Se monta Productos');
        axios.get('https://dsm-react-demo-2023-default-rtdb.europe-west1.firebasedatabase.app/productos.json')
            .then((response) => {
                //console.log(response.data);
                let arrayProductos = [];
                for (let key in response.data) {
                    arrayProductos.push({
                        id: key,
                        nombre: response.data[key].nombre,
                        precio: response.data[key].precio,
                        fecha: new Date(response.data[key].fecha),
                        descripcion: response.data[key].descripcion
                    })
                }
                //console.log(arrayProductos);
                setProductos(arrayProductos);
            }).catch((error)=>{
                alert('Se ha producido un error');
            })
    },[]);

    const updateAno = (ano) => {
        setAno(ano);
    }

    const productosFiltrados = props.productos.filter((elemento) => {
        if (ano !== '') {
            return elemento.fecha.getFullYear().toString() === ano;
        }
        return true;
    })

    let contenido = <Alert variant='primary'>No hay productos</Alert>;

    if (productosFiltrados.length > 0) {
        contenido = (
            <div>
                {productos.map((elemento) => {
                    return (
                        <Producto key={elemento.id} producto={elemento} borraProducto={props.borraProducto} idToken={props.idToken} />
                    )
                })}
                <h1>-----------------------------------------</h1>
                {productosFiltrados.map((elemento) => {
                    return (
                        <Producto key={elemento.id} producto={elemento} borraProducto={props.borraProducto} />
                    )
                })}
            </div>)
    }

    return (
        <>
            <FiltroProductos updateAno={updateAno} />
            {contenido}
        </>
    )
}

export default Productos;