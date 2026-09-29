import './style.css'
import { FaRegHeart } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaShieldAlt } from "react-icons/fa";

function Home () {

    return (
        <div className='w-screen h-screen bg-background '>
            <div className='w-full h-[500px] bg-linear-120 to-[#55926f] from-[#104b28] flex items-center justify-center'>

                <div className=' w-[800px] h-[90%]'>
                    <div className='bg-[rgba(255,255,255,0.1)] w-[225px] h-[25px] rounded-2xl flex justify-center items-center'>
                        <FaRegHeart className='text-white text-[14px] mr-2'/>
                        <p className='text-white text-[12px] font-Inter font-semibold'>AÇÃO SOLIDÁRIA MÃOS DADAS</p>
                    </div>
                    <h1 className=' text-white font-googleSans font-bold text-[3rem] mt-3 mb-3'>Vaquinha do Bem</h1>
                    <p className='text-white font-Inter font-normal'>Estamos arrecadando para a reforma do refeitório comunitário do bairro Vila Nova, que serve 180 refeições por dia. Escolha seus números, pague no Pix e concorra a uma cesta de produtos doados pelo comércio local.</p>

                    <div className='bg-[rgba(255,255,255,0.1)] w-[95%] h-[90px] rounded-3xl mt-6 flex flex-col items-center justify-center'>
                        <div className=' w-[95%] h-[20px] flex justify-between items-center mb-2'>
                            <p className='text-white font-Inter font-semibold text-[14px]'>0 de 100 números</p>
                            <p className='text-white font-Inter font-semibold text-[14px]'>0%</p>
                        </div>

                        <div className='bg-[rgba(255,255,255,0.2)] w-[95%] h-[10px] rounded-md'>
                            <div className='bg-white w-[10%] h-full rounded-md'></div>
                        </div>

                        <p className='text-[rgba(255,255,255,0.8)] font-Inter text-[12px] mr-124 mt-2'>Meta: R$ 2.500 · 100 números de R$ 25</p>
                        
                    </div>

                    <div className='w-[95%] h-[80px] mt-3 flex flex-col items-center justify-center'>
                        <div className='w-full h-[30px]  flex items-center gap-'>
                            <IoIosPhonePortrait className='text-white text-[20px] '/>
                            <p className='font-Inter text-white text-[13px]'>Feito para o celular: 3 toques e pronto</p>
                        </div>
                        
                        <div className='w-full h-[30px]bg-gray-800 flex items-center gap-1'>
                            <FaShieldAlt className='text-white text-[16px]'/>
                            <p className='font-Inter text-white text-[13px]'>Pagamento por Pix com confirmação automática</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Home;