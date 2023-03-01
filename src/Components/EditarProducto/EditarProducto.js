import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditarProducto = (props) => {

    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [fecha, setFecha] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const parametros = useParams();

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
                //console.log(arrayProducto);
                setNombre(arrayProducto[0].nombre);
                setPrecio(arrayProducto[0].precio);
                setDescripcion(arrayProducto[0].descripcion);
                setFecha(arrayProducto[0].fecha);
            })
    }, []);


    const submitHandler = (event) => {
        event.preventDefault();
        const producto = {
            nombre: nombre,
            precio: precio,
            fecha: new Date(fecha),
            descripcion: descripcion
        }
        
        axios.put('https://dsm-react-demo-2023-default-rtdb.europe-west1.firebasedatabase.app/productos/'+  parametros.id +'.json', producto)
        .then((response)=>{
            alert('Producto actualizado');
        })

    }



    return (
        <>
            <Form onSubmit={submitHandler}>
                <Container>
                    <Row>
                        <Col><Form.Label>Nombre: </Form.Label>
                            <Form.Control onChange={(event) => setNombre(event.target.value)} type='text' value={nombre} /></Col>
                        <Col><Form.Label>Precio: </Form.Label>
                            <Form.Control onChange={(event) => setPrecio(event.target.value)} type='number' value={precio} /></Col>
                        <Col><Form.Label>Fecha: </Form.Label>
                            <Form.Control onChange={(event) => setFecha(event.target.value)} type='date' value={fecha} /></Col>
                        <Col><Form.Label>Descripción: </Form.Label>
                            <Form.Control onChange={(event) => setDescripcion(event.target.value)} type='text' value={descripcion} /></Col>
                        <Col><Button type='submit' variant="success">EDITAR PRODUCTO</Button></Col>
                    </Row>
                </Container>
            </Form>
        </>
    )
}

export default EditarProducto;