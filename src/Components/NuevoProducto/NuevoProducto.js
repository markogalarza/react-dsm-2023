import { useRef, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactDOM from 'react-dom';
import './NuevoProducto.css';

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

    const nombreRef = useRef();

    const [nombreValid, setNombreValid] = useState(true);

    useEffect(() => {
        nombreRef.current.focus();
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
        nombreRef.current.focus();
        // nombreRef.current.value = '';
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
                        <Col><Button type='submit' variant="success">AÑADIR PRODUCTO</Button></Col>
                    </Row>
                </Container>
            </Form>
        </>
    )
}

export default NuevoProducto;