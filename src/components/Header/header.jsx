
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faSignOut } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../slices/auth";


export default function Header(){


    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector((state) => state.auth)
    const { entities } = useSelector((state) => state.profile)
    const myLogout = () => {
        dispatch(logout())
    }



    return <nav className="main-nav">
        <Link to="/" className="main-nav-logo">
            <img
                className="main-nav-logo-image"
                src={Logo}
                alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
        
            {isLoggedIn ? (
                entities === null ? ( 
                    <p>Loading profile...</p>
                ) :(
                <div>
                    <Link className="main-nav-item user-icon2" to="/sign-in">
                        <FontAwesomeIcon icon={faUserCircle} className='user-icon' />
                        {entities.body.firstName}
                    </Link>
                
                    <button className='logout-btn' onClick={myLogout}>
                        <FontAwesomeIcon icon={faSignOut} className='user-icon' />
                        Sign Out
                    </button>
                </div>
                )
            ) : (
                <div>
                    <Link className="main-nav-item" to="/sign-in">
                        <FontAwesomeIcon icon={faUserCircle}  className='user-icon' />
                        Sign In
                    </Link>
                </div>
             )} 
    </nav>
}