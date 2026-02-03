import { useContext, useEffect, useState } from 'react';
import './RegistroPonto.css'
import { IoEnterOutline } from "react-icons/io5";
import { LuCoffee } from "react-icons/lu";
import { FaRegClock  } from 'react-icons/fa'
import AppContext from '../../context/appContext';

function RegistroPonto() {

    const { 
        status, 
        setStatus, 
        inicioPonto, 
        setInicioPonto, 
        saidaPonto, 
        setSaidaPonto,
        registros,
        setRegistro,
        Intervalo,
        setIntervalo,
        total,
        setTotal
    } = useContext(AppContext)

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => { setTime(new Date()) }, 1000);
        return () => clearInterval(timer)
    },[])

    const formatTimer = (date) => {
        return date.toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        }) 
    }
    
    const formatData = (date) => {
        return date.toLocaleDateString('pt-BR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }
    const registrandoHandle = () => {
        const novoRegistro = {
            HorarioInicio: inicioPonto,
            HorarioSaida: saidaPonto,
            Intervalo: Intervalo,
            Total: total

        }

        setRegistro(prev => [...prev, novoRegistro])
        console.log("Registrando novo registro")
    }


    useEffect(() => {
        if (status !== 'idle') return;

        const intervalo = setInterval(() => {
            setIntervalo(prev => prev + 1);
        }, 1000);

        return () => clearInterval(intervalo);
    }, [status]);

    const handleTotal = () => {
        const Horas = Math.floor(total / 3600);
        const Minutos = Math.floor((total % 3600) / 60);
        const Segundos = total % 60;
        
        if (Horas !== 0) {
            setTotal(`${Horas}h ${Minutos > 0 ? Minutos : ''}`)
        }
        return setTotal()
    }
 
    const handlePonto = ( state ) => {
        console.log(registros)
        if (state === 'iniciar' && status == 'off') {
            setStatus('Working')
            setInicioPonto(formatTimer(time))
            
        } else if (state === 'sair' && status == 'Working') {
            setSaidaPonto(formatTimer(time))
            setStatus('off')
            
            registrandoHandle()

        } else if (state === 'iniciarIntervalo' && status == 'Working') {
            setStatus('idle')
        } else if (state === 'breakIntervalo' && status == 'idle') {
            setStatus('Working')
        }

      /* console.log(`
📌 Registro de Ponto
-------------------
Início do ponto: ${inicioPonto ?? "não registrado"}
Saída do ponto: ${saidaPonto ?? "não registrado"}
Tempo do intervalo: ${Intervalo ?? "não registrado"}
Status atual: ${status}
        `);*/
    }


    return (
        <div className="registro-container">
            <div className='div-hora'>
                <h1>{formatTimer(time)}</h1>
                <p>{formatData(time)}</p>
            </div>

            <div className='status-div'>

                <div className='text-div'>
                    <div className={`circle ${status}`}></div>
                    <h1>Status: {status}</h1>
                </div>

                <div className='ultimaAcao-div'>
                    <h1>Ultima Ação: --:--:--</h1>
                </div>
            </div>

            <div className='buttons-container'>
                <button onClick={() => handlePonto('iniciar')}> <IoEnterOutline /> Registrar Entrada</button>
                <button onClick={() => handlePonto('sair')}> <IoEnterOutline /> Registrar Saida</button>
                <button onClick={() => handlePonto('iniciarIntervalo')}> <LuCoffee /> Iniciar Intervalo</button>
                <button onClick={() => handlePonto('breakIntervalo')}> <FaRegClock /> Encerrar Intervalo</button>
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