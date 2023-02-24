import { useSearchParams } from "react-router-dom";

const Contact = () => {

    const [parametrosSearch, setParametrosSearch] = useSearchParams();

    return (
        <>
            <h2>CONTACTO DE LA SEDE DE {parametrosSearch.get('sede')}</h2>
            <p>Esta es nuestra dirección Y NUESTRA PERSONA DE CONTACTO ES {parametrosSearch.get('persona')}.</p>
        </>
    )
}

export default Contact;