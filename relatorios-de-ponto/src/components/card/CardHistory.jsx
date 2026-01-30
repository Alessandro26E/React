import './CardHistory.css'
import { IoEnterOutline } from "react-icons/io5";
import { RxExit } from "react-icons/rx";
import { LuCoffee } from "react-icons/lu";
import { FaRegClock  } from 'react-icons/fa'
import { IoCalendarClearOutline } from "react-icons/io5";

function CardHistory () {

    return (
        <div className='history-section'>

                <div className='user-history-container'>
                    <div className='top-history'>
                        <span><IoCalendarClearOutline /></span>

                        <div className='info-day'>
                            <h1>ter., 28 de jan. de 2025</h1>
                            <p>Dia de Trabalho</p>
                        </div>
                    </div>
                    

                    <div className='horarios-div'>
                        <div className='div-horario'>
                            <IoEnterOutline id='icon'/>
                            <div className='hour-div'>
                                <p>Entrada</p>
                                <p>08:30</p>
                            </div>
                        </div>

                        <div className='div-horario'>
                            <RxExit  id='iconExit'/>
                            <div className='hour-div'>
                                <p>Saida</p>
                                <p>17:30</p>
                            </div>
                        </div>

                        <div className='div-horario'>
                            <LuCoffee  id='iconCoffe'/>
                            <div className='hour-div'>
                                <p>Intervalo</p>
                                <p>45m</p>
                            </div>
                        </div>

                        <div className='div-horario'>
                            <FaRegClock id='iconClock'/>
                            <div className='hour-div'>
                                <p>Total</p>
                                <p id='clockText'>08:30</p>
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