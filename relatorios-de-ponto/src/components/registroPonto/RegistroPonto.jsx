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
        inicioIntervalo,
        setInicioIntervalo,
        saidaIntervalo,
        setSaidaIntervalo,
        total,
        setTotal,
        id,
        setId,
        totalTrabalho,
        setTotalTrabalho
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

    const registroData = (date) => {
        return date.toLocaleDateString('pt-BR', {
            weekday: 'short',
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        })
    }

    const registrandoHandle = ( horaSaida, totalIntervalo, totalTrab ) => {
        setId(prev => prev + 1)

        const novoRegistro = {
            HorarioInicio: inicioPonto,
            HorarioSaida: horaSaida,
            InicioIntervalo: inicioIntervalo,
            saidaIntervalo: saidaIntervalo,
            TotalIntervalo: totalIntervalo,
            TotalTrabalho: totalTrab,
            Data: registroData(time),
            Id: id,
        }

        setRegistro(prev => [...prev, novoRegistro])
    }

    const handleIntervalo = () => {

        if (!inicioIntervalo || !saidaIntervalo) return '0s'

        const [horasInicio, minutosInicio, segundosInicio] = inicioIntervalo.split(':').map(Number);
        const [horasSaida, minutosSaida, segundosSaida] = saidaIntervalo.split(':').map(Number);
        const totalInicio = (horasInicio * 60) + minutosInicio + (segundosInicio/60)
        const totalSaida = (horasSaida * 60) + minutosSaida + (segundosSaida/60)
        const diferenca = totalSaida - totalInicio
        const Horas = Math.floor(diferenca/60)
        const Minutos = Math.round(diferenca%60)
        const SegundosTotais = Math.round(diferenca * 60)
        const segundos = SegundosTotais % 60 
        let TempoText = '';

        if (Horas > 0) {
            TempoText = `${Horas}h ${Minutos}m`
        } else if (Minutos > 0) {
            TempoText = `${Minutos}m ${segundos}s`
        } else {
            TempoText = `${segundos}s`
        }

        setTotal(TempoText);

        return TempoText;
    }

    const intervaloEmSegundos = () => {
      if (!inicioIntervalo || !saidaIntervalo) return 0;

      const toSeconds = (time) => {
        const [h, m, s] = time.split(":").map(Number);
        return h * 3600 + m * 60 + s;
      };

      return Math.max(
        0,
        toSeconds(saidaIntervalo) - toSeconds(inicioIntervalo),
      );
    };

    
    const calcularHorasComValores = (inicio, saida, intervaloSeg) => {
    if (!inicio || !saida) {
        return "0h 0m 0s";
    }

    const toSeconds = (time) => {
        const [h, m, s] = time.split(":").map(Number);
        return h * 3600 + m * 60 + s;
    };

    const inicioSec = toSeconds(inicio);
    const saidaSec = toSeconds(saida);

    const totalSec = Math.max(0, saidaSec - inicioSec - intervaloSeg);

    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;

    return `${h}h ${m}m ${s}s`;
    };

    const handlePonto = (state) => {
    console.log(registros);
    if (state === "iniciar" && status == "off") {
        setStatus("Working");
        setInicioPonto(formatTimer(time));
    } else if (state === "sair" && status == "Working") {
        const horaSaida = formatTimer(time);
        setSaidaPonto(horaSaida);

        const totalIntervalo = handleIntervalo();
        const intervaloSeg = intervaloEmSegundos();
        const horasDeTrabalho = calcularHorasComValores(
        inicioPonto,
        horaSaida,
        intervaloSeg,
        );

        setTotalTrabalho(horasDeTrabalho);
        setStatus("off");
        registrandoHandle(horaSaida, totalIntervalo, horasDeTrabalho);
    } else if (state === "iniciarIntervalo" && status == "Working") {
        const IntervaloTime = formatTimer(time);
        setStatus("idle");
        setInicioIntervalo(IntervaloTime);
    } else if (state === "breakIntervalo" && status == "idle") {
        const IntervaloTimeSaida = formatTimer(time);
        setStatus("Working");
        setSaidaIntervalo(IntervaloTimeSaida);
    }
    };



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
                        <h1>{total ? total : '0m 0s'}</h1>
                        <p>Tempo Intervalo</p>
                    </div>

                    <div className='tempo-div'>
                        <h1>{totalTrabalho ? totalTrabalho : '0h 0m'}</h1>
                        <p>Tempo Total</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default RegistroPonto;