import { useRef, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactDOM from 'react-dom';
import './NuevoProducto.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const InfoModal = (props) => {

    const [open, setOpen] = useState(true);

    const clickHandler = () => {
        setOpen(false);
    }

    if (open) {
        return (
            <>
                <h1>{props.titulo}</h1>
                <p>{props.mensaje}</p>
                <button onClick={clickHandler}>CERRAR</button>
            </>
        )
    }

    return null;

}

const NuevoProducto = (props) => {

    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [fecha, setFecha] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const nombreRef = useRef();

    const [nombreValid, setNombreValid] = useState(true);

    const navega = useNavigate();

    useEffect(() => {
        //nombreRef.current.focus(); //Lo comento por comodidad
    }, []);

    const nombreHandler = (event) => {
        setNombre(event.target.value);
        setNombreValid(true)
    }

    const precioHandler = (event) => {
        setPrecio(event.target.value);
    }

    const fechaHandler = (event) => {
        setFecha(event.target.value);
    }

    const descripcionHandler = (event) => {
        setDescripcion(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const producto = {
            id: Math.random().toString(),
            nombre: nombre,
            precio: precio,
            fecha: new Date(fecha),
            descripcion: descripcion
        }
        props.addProducto(producto);
        setNombre('');
        setPrecio('');
        setFecha('');
        //nombreRef.current.focus(); //Lo comento por comodidad
        // nombreRef.current.value = '';
        //setTimeout(()=>navega('/products'),1000);

        axios.post('https://dsm-react-demo-2023-default-rtdb.europe-west1.firebasedatabase.app/productos.json?auth=' + props.idToken, producto)
        .then((response)=>{
            alert('El producto se ha insertado en la base de datos');
        }).catch((error)=>{
            alert('No se puede crear el producto');
        })
       
    }

    const onBlurHandler = () => {
        if (nombre.length === 0) { setNombreValid(false) }
    }

    let contenidoModal = '';
    if (!nombreValid) {
        //contenidoModal = <InfoModal titulo="CONFIRME LA VALIDEZ" mensaje="El campo está vacío" />
        contenidoModal = ReactDOM.createPortal(
            <InfoModal titulo="CONFIRME LA VALIDEZ" mensaje="El campo está vacío" />,
            document.getElementById('overlay'))
    }

    return (
        <>
            {contenidoModal}
            <Form onSubmit={submitHandler}>
                <Container>
                    <Row>
                        <Col><Form.Label className={`${nombreValid ? '' : 'invalid'}`}>Nombre: </Form.Label>
                            <Form.Control ref={nombreRef} onChange={nombreHandler} onBlur={onBlurHandler} type='text' value={nombre} /></Col>
                        <Col><Form.Label>Precio: </Form.Label>
                            <Form.Control onChange={precioHandler} type='number' value={precio} /></Col>
                        <Col><Form.Label>Fecha: </Form.Label>
                            <Form.Control onChange={fechaHandler} type='date' value={fecha} /></Col>
                        <Col><Form.Label>Descripción: </Form.Label>
                            <Form.Control onChange={descripcionHandler} type='text' value={descripcion} /></Col>
                        <Col><Button type='submit' variant="success">AÑADIR PRODUCTO</Button></Col>
                    </Row>
                </Container>
            </Form>
        </>
    )
}

export default NuevoProducto;