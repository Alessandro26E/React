import './Historico.css'
import { CiCalendar } from "react-icons/ci";

import CardHistory from '../card/CardHistory';
import AppContext from '../../context/appContext';
import { useContext, useEffect } from 'react';

function Historico() {
    const { registros } = useContext(AppContext)

    useEffect(() => {
        console.log(registros)
    },[registros])
    
    return (
      <div className="historico-div">
        <div className="top-div">
          <h1>Histórico de Ponto</h1>
          <p>
            <CiCalendar id="calendar" /> Ultimos 30 dias
          </p>
        </div>
        <div className="cards-div">
          {registros.map((item) => (
            
              <CardHistory key={item.Id}
                horaInicio={item.HorarioInicio}
                horaSaida={item.HorarioSaida}
                inicioIntervalo={item.HorarioIntervalo}
                saidaIntervalo={item.SaidaIntervalo}
                Data={item.Data}
                TotalIntervalo={item.TotalIntervalo}
                Id={item.Id}
                TotalTrabalho={item.TotalTrabalho}
              />
            
          ))}

        </div>
      </div>
    );
}

export default Historico;