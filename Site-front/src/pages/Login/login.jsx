import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import './styles.css'
import logo from '../../assets/IconSite.png'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useEffect, useRef, useState } from 'react'
import api from '../../services/api'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { CheckCheckIcon, Terminal } from 'lucide-react'

function App() {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setemail] = useState('')

    const inputEmail = useRef()
    const inputPassword = useRef()

    async function getUsers() {
        const usersFromApi = await api.get('/login')
        return usersFromApi.data
    }

     async function logandoUser () {
        const users = await getUsers()

        const consultando = users.map((user) => {
            if (user.email === inputEmail.current.value && user.password === inputPassword.current.value) {
                console.log("usuario logado com sucesso")
            } else {
                console.log("Email ou senha digitado não encontrado")
            }
        })

    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div id='container' className='w-screen h-screen flex flex-col justify-center items-center'>

           <div id='cardNotify'>
                <p className='text-white text-center font-inter'>Parabêns você está logado na sua conta!</p>
           </div>
            <Card className='h-auto w-[450px] border-1 border-[#222222] bg-[#080808]'>
                
                <div className='w-full max-w-md text-center flex justify-center '>
                    <img src={logo} className='h-25 w-auto'/>   
                </div>

                <CardHeader className='text-center mt-3'>
                    <CardTitle className=' text-white text-2xl font-bold'>Faça seu Login</CardTitle>
                    <CardDescription className=' text-muted-foreground font-inter'>Acesse sua conta para continuar comprando</CardDescription>
                </CardHeader>

                <CardContent>
                    <form className='w-full h-auto flex flex-col items-center '>
                        <div className='w-full  h-auto flex flex-col '>

                            <label htmlFor="emails" className='text-white text-start text-[13px] mb-2'>Email</label>

                            <div id='inputId' className='w-[400px] h-[40px] rounded-md border-1  border-[#222222] bg-[#0e0d0d] flex items-center justify-center'>
                                <span id='emailicon' class="material-symbols-outlined text-muted-foreground">mail</span> 
                                <input ref={inputEmail} className='w-full h-full font-[Inter] text-[14px]' type="email" id='emails' autoComplete='email' placeholder='seuemail@gmail.com' required/>      
                            </div>

                            <label htmlFor="emails" className='text-white text-start text-[13px] mt-4 mb-2'>Senha</label>
                            
                            <div id='inputId' className='w-[400px] h-[40px] rounded-md border-1  border-[#222222] bg-[#0e0d0d] flex items-center justify-center'>
                                <span id='lockIcon' class="material-symbols-outlined text-muted-foreground">lock</span>
                                <input ref={inputPassword} className='w-full h-full font-[Inter] text-[14px] text-muted-foreground' type={showPassword ? "text" : "password"} id='password' autoComplete='new-password' placeholder='•••••••' required/>  
                                <span onClick={() => setShowPassword(!showPassword)} id='eyeIcon' class="material-symbols-outlined text-muted-foreground cursor-pointer">{showPassword ? "visibility_off" : "visibility"}</span>    
                            </div>

                            <button onClick={logandoUser} id='submitBtn' type='button' className='bg-[rgb(255,174,0)] mt-5 h-[45px] font-bold text-[17px] font-[Inter] rounded-md cursor-pointer'>Entrar</button>
                           
                           <div className='divider'>OU</div>

                           <button id='googleBTN' className='text-white text-center flex items-center text-[15px] mt-5 font-semibold font-inter gap-3 justify-center bg-[#050505] cursor-pointer h-[45px] border-1 border-[#222222] rounded-md'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256" fill="white"><g transform="scale(5.12)"><path d="M25.99609,48c-12.68359,0 -23.00391,-10.31641 -23.00391,-23c0,-12.68359 10.32031,-23 23.00391,-23c5.74609,0 11.24609,2.12891 15.49219,5.99609l0.77344,0.70703l-7.58594,7.58594l-0.70312,-0.60156c-2.22656,-1.90625 -5.05859,-2.95703 -7.97656,-2.95703c-6.76562,0 -12.27344,5.50391 -12.27344,12.26953c0,6.76563 5.50781,12.26953 12.27344,12.26953c4.87891,0 8.73438,-2.49219 10.55078,-6.73828h-11.55078v-10.35547l22.55078,0.03125l0.16797,0.79297c1.17578,5.58203 0.23438,13.79297 -4.53125,19.66797c-3.94531,4.86328 -9.72656,7.33203 -17.1875,7.33203z"/></g></svg>
                            Entrar com Google</button>
                            <button className='text-[rgb(255,174,0)] font-inter text-[14px] mt-5 cursor-pointer'>Esqueceu sua senha?</button>

                            <span className='text-[#a5a5a5] font-inter text-center mt-3'>Não tem uma conta? <button className='cursor-pointer font-semibold font-inter text-[14px] text0-center text-[rgb(255,174,0)]'>Criar Conta</button></span>
                        </div>
                    </form>
                </CardContent>

            </Card>
        </div>
    )
}

export default App