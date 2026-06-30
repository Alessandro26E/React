import { Link } from 'react-router-dom';
import './Cadastro.css'
import { useRef } from 'react';
import api from '../../../utils/Api'
function Cadastro () {

    const inputEmail = useRef()
    const inputPassword = useRef()


    async function cadastrarUsuario() {

        const validarEmail = (email) => {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(String(email).toLowerCase())
        }

        if (inputEmail.current.value && inputPassword.current.value && validarEmail(inputEmail.current.value) ) {

            await api.post("/usuarios", {
                email: inputEmail.current.value,
                password: inputPassword.current.value,
            });
            console.log('usuario cadastrado no sistema!')
            inputEmail.current.value = ''
            inputPassword.current.value = ''
        } else {
            console.log('preencha os inputs!')
        }
        

    }
    return (
        <div className='bg-[#d3d3d3] w-[350px] h-[250px] rounded-[17px] flex flex-col items-center justify-center gap-2'>
            <h1 className='font-bold text-[20px] text-center'>FAÇA SEU CADASTRO</h1>
            <input ref={inputEmail} type="email" placeholder='Digite seu email' className='bg-[#b6b6b6] text-center rounded-md h-[35px] w-[250px]'/>
            <input ref={inputPassword} type="password" placeholder='Digite sua senha' className='bg-[#b6b6b6] text-center rounded-md h-[35px] w-[250px]'/>
            <button onClick={cadastrarUsuario} className='bg-green-800 text-white rounded-md w-[100px] h-[40px] cursor-pointer'>Cadastrar</button>
            <p>Já tem uma conta? <Link to='/login' className='text-blue-600'>Faça seu Login Aqui!</Link> </p>
        </div>
    )
}

export default Cadastro;