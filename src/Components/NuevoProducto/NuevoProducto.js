import {useState} from 'react';

const NuevoProducto = (props) => {

    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [fecha, setFecha] = useState('');

    const nombreHandler = (event) => {
        setNombre(event.target.value);
    }

    const precioHandler = (event) => {
        setPrecio(event.target.value);
    }

    const fechaHandler = (event) => {
        setFecha(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const producto = {
            id: Math.random().toString(),
            nombre: nombre,
            precio: precio,
            fecha: new Date(fecha)
        }
        props.addProducto(producto);
        setNombre('');
        setPrecio('');
        setFecha('');
    }

    return(
        <form onSubmit={submitHandler}>
            <div>
                <label>Nombre: </label>
                <input onChange={nombreHandler} type='text' value={nombre} />
            </div>
            <div>
                <label>Precio: </label>
                <input onChange={precioHandler} type='number' value={precio} />
            </div>
            <div>
                <label>Fecha: </label>
                <input onChange={fechaHandler} type='date' value={fecha} />
            </div>
            <div>
            <button type='submit'>AÑADIR PRODUCTO</button>
            </div>
        </form>
    )
}

export default NuevoProducto;