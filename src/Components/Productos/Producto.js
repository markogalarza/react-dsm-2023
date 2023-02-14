import './Producto.css';
import FechaProducto from './FechaProducto';

function Producto(props) {

    const nombre = props.producto.nombre;
    const fecha = props.producto.fecha;
    const precio = props.producto.precio;

    return (
        <div className='producto'>
            <FechaProducto fecha={fecha} />
            <div className='producto__descripcion'>
                <h2>{nombre}</h2>
                <div className='producto__precio'>{precio}</div>
            </div>
        </div>
    )
}

export default Producto;