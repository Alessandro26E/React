import './CardPDF.css';
import { FiClock, FiCalendar, FiSunrise, FiSunset, FiCoffee, FiActivity } from 'react-icons/fi';

function CardPonto({ item }) {
  return (
    <div className="card-ponto">
        <div className='top-ponto-div'>
            <h1 id='title-ponto-div'><span>Data:</span> {item.Data}</h1>
        </div>

    </div>
  );
}

export default CardPonto;