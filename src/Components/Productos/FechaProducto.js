import { useContext } from "react";
import AutContext from "../../store/AutContext";

function FechaProducto(props) {

    const contextLanguage = useContext(AutContext).language;

    const fecha = props.fecha;
    const ano = fecha.getFullYear();
    const mes = fecha.toLocaleString(contextLanguage, { month: 'long' });
    const dia = fecha.toLocaleString(contextLanguage, { day: '2-digit' });

    return (
        <div className='producto-fecha'>
            <div className='producto-fecha__dia'>{dia}</div>
            <div className='producto-fecha__mes'>{mes}</div>
            <div className='producto-fecha__ano'>{ano}</div>
        </div>
    )
}

export default FechaProducto;