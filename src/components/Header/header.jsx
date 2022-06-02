import { Link } from 'react-router-dom'
import Logo from '../../assets/img/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

export default function Header(){
    return <nav class="main-nav">
        <Link to="/" class="main-nav-logo">
            <img
            class="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
            />
            <h1 class="sr-only">Argent Bank</h1>
        </Link>
        <div>
            <Link class="main-nav-item" to="./sign-in.html">
           
                <FontAwesomeIcon icon={faUserCircle} />
                Sign In
            </Link>
        </div>
    </nav>
}