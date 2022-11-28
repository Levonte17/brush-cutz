import { Link } from 'react-router-dom';

function Header({ user }) {
    return (
        <nav className="nav">
            <Link to="/">
                <div className='nav-logo'>BRUSH CUTZ</div>
            </Link>
            <Link to="/people">
                <div className='nav-logo'>GET IN LINE</div>
            </Link>
            <Link to="/login">
                <div className='nav-logo'>LOGIN</div>
            </Link>

            
        </nav>
    );
}


export default Header;