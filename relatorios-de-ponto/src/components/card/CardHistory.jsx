import './CardHistory.css'
import { IoEnterOutline } from "react-icons/io5";
import { RxExit } from "react-icons/rx";
import { LuCoffee } from "react-icons/lu";
import { FaRegClock  } from 'react-icons/fa'
import { IoCalendarClearOutline } from "react-icons/io5";
import { useEffect } from 'react';

function CardHistory ( props ) {

    const { horaInicio, horaSaida, inicioIntervalo, saidaIntervalo, TotalIntervalo, Data, TotalTrabalho } = props

    useEffect(() => {
        console.log([TotalTrabalho])
    },[TotalTrabalho])

    return (
        <div className='history-section'>

                <div className='user-history-container'>
                    <div className='top-history'>
                        <span><IoCalendarClearOutline /></span>

                        <div className='info-day'>
                            <h1>{Data}</h1>
                            <p>Dia de Trabalho</p>
                        </div>
                    </div>
                    

                    <div className='horarios-div'>
                        <div className='div-horario'>
                            <IoEnterOutline id='icon'/>
                            <div className='hour-div'>
                                <p>Entrada</p>
                                <p>{horaInicio}</p>
                            </div>
                        </div>

                        <div className='div-horario'>
                            <RxExit  id='iconExit'/>
                            <div className='hour-div'>
                                <p>Saida</p>
                                <p>{horaSaida}</p>
                            </div>
                        </div>

                        <div className='div-horario'>
                            <LuCoffee  id='iconCoffe'/>
                            <div className='hour-div'>
                                <p>Intervalo</p>
                                <p>{TotalIntervalo}</p>
                            </div>
                        </div>

                        <div className='div-horario'>
                            <FaRegClock id='iconClock'/>
                            <div className='hour-div'>
                                <p>Total</p>
                                <p id='clockText'>{TotalTrabalho}</p>
                            </div>
                        </div>
                    </div>

                    <div className='history-status-div'>
                        <h1>Completo</h1>
                    </div>
                </div>

                

            </div>
    )
}

export default CardHistory;