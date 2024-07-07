import '../../styles.css';
import Cards from './Components/Cards/cards'
import NavbarComponent from './Components/Navbar/navbar';

const PaginaInicial = () => {
    return (
        <div>
            <div style={{ marginBottom: '20px' }}>
                <NavbarComponent />
            </div>
            <Cards />
        </div>
    );
};

export default PaginaInicial;
