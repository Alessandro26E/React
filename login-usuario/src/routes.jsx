import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cadastro from './components/cadastro/Cadastro';
import Login from './components/login/Login';
import App from './App';

function appRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={ <Login/> } ></Route>
                <Route path='/cadastro' element={ <Cadastro/> } ></Route>
                <Route path='/' element={ <App/> } ></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default appRoutes;