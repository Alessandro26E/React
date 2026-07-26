import { useNavigate } from 'react-router-dom';
import './style.css'
import api from '../../../api/api'
import { useEffect, useState } from 'react';
import cookies from 'js-cookie'
function Cadastro () {
    const Navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const nextPage = (page) => {
        Navigate(`/${page}`)
    }
   
    const validateEmail = (email) => {
      return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
    };

    const cadastrandoUsuario = async () => {
      if (!validateEmail(email)) {
        return console.log("Email Invalido!");
      }

      console.log("Email Validado!");

      if (password.length <= 5) {
        return console.log("Senha Muito curta. Min 5 Letras");
      }

      const response = await api.post("/cadastro", {
        email: email,
        password: password,
      });

      if (response) {
        console.log(response.data.token)
        cookies.set('token', response.data.token, { expires: 1})

      }

      Navigate('/login')
      console.log(`Email: ${email} Password: ${password}`);
      console.log("Usuario cadastrado com sucesso!");
    };

    useEffect( () => {

      const autoLogin = async () => {
        const token = cookies.get('token')
        if (!token) {
          return console.log('Não tem token, primeira vez no site!')
        }

        console.log('token encontrado: ' + token)

        try {

          const result = await api.post('/autoLogin', {
            token: localStorage.getItem('token')
          })

          if (result) {
            console.log('Token Valido: Encontrado')

            Navigate('/home')
            return console.log('resultado: ', result.data.message)
          }

          
        

        } catch (err) {
           Navigate('/')
          console.log("Token Expirado!")
        }
  
      }

      autoLogin()
      
    },[])

    return (
        <div className='bg-[#2e2e2e] w-screen h-screen flex flex-col items-center'>
            <h1 className='text-[17px] mt-5 text-[#fffbfb] font-Montserrat border-2 w-[250px] h-[40px] rounded-[9px] text-center flex items-center justify-center'>Pagina de Cadastro</h1>

            <div className='w-[500px] h-[600px] mt-5 flex items-center justify-center'>

                <div className='bg-[#dbdbdb] w-[400px] h-[300px] rounded-[20px] flex flex-col items-center '>
                    <h1 className='text-[#727272] font-Roboto font-semibold text-[20px] mt-2'>FAÇA SEU CADASTRO</h1>
                    <input onChange={(e) => setEmail(e.target.value)} type="email"  placeholder='DIGITE SEU EMAIL' className='bg-[#b3b1b1] h-[40px] w-[250px] text-center font-Montserrat rounded-md mt-5' required/>
                    <input onChange={(e) => setPassword(e.target.value)} type="password"  placeholder='DIGITE SUA SENHA' className='bg-[#b3b1b1] h-[40px] w-[250px] text-center font-Montserrat rounded-md mt-2' required/>
                    <button onClick={cadastrandoUsuario} className='bg-[#2b2b2b] text-white font-Montserrat w-[120px] h-[40px] rounded-[6px] mt-2 cursor-pointer'>Cadastrar</button>
                    <p className='font-Roboto text-[14px] mt-2'>Já tem uma conta? <a onClick={() => nextPage('login')} className='text-blue-700 cursor-pointer'>Entre Aqui!</a></p>
                </div>

            </div>

        </div>
    )
}

export default Cadastro;