import './Header.css';
import AutContext from '../../store/AutContext';
import { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function Header() {

    const contextAut = useContext(AutContext);

    return (
        <div className='header'>
            <h2>LIST OR PRODUCTS</h2>
            <p>With description, date and price</p>
            {contextAut.login && <p>Hola USUARIO</p>}
            <Nav className="justify-content-end">
                {/* <Nav.Item>
                    <a href='/'>Inicio</a> | {'   '}
                </Nav.Item>
                <Nav.Item>
                    <a href='/about-us'>Quiénes somos</a> | {'   '}
                </Nav.Item>
                <Nav.Item>
                    <a href='/products'>Productos</a> | {'   '}
                </Nav.Item>
                <Nav.Item>
                    <a href='/contact'>Contacto</a>
                </Nav.Item> */}
                <Nav.Item>
                    <Link to='/'>Inicio</Link> | {'   '}
                </Nav.Item>
                <Nav.Item>
                    <Link to='/about-us'>Quiénes somos</Link> | {'   '}
                </Nav.Item>
                <Nav.Item>
                    <Link to='/products'>Productos</Link> | {'   '}
                </Nav.Item>
                <Nav.Item>
                    <Link to='/new-product'>Nuevo producto</Link> | {'   '}
                </Nav.Item>
                <Nav.Item>
                    <Link to='/contact?sede=PAMPLONA&persona=Julián'>Contacto</Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default Header;