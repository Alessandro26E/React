import './Card.css'

function Card( props ) {

    const { texto: text, text2 } = props

    return (
      <div className="bg-gray-900 w-[300px] h-[40px] rounded-2xl flex items-center justify-center">
        <h1 className="text-white font-medium">{text + text2}</h1>
      </div>
    );
}

export default Card;