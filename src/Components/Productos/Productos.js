import Producto from './Producto';

function Productos(props) {
    return (
        <div>
            {props.productos.map((elemento) => {
                return (
                    <Producto key={elemento.id} producto={elemento} />
                )
            })}
        </div>
    )
}

export default Productos;