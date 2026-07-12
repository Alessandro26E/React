import { useNavigate } from 'react-router-dom';
import './style.css'
import api from '../../../api/api'
import { useEffect, useState } from 'react';

function Login () {
    const Navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function nextPage(page) {
        Navigate(`/${page}`)
    }

    const validateEmail = (email) => {
      return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
    };
    
    const verificandoUsuario = async () => {
        const Allusers = await api.get('/usuarios', {
            email: email
        })
        
        if (!validateEmail(email)) {
            return console.log("Email Invalido!") 
        }


        if (password.length <= 5 ) {
            return console.log("Senha Muito curta. Min 5 Letras")
        }

        const usuario = Allusers.data.find((user) => user.email === email)

        if (!usuario) {
            return console.log("Usuario não encontrado no banco de dados!")
        }

        const response = await api.post('/login', {
            email: email,
            password: password
        })

        console.log('Usuario logado com sucesso!')
        console.log('Token Atualizado: ', response.data)
        localStorage.setItem('token', response.data)
        Navigate('/home')
    }

    return (
        <div className='bg-[#202020] w-screen h-screen flex flex-col items-center'>
            <h1 className='text-[17px] mt-5 text-[#fffbfb] font-Montserrat border-2 w-[250px] h-[40px] rounded-[9px] text-center flex items-center justify-center'>Pagina de Login</h1>

            <div className='w-[500px] h-[600px] mt-5 flex items-center justify-center'>

                <div className='bg-[#dbdbdb] w-[400px] h-[300px] rounded-[20px] flex flex-col items-center '>
                    <h1 className='text-[#727272] font-Roboto font-semibold text-[20px] mt-2'>FAÇA SEU LOGIN</h1>
                    <input onChange={(e) => setEmail(e.target.value)} type="email"  placeholder='DIGITE SEU EMAIL' className='bg-[#b3b1b1] h-[40px] w-[250px] text-center font-Montserrat rounded-md mt-5' required/>
                    <input onChange={(e) => setPassword(e.target.value)} type="password"  placeholder='DIGITE SUA SENHA' className='bg-[#b3b1b1] h-[40px] w-[250px] text-center font-Montserrat rounded-md mt-2' required/>
                    <button onClick={verificandoUsuario} className='bg-[#2b2b2b] text-white font-Montserrat w-[120px] h-[40px] rounded-[6px] mt-2 cursor-pointer'>LOGAR</button>
                    <p className='font-Roboto text-[14px] mt-2'>Não tem uma conta? <a onClick={() => nextPage('cadastro')} className='text-blue-700 cursor-pointer'>Se Cadastre Aqui!</a></p>
                </div>

            </div>

        </div>
    )
}

export default Login;