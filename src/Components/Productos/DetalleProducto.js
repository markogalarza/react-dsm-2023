import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams, useSearchParams } from "react-router-dom";

const DetalleProducto = () => {

    const parametros = useParams();
    const [formato, setFormato] = useSearchParams();
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        axios.get('https://dsm-react-demo-2023-default-rtdb.europe-west1.firebasedatabase.app/productos.json?orderBy="$key"&equalTo="' + parametros.id + '"')
            .then((response) => {
                //console.log(response.data);
                let arrayProducto = [];
                for (let key in response.data) {
                    arrayProducto.push({
                        ...response.data[key],
                        id: key
                    })
                }
                console.log(arrayProducto);
                setProducto(arrayProducto[0]);
            })
    }, []);

    return (
        <>
            <h2>NOMBRE: {producto.nombre}</h2>
            <h2>DETALLE DEL PRODUCTO = {parametros.id}</h2>
            <p>Información del producto: {producto.descripcion}</p>
            <p>Precio: {producto.precio}</p>
            <p>Fecha: {producto.fecha}</p>
            <img style={{width: '100px'}} alt='' src={producto.imagen}/>
            <p>Formato de plantilla = {formato.get('format')}</p>
            <Button variant='success'><Link to={`/product/edit/${parametros.id}`}>EDITAR PRODUCTO</Link></Button>
        </>
    )
}

export default DetalleProducto;