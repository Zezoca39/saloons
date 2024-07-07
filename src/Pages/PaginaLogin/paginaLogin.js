// PaginaInicial.js
import '../../styles.css';
import NavbarComponent from './Components/Navbar/navbar';
import Footer from './Components/Footer/footer';
import Login from './Components/LogIn/LogIn';

const PaginaInicial = () => {
    return (
        <div>
            <div style={{ marginBottom: '20px' }}>
                <NavbarComponent />
            </div>
            <Login />
            <Footer />
        </div>
    );
};

export default PaginaInicial;
