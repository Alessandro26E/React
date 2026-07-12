import { useNavigate } from 'react-router-dom';
import './style.css'

function Home() {
    const Navigate = useNavigate()

    function nextPage(page) {
        Navigate(`/${page}`)
    }


    return (
        <div className='bg-gray-300 w-screen h-screen'>
            <nav className='bg-[#252525] flex justify-between w-full h-[50px]'>
                <div className='flex items-center justify-center w-[180px] h-full'>
                    <h1 className='font-Montserrat text-[17px] text-white'>Pagina Home</h1>
                </div>

                <div className=' w-[400px] flex items-center justify-end pr-2 h-full'>
                    <button onClick={() => nextPage('')} className='w-[100px] h-[40px] bg-[#333333] text-white font-Roboto rounded-md cursor-pointer'>Sair</button>
                </div>
            </nav>

            <div id='div-top'>
                <h1 id='h1-principal' className='font-Roboto'>{`Bem Vindo(a) Pagina Home!`}</h1>
            </div>
        </div>
    )
}

export default Home;