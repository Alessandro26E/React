import { Link } from 'react-router-dom';
import './Login.css'
import api from '../../../utils/Api'
import { useRef } from 'react';

function Login() {

    const inputEmail = useRef()
    const inputPassword = useRef()


    async function loginVerify() {
        const allUsers = await api.get('/usuarios')

        const validarEmail = (email) => {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(String(email).toLowerCase())
        }

        const Email = inputEmail.current.value
        const Password = inputPassword.current.value   

        if ( validarEmail(Email) && Password) {
           const userAtual = allUsers.data.find(item => item.email == Email)
           
           if (!userAtual) {
                console.log('usuario com essa email nao cadastrado, faça um cadastro antes')
            return 
           }
           if ( userAtual.email === String(Email) && userAtual.password === String(Password)) {
                console.log("usuario logado com sucesso")
           } else {
            console.log('dados incorretos')
           }
        }

    }

    return (
    <div className='bg-[#d3d3d3] w-[350px] h-[250px] rounded-[17px] flex flex-col items-center justify-center gap-2'>
        <h1 className='font-bold text-[20px] text-center'>FAÇA SEU LOGIN</h1>
        <input ref={inputEmail} type="email" placeholder='Digite seu email' className='bg-[#b6b6b6] text-center rounded-md h-[35px] w-[250px]'/>
        <input ref={inputPassword} type="password" placeholder='Digite sua senha' className='bg-[#b6b6b6] text-center rounded-md h-[35px] w-[250px]'/>
        <button onClick={loginVerify} className='bg-blue-700 text-white rounded-md w-[100px] h-[40px] cursor-pointer'>Logar</button>
        <p>Não tem uma conta? <Link to='/cadastro' className='text-blue-600'>Cadastre-se Aqui</Link> </p>
    </div>
    )
}

export default Login;