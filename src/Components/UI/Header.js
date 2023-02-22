import './Header.css';
import AutContext from '../../store/AutContext';
import { useContext } from 'react';

function Header() {

    const contextAut = useContext(AutContext);

    return (
        <div className='header'>
            <h2>LIST OR PRODUCTS</h2>
            <p>With description, date and price</p>
            {contextAut.login && <p>Hola USUARIO</p>}
        </div>
    )
}

export default Header;