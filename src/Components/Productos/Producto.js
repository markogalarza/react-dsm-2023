import './Producto.css';
import FechaProducto from './FechaProducto';
import {useState} from 'react';

function Producto(props) {

    const [nombre, setNombre] = useState(props.producto.nombre);

    //let nombre = props.producto.nombre;
    const fecha = props.producto.fecha;
    const precio = props.producto.precio;

    const clickHandler = () => {
        setNombre('Nuevo nombre');
    }

    return (
        <div className='producto'>
            <FechaProducto fecha={fecha} />
            <div className='producto__descripcion'>
                <h2>{nombre}</h2>
                <div className='producto__precio'>{precio}</div>
            </div>
            <button onClick={clickHandler}>Cambia nombre</button>
        </div>
    )
}

export default Producto;