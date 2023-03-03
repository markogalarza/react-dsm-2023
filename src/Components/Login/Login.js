import axios from "axios";
import { useState } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB0UkvETCJBvkiohZCj8ubhOUocw_dLRus', authData)
        .then((response)=>{
            //console.log(response);
            props.actualizarLogin(true, response.data);
            alert('El usuario se ha logueado correctamente');
        }).catch((error) => {
            alert('No se ha encontrado el usuario');
        })
    }

    const logoutHandler = () => {
        props.actualizarLogin(false,{});
    }

    return (
        <Form onSubmit={submitHandler} >
            <Container>
                <Row>
                    <Col><Form.Label>Email: </Form.Label>
                        <Form.Control onChange={(event)=>setEmail(event.target.value)} type='email' value={email} /></Col>
                    <Col><Form.Label>Password: </Form.Label>
                        <Form.Control onChange={(event)=>setPassword(event.target.value)} type='password' value={password} /></Col>
                    <Col><Button type='submit' variant="primary">LOGIN</Button></Col>
                    <Col><Button variant="warning" onClick={logoutHandler}>LOGOUT</Button></Col>
                </Row>
            </Container>
        </Form>
    )
}

export default Login;