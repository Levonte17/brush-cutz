import { Link } from 'react-router-dom';
import { login, logout } from '../Firebase';

function Header({ user }) {
    return (
        <div className='header'>
        <nav className="nav">
            <Link to="/">
                <div className='nav-logo'>BRUSH CUTZ</div>
            </Link>
    <section>
        { 
            user ? 
            <>
            <div className='nav-logo'>
                Welcome, {user.displayName}
            </div>
            <div 
                onClick={logout}>
                LOGOUT
            </div>
            <Link to="/people">
                <div className='nav-logo'>GET IN LINE</div>
            </Link>
            </>
        :
        <div 
            onClick={login}>
            LOGIN
        </div>
        }
    </section>
            </nav>
            </div>
    );
}


export default Header;