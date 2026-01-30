import { useEffect, useState } from 'react';
import './RegistroPonto.css'
import { IoEnterOutline } from "react-icons/io5";
import { LuCoffee } from "react-icons/lu";
import { FaRegClock  } from 'react-icons/fa'

function RegistroPonto() {
    const [seconds, setSeconds] = useState(null)
    const data = new Date()

    useEffect(() => {
        setSeconds(data.getSeconds())
    }, [seconds])
    
    return (
        <div className="registro-container">
            <div className='div-hora'>
                <h1>{`${data.getHours()}:${data.getMinutes()}:${seconds}`}</h1>
                <p>quinta-feira, 29 de janeiro de 2026</p>
            </div>

            <div className='status-div'>

                <div className='text-div'>
                    <div id='circle'></div>
                    <h1>Status: Não Registrado</h1>
                </div>

                <div className='ultimaAcao-div'>
                    <h1>Ultima Ação: --:--:--</h1>
                </div>
            </div>

            <div className='buttons-container'>
                <button> <IoEnterOutline /> Registrar Entrada</button>
                <button> <IoEnterOutline /> Registrar Saida</button>
                <button> <LuCoffee /> Iniciar Intervalo</button>
                <button> <FaRegClock /> Encerrar Intervalo</button>
            </div>

            <div className='resumo-container'>
                <h1>Resumo de Hoje</h1>
                <div className='box-container'>

                    <div className='tempo-div'>
                        <h1>0h 0m</h1>
                        <p>Tempo Trabalho</p>
                    </div>

                    <div className='tempo-div'>
                        <h1>0h 0m</h1>
                        <p>Tempo Intervalo</p>
                    </div>

                    <div className='tempo-div'>
                        <h1>0h 0m</h1>
                        <p>Tempo Total</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default RegistroPonto;