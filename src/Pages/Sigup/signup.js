import '../../styles.css';
import NavbarComponent from './Components/Navbar/navbar';
import Login from './Components/LogIn/LogIn';

const PaginaInicial = () => {
    return (
        <div>
            <div style={{ marginBottom: '20px' }}>
                <NavbarComponent />
            </div>
            <Login />
        </div>
    );
};

export default PaginaInicial;
