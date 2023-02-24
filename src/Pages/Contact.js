import { useSearchParams } from "react-router-dom";

const Contact = () => {

    const [parametrosSearch, setParametrosSearch] = useSearchParams();

    return (
        <>
            <h2>CONTACTO DE LA SEDE DE {parametrosSearch.get('sede')}</h2>
            <p>Esta es nuestra dirección y nuestra persona de contacto es {parametrosSearch.get('persona')}.</p>
        </>
    )
}

export default Contact;