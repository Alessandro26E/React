import './Home.css'
import { FaRegClock  } from 'react-icons/fa'
import { MdHistory } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import RegistroPonto from '../registroPonto/RegistroPonto';
import Historico from '../historico/Historico';

function Home () {

    return (
        <div className='home-container'>
                <div className='button-container'>
                    <div className='button-div'>
                        <button className='active'> <FaRegClock/> Registrar Ponto</button>
                        <button className=''> <MdHistory />Histórico</button>
                        <button className=''> <HiOutlineDocumentReport/>Relatórios</button>
                    </div>
                </div> 

                <Historico/>
        </div>
    )
}

export default Home;