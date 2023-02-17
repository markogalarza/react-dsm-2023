import './Producto.css';
import FechaProducto from './FechaProducto';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Producto(props) {

    const [nombre, setNombre] = useState(props.producto.nombre);

    //let nombre = props.producto.nombre;
    const fecha = props.producto.fecha;
    const precio = props.producto.precio;

    const clickHandler = () => {
        setNombre('Nuevo nombre');
    }

    const borraHandler = () => {
        props.borraProducto(props.producto.id)
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='producto'>
            <FechaProducto fecha={fecha} />
            <div className='producto__descripcion'>
                <h2>{nombre}</h2>
                <div className='producto__precio'>{precio}</div>
            </div>
            <Button onClick={clickHandler}>Cambia nombre</Button>
            <Button variant="warning" onClick={handleShow}>
                Ver detalles
            </Button>
            <Button variant="danger" onClick={borraHandler} >BORRAR</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{nombre}</Modal.Title>
                </Modal.Header>
                <Modal.Body>DETALLES DE MI PRODUCTO: {precio}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Producto;