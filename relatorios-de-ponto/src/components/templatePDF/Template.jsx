import './Template.css'
import AppContext from '../../context/appContext'
import { useContext } from 'react'
import CardPDF from '../cardPDF/CardPDF'

function Template () {
    const {
        registros,
    } = useContext(AppContext)
    console.log(registros)

    return (
        <div className='containerPDF'>
            <h1 id='title_h1'>Relatorios de Bate Ponto</h1>

            {registros.map((item, index) => (
                <CardPDF key={index} item={item}/>
            ))}
        </div>
    )
}

export default Template