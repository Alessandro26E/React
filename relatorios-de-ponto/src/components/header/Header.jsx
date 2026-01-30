import './Header.css'
import { FaRegClock  } from 'react-icons/fa'
import { FaRegUser } from 'react-icons/fa'

function Header () {

    return (
        <div className='header-container'>
            <div className='second-container'>
                <div className='logo-div'>
                    <span> <FaRegClock/> </span>
                    <h1>ControlePonto</h1>
                </div>

                <div className='userInfos-div'>
                    <div className='name-div'>
                        <h1>UserName</h1>
                        <p>Funcionario #12312</p>
                    </div>
                    <span> <FaRegUser /> </span>
                </div>
                

            </div>
        </div>
    )
}

export default Header;