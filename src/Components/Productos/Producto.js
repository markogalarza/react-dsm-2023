import './Producto.css';
import FechaProducto from './FechaProducto';

function Producto(props) {

    const nombre = props.producto.nombre;
    const fecha = props.producto.fecha;
    const precio = props.producto.precio;
    const ano = fecha.getFullYear();
    const mes = fecha.toLocaleString('es-ES', { month: 'long' });
    const dia = fecha.toLocaleString('es-ES', { day: '2-digit' });


    return (
        <div className='producto'>
            <FechaProducto fecha={props.producto.fecha} />
            <div className='producto__descripcion'>
                <h2>{nombre}</h2>
                <div className='producto__precio'>{precio}</div>
            </div>
        </div>
    )
}

export default Producto;