import './Home.css'
import { FaRegClock  } from 'react-icons/fa'
import { MdHistory } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import RegistroPonto from '../registroPonto/RegistroPonto';
import Historico from '../historico/Historico';
import { useContext } from 'react';
import AppContext from '../../context/appContext';
import RelatorioPonto from '../relatoriosPonto/RelatorioPonto';

function Home () {

    const { pageAtual, setPageAtual } = useContext(AppContext)

    const pageHandle = ( tabStatus ) => {
        setPageAtual(tabStatus)
    }

    return (
        <div className='home-container'>
                <div className='button-container'>
                    <div className='button-div'>
                        <button onClick={() => pageHandle('registrarPonto')} className={pageAtual === 'registrarPonto' ? 'active' : ''}> <FaRegClock/> Registrar Ponto</button>
                        <button onClick={() => pageHandle('historico')} className={pageAtual === 'historico' ? 'active' : ''}> <MdHistory />Historico</button>
                        <button onClick={() => pageHandle('relatorios')} className={pageAtual === 'relatorios' ? 'active' : ''}> <HiOutlineDocumentReport/>Relatórios</button>
                    </div>
                </div> 

                {pageAtual === 'registrarPonto' && <RegistroPonto/>}
                {pageAtual === "historico" && <Historico/> }
                {pageAtual === "relatorios" && <RelatorioPonto/> }
        </div>
    )
}

export default Home;