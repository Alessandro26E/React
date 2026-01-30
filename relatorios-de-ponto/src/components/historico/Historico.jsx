import './Historico.css'
import { CiCalendar } from "react-icons/ci";

import CardHistory from '../card/CardHistory';
function Historico() {
    
    return  (
        <div className="historico-div">
            <div className='top-div'>
                <h1>Histórico de Ponto</h1>
                <p> <CiCalendar id='calendar'/> Ultimos 30 dias</p>
            </div>

            <CardHistory/>
        </div>
    )
}

export default Historico;